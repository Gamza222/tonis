import React, { Suspense } from "react";

import "app/styles/index.scss";
import "shared/config/i18n/i18n";
import "dotenv";

import App from "app/App";
import eruda from "eruda";

import { render } from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
// import { StoreProvider } from 'app/providers/StoreProvider';

import { StoreProvider } from "app/providers/StoreProvider";
import { InitDataProvider } from "app/providers/InitDataProvider";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

// import { Loader } from 'widgets/Loader';

eruda.init();

render(
  <Suspense
    fallback={
      // <PageLoader />
      <p>Loading...</p>
      // <Loader className='main-loader' />
    }
  >
    <TonConnectUIProvider
      manifestUrl={`https://${process.env.APP_URL}/tonconnect-manifest.json`}
    >
      <StoreProvider>
        <HashRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HashRouter>
      </StoreProvider>
    </TonConnectUIProvider>
  </Suspense>,
  document.getElementById("root")
);
//BrowserRouter
