import { LandingPage } from 'pages/LandingPage';
import React from 'react';

import { type RouteProps } from 'react-router-dom';

type routePropsData = RouteProps & {
  protected: boolean;
};

export enum AppRoutes {
  MAIN = 'main',

  // cabinet
  CABINET_PROFILE = 'cabinet_profile',
  // NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',

  // cabinet
  [AppRoutes.CABINET_PROFILE]: '/cabinet',
  // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, routePropsData> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <LandingPage />,
    protected: false,
  },

  // cabinet
  [AppRoutes.CABINET_PROFILE]: {
    path: RoutePath.cabinet_profile,
    element: <LandingPage />,
    protected: true,
  },
  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePath['not-found'],
  //   element: <NotFoundPageAsync />,
  // },
};
