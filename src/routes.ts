import * as React from "react";

export const appRoutes = [
  {
    key: "login",
    path: "/login",
    exact: true,
    protected: false,
    Component: React.lazy(() => import("./pages/LoginPage")),
  },
  {
    key: "app",
    path: "/app",
    exact: false,
    protected: false,
    Component: React.lazy(() => import("./routers/AppRouter")),
  },
  {
    key: "publications",
    path: "/app/publications",
    exact: true,
    protected: true,
    Component: React.lazy(() => import("./pages/PublicationsPage")),
  },
];
