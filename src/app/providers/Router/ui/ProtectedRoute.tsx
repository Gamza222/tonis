import React, { Suspense } from "react";
import {
  Route,
  Navigate,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { getInviteCodeState } from "entities/InviteCode/selectors/getInviteCodeState";

interface ProtectedRouteProps {}

const ProtectedRoute = (props: ProtectedRouteProps): React.ReactElement => {
  const { ...rest } = props;
  const isAuthenticated = useSelector(getInviteCodeState)?.success;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />; //<Outlet />
};

export default ProtectedRoute;
