import * as React from "react";
import { Col, Row } from "react-grid-system";

export interface IFormGroup {
  name?: string;
  label?: string;
}

export const FormGroup: React.FC<IFormGroup> = ({ name, label, children }) => {
  return (
    <Row>
      {label && (
        <Col xs={12}>
          <label htmlFor={name}>{label}</label>
        </Col>
      )}
      <Col xs={12}>{children}</Col>
    </Row>
  );
};
