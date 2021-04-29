import * as React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { appRoutes } from "@src/routes";
import { theme } from "@src/theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <React.Suspense fallback="loading...">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              {appRoutes
                .filter((route) => !route.protected)
                .map(({ path, exact, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    component={Component}
                  />
                ))}
              <Redirect to="/login" />
            </Switch>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </React.Suspense>
  );
};

export default App;
