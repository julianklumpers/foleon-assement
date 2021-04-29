import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
import { usePublications } from "@src/hooks/publications/usePublications";
import { Card, Filters } from "@src/components";
import { QueryOptions } from "@src/@types/services/base";

const PublicationsPage = () => {
  const [filter, setFilter] = React.useState<QueryOptions["filter"]>();
  const { data, isLoading } = usePublications({ filter });

  const handleFilterDone = (form: QueryOptions) => {
    setFilter(form?.filter);
  };

  return (
    <Container style={{ padding: "1rem" }}>
      <Filters onFilterDone={handleFilterDone} />
      <br />
      <div data-testid="bla">
        <Row gutterWidth={30}>
          {isLoading ? (
            <Col xs={12}>
              <span>Loading...</span>
            </Col>
          ) : (
            data?._embedded?.edition.map((d: any) => (
              <Col key={d.id} xs={4}>
                <Card data-testid="publication-card">
                  <strong>{d.name}</strong>
                  <br />
                  <code>{d.category}</code>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    </Container>
  );
};

export default PublicationsPage;
