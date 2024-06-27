import React, { useEffect, useMemo, useRef } from "react";

import "react-toastify/dist/ReactToastify.css";

import { classNames, Mods } from "shared/lib/classNames/classNames";

import { useSelector } from "react-redux";

import { DimensionsContext } from "./providers/DimensionProvider/DimensionsProvider";

import { useWindowDimensions } from "shared/lib/hooks/useWindowDimensions/useWindowDimensions";
import { useElementRect } from "shared/lib/hooks/useElementRect/useElementRect";
import { getPageLoaderData, PageLoader } from "features/PageLoader";

import { AppRouter } from "./providers/Router";
import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchUserPhotosThunk } from "entities/User/api/fetchUserPhotosThunk";
import { initDataActions } from "entities/initData";
import { getUserData } from "entities/User";
import { fetchUserPhotoUrlThunk } from "entities/User/api/fetchUserPhotoUrlThunk";
import { Bounce, ToastContainer } from "react-toastify";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Navbar } from "widgets/Navbar";
import { useLocation } from "react-router-dom";
import { PreventTelegramSwipeDownClosingIos } from "shared/lib/telegram/components/PreventScrolldownClosing";
import {
  platform,
  TelegramPlatform,
} from "shared/lib/telegram/functions/telegram-platform";

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  const dispatch = useAppDispatch();
  const { width, height } = useWindowDimensions();
  const { theme } = useTheme();
  const url = useLocation().pathname;

  const appRef = useRef(null);
  const appRect = useElementRect(appRef);
  const dimensionsProps = useMemo(
    () => ({
      width,
      height,
      appRect,
    }),
    [width, height, appRect]
  );

  const loadingLogo = useSelector(getPageLoaderData).isLoading;

  const tgApp = window.Telegram.WebApp;
  tgApp.expand();
  console.log(tgApp.isExpanded);
  const data = tgApp.initDataUnsafe as WebAppInitData;
  const userData = useSelector(getUserData);

  useEffect(() => {
    dispatch(initDataActions.setData(data));

    const id = data.user?.id;
    // const id = 744357658;
    id && dispatch(fetchUserPhotosThunk({ user_id: id }));
  }, [tgApp, data]);

  useEffect(() => {
    userData.authData?.photo_id &&
      dispatch(fetchUserPhotoUrlThunk({ file_id: userData.authData.photo_id }));
  }, [userData.authData?.photo_id]);
  // const data = JSON.parse(decodeURI(tgApp.initData) || "{}");

  const appContentMods: Mods = {
    "app-content-opened": !loadingLogo,
  };

  return (
    <DimensionsContext.Provider value={dimensionsProps}>
      <ThemeProvider>
        <div className={classNames("app", {}, [theme])} ref={appRef}>
          <ToastContainer
            className={"toast-container"}
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          ></ToastContainer>
          {tgApp.isExpanded && (
            <>
              <PreventTelegramSwipeDownClosingIos>
                <AppRouter />
              </PreventTelegramSwipeDownClosingIos>
              {/* {(!(platform instanceof TelegramPlatform) ||
                (platform instanceof TelegramPlatform &&
                  !platform.isIos())) && <Navbar />} */}
            </>
          )}
        </div>
      </ThemeProvider>
    </DimensionsContext.Provider>
  );
};

export default App;
