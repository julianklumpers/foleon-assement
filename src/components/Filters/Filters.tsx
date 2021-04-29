import * as React from "react";

import { Col, Row } from "react-grid-system";

import { usePublications } from "@src/hooks/publications/usePublications";
import { Button, FormGroup, Input, Select } from "@src/components";
import { useForm } from "react-hook-form";
import { QueryOptions } from "@src/@types/services/base";

const filterTypes = {
  eq: "Equals",
  neq: "Not Equals",
  lt: "Less Than",
  lte: "Less Than Or Equal",
  gt: "Greater Than",
  gte: "Greater Than Or Equal",
  isnull: "Is Null",
  isnotnull: "Is Not Null",
} as const;

interface IProps {
  onFilterDone(args: Pick<QueryOptions, "filter">): void;
}

export const Filters: React.FC<IProps> = ({ onFilterDone }) => {
  const { data } = usePublications();
  const { register, handleSubmit } = useForm();

  const [filterAmmount, setFilterAmmount] = React.useState(0);

  const handleClear = () => {
    setFilterAmmount(0);
    onFilterDone({});
  };

  return (
    <form onSubmit={handleSubmit(onFilterDone)}>
      <Row gutterWidth={30}>
        {Array.from({ length: filterAmmount }).map((_, num) => (
          <React.Fragment key={`filter-group-${num}`}>
            <Col xs={4}>
              <FormGroup label="Field">
                <Select
                  name={`filter.${num}.field`}
                  register={register}
                  data-testid="filter-field"
                >
                  {Object.keys(data?._embedded?.edition?.[0] || {}).map(
                    (option, idx) => (
                      <option
                        key={`field-${idx}-${num}`}
                        value={option}
                        data-testid="filter-field-option"
                      >
                        {option}
                      </option>
                    )
                  )}
                </Select>
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup label="Type">
                <Select
                  name={`filter.${num}.type`}
                  register={register}
                  data-testid="filter-type"
                >
                  {Object.entries(filterTypes).map(([key, val], idx) => (
                    <option key={`type-${idx}-${num}`} value={key}>
                      {val}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup label="Value">
                <Input
                  name={`filter.${num}.value`}
                  register={register}
                  data-testid="filter-value"
                />
              </FormGroup>
            </Col>
          </React.Fragment>
        ))}
      </Row>
      <br />
      <Row justify="center" gutterWidth={30}>
        <Col>
          <Button
            type="button"
            onClick={() => setFilterAmmount((p) => p + 1)}
            data-testid="add-filter"
          >
            Add filter
          </Button>
        </Col>
        <Col>
          {filterAmmount !== 0 && (
            <Button
              type="button"
              onClick={handleClear}
              data-testid="clear-filter"
            >
              Clear
            </Button>
          )}
        </Col>
        <Col>
          {filterAmmount !== 0 && (
            <Button type="submit" data-testid="go-filter">
              Filter
            </Button>
          )}
        </Col>
      </Row>
    </form>
  );
};
