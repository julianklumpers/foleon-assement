import { usePublications } from "@src/hooks/publications/usePublications";
import { appRoutes } from "@src/routes";
import { useAuthStore } from "@src/stores/useAuthStore";
import * as React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

const AppRouter = () => {
  const history = useHistory();
  const { isLoggedIn, logout } = useAuthStore();

  // useally there are other ways to check token validity
  const { error } = usePublications();

  React.useEffect(() => {
    // check for valid token and session
    if ((error as any)?.response?.status === 401) {
      logout();
    }

    if (!isLoggedIn) {
      history.replace("/login");
    }
  }, [isLoggedIn]);

  return (
    <Switch>
      {appRoutes
        .filter((route) => route.protected)
        .map(({ path, exact, Component }) => (
          <Route key={path} path={path} exact={exact} component={Component} />
        ))}
    </Switch>
  );
};

export default AppRouter;
