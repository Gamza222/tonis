import React, { Suspense } from 'react';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

import App from 'app/App';

import { render } from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
// import { StoreProvider } from 'app/providers/StoreProvider';

import { StoreProvider } from 'app/providers/StoreProvider';
// import { Loader } from 'widgets/Loader';

render(
  <Suspense
    fallback={
      // <PageLoader />
      <p>Loading...</p>
      // <Loader className='main-loader' />
    }
  >
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  </Suspense>,
  document.getElementById('root'),
);
//BrowserRouter
