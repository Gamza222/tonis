import { routeConfig } from "shared/config/routeConfig/routeConfig";
import React, { Suspense, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import { Loader } from 'widgets/Loader';
// import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const navigate = useNavigate();
  const url = window.location.pathname;

  useEffect(() => {
    if (
      !Object.values(routeConfig).find(({ element, path }) => {
        return `${path}` == url;
      })
    ) {
      navigate("/");
    }
    navigate("/login");
  }, [url]);

  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={
            <Suspense
              fallback={
                // <PageLoader />
                // <Loader className='main-loader' />
                <p>Loading...</p>
              }
            >
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
