import React from "react";

import { type RouteProps } from "react-router-dom";

import { LoginPage } from "pages/LoginPage";

type routePropsData = RouteProps & {
  protected: boolean;
};

export enum AppRoutes {
  LOGIN = "login",

  // cabinet
  CABINET_PROFILE = "cabinet_profile",
  // NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: "/login",

  // cabinet
  [AppRoutes.CABINET_PROFILE]: "/cabinet",
  // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, routePropsData> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
    protected: false,
  },

  // cabinet
  [AppRoutes.CABINET_PROFILE]: {
    path: RoutePath.cabinet_profile,
    element: <LoginPage />,
    protected: true,
  },
  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePath['not-found'],
  //   element: <NotFoundPageAsync />,
  // },
};
