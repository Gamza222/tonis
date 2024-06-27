import React, { Suspense } from "react";

require("dotenv").config();
import "app/styles/index.scss";
import "shared/config/i18n/i18n";

import App from "app/App";
import eruda from "eruda";

import { render } from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";
import { WalletProvider } from "app/providers/WalletProvider";
import { platform } from "shared/lib/telegram/functions/telegram-platform";
import { PageLoader } from "features/PageLoader";

// import { Loader } from 'widgets/Loader';

const WebApp = window.Telegram.WebApp;
eruda.init();
platform?.initialize();
WebApp.MainButton.hide();
WebApp.BackButton.hide();

console.log(
  `${process.env.APP_URL}/tonconnect-manifest.json`,
  document.querySelector('link[rel="manifest"]') ? true : false
);

render(
  <Suspense fallback={<PageLoader />}>
    <WalletProvider>
      <StoreProvider>
        <HashRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HashRouter>
      </StoreProvider>
    </WalletProvider>
  </Suspense>,
  document.getElementById("root")
);
//BrowserRouter
