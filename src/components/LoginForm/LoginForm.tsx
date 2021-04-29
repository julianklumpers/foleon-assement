import * as React from "react";
import { useTheme } from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { Row, Col } from "react-grid-system";
import { ReactComponent as Logo } from "@src/assets/logo.svg";
import { FormGroup, Input, Button } from "@src/components";

import { StyledLoginContainer } from "./styled";

export interface ICredentials {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin(credentials: ICredentials): void;
}

const defaultValues: ICredentials = {
  email: "joost+candidate@foleon.com",
  password: "assessment2020",
};

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const theme = useTheme();
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <StyledLoginContainer>
      <Row>
        <Col xs={12}>
          <Logo fill={theme.colors.primary} width="150" height="40" />
        </Col>
        <Col xs={12}>
          <form onSubmit={handleSubmit(onLogin)}>
            <FormGroup name="email" label="E-mail">
              <Input name="email" register={register} />
            </FormGroup>
            <br />
            <FormGroup name="password" label="Password">
              <Input type="password" name="password" register={register} />
            </FormGroup>
            <br />
            <Button type="submit">Login</Button>
          </form>
        </Col>
      </Row>
    </StyledLoginContainer>
  );
};
