import { routeConfig } from "shared/config/routeConfig/routeConfig";
import React, { Suspense, useEffect } from "react";

import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { getInviteCodeState } from "entities/InviteCode/selectors/getInviteCodeState";

import ProtectedRoute from "./ProtectedRoute";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { NavbarActions } from "widgets/Navbar";
import { PageLoader } from "features/PageLoader";

const AppRouter = () => {
  const navigate = useNavigate();
  const url = useLocation();
  const isAuthenticated = useSelector(getInviteCodeState)?.success;
  const dispatch = useAppDispatch();

  const toggleNavbarState = () => {
    console.log("path", url.pathname);
    if (url.pathname === "/login") {
      dispatch(NavbarActions.setNavbarPageClosed(true));
    } else if (url.pathname !== "/login") {
      dispatch(NavbarActions.setNavbarPageClosed(false));
    }
  };

  useEffect(() => {
    const pathExist = Object.values(routeConfig).some(
      ({ path }) => url.pathname === path
    );

    toggleNavbarState();
    if (url.pathname === "/login" && isAuthenticated) {
      navigate("/trade");
      return;
    }

    if (!pathExist) {
      navigate("/trade");
      return;
    }

    // localStorage.setItem("path", url.pathname);
  }, [isAuthenticated, url.pathname, navigate]);

  useEffect(() => {
    toggleNavbarState();
  }, []);

  return (
    <>
      <Routes>
        {Object.values(routeConfig).map(({ element, path, protectedRoute }) => {
          return !protectedRoute ? (
            <Route
              key={path}
              element={
                <Suspense
                  fallback={
                    // <PageLoader />
                    // <Loader className='main-loader' />
                    <PageLoader />
                  }
                >
                  <div className="page-wrapper">{element}</div>
                </Suspense>
              }
              path={path}
            />
          ) : (
            <Route path={path} key={path} element={<ProtectedRoute />}>
              <Route
                path={path}
                element={
                  <Suspense
                    fallback={
                      // <PageLoader />
                      // <Loader className='main-loader' />
                      <PageLoader />
                    }
                  >
                    <div className="page-wrapper">{element}</div>
                  </Suspense>
                }
              />
            </Route>
          );
        })}
      </Routes>
    </>
  );
};

export default AppRouter;
