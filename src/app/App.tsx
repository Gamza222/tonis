import React, { useMemo, useRef } from 'react';

import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';

import { Navbar, NavbarMobile } from 'widgets/Navbar';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';
import { getPageLoaderData, PageLoader } from 'features/PageLoader';
import { AppRouter } from './providers/Router';
import { DimensionsContext } from './providers/DimensionProvider/DimensionsProvider';

import { useSelector } from 'react-redux';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  const { width, height } = useWindowDimensions();
  const appRef = useRef(null);
  const appRect = useElementRect(appRef);
  const dimensionsProps = useMemo(
    () => ({
      width,
      height,
      appRect,
    }),
    [width, height, appRect],
  );

  const loadingLogo = useSelector(getPageLoaderData).isLoading;

  const landing = true;

  const appContentMods: Mods = {
    'app-content-opened': !loadingLogo,
  };

  return (
    <DimensionsContext.Provider value={dimensionsProps}>
      <div className={classNames('app', {}, [])} ref={appRef}>
        <PageLoader />
        <ToastContainer
          className={'toast-container'}
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
          transition={Bounce}
        ></ToastContainer>

        <div className={classNames('app-content', { ...appContentMods }, [])}>
          {landing && (width > 1350 ? <Navbar /> : <NavbarMobile />)}
          <div className='content-page'>
            <AppRouter />
          </div>
        </div>
      </div>
    </DimensionsContext.Provider>
  );
};

export default App;
