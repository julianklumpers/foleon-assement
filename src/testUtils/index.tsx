import * as React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const mountWithProviders = ({ children, wrappers, history }: any) => {
  const ComponentProviders = wrappers.reduceRight(
    (acc: any, provider: string) => {
      if (provider === "router") {
        return <Router history={history}>{acc}</Router>;
      }

      return acc;
    },
    children
  );

  return (
    <React.Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {ComponentProviders}
        </QueryClientProvider>
      </ThemeProvider>
    </React.Suspense>
  );
};

const customRender = (
  ui: any,
  {
    wrappers = [],
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...options
  }: any = {}
) => {
  return {
    ...render(ui, {
      wrapper: (args) => mountWithProviders({ wrappers, history, ...args }),
      ...options,
    }),
    history,
    queryClient,
  };
};

export * from "@testing-library/react";
export { customRender as render, queryClient };
