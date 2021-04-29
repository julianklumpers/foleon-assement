import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
import { LoginForm } from "@src/components";
import { ICredentials } from "@src/components/LoginForm/LoginForm";
import { useAuth } from "@src/hooks/auth/useAuth";
import { useAuthStore } from "@src/stores/useAuthStore";
import { useHistory } from "react-router";

const LoginPage = () => {
  const history = useHistory();
  const { mutateAsync: authAsync } = useAuth();
  const { login, isLoggedIn } = useAuthStore();

  const handleLogin = async (credentials: ICredentials) => {
    try {
      const res = await authAsync(credentials);
      login(res);
    } catch (err) {
      //handle error
      console.error({ err });
    }
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push("/app/publications");
    }
  }, [isLoggedIn]);

  return (
    <Container fluid style={{ backgroundColor: "#36464e" }}>
      <div style={{ backgroundColor: "#36464e" }}>
        <Row justify="center" align="center" style={{ height: "100vh" }}>
          <Col xs={11} md={6} xl={4}>
            <LoginForm onLogin={handleLogin} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LoginPage;
