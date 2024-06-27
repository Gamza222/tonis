import React from "react";

import { type RouteProps } from "react-router-dom";

import { LoginPage } from "pages/LoginPage";
import TradePage from "pages/TradePage/ui/TradePage";

type routePropsData = RouteProps & {
  protectedRoute: boolean;
};

export enum AppRoutes {
  LOGIN = "login",

  // cabinet
  APP = "app",
  PROFILE = "profile",
  TRADE = "trade",
  CAMPAIGNS = "campaigns",
  // NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.APP]: "/",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.TRADE]: "/trade",
  [AppRoutes.CAMPAIGNS]: "/Campaigns",

  // cabinet
  // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, routePropsData> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
    protectedRoute: false,
  },
  [AppRoutes.APP]: {
    path: RoutePath.app,
    element: <LoginPage />,
    protectedRoute: true,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <LoginPage />,
    protectedRoute: true,
  },
  [AppRoutes.TRADE]: {
    path: RoutePath.trade,
    element: <TradePage />,
    protectedRoute: true,
  },
  [AppRoutes.CAMPAIGNS]: {
    path: RoutePath.campaigns,
    element: <LoginPage />,
    protectedRoute: true,
  },

  // cabinet

  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePath['not-found'],
  //   element: <NotFoundPageAsync />,
  // },
};
