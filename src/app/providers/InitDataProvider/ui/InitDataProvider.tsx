import React, {
  type FC,
  type PropsWithChildren,
  useMemo,
  useState,
} from "react";
import { InitDataContext } from "../lib/initDataContext";

interface InitDataProviderProps extends PropsWithChildren {
  //   initData: WebAppInitData;
}

const InitDataProvider: FC<InitDataProviderProps> = (props) => {
  const { children } = props;

  const tgApp = window.Telegram.WebApp;
  const data = tgApp.initDataUnsafe as WebAppInitData;

  const defaultProps = useMemo(
    () => ({
      initData: data,
      data: tgApp,
    }),
    [data, tgApp]
  );

  return (
    <InitDataContext.Provider value={defaultProps}>
      {children}
    </InitDataContext.Provider>
  );
};

export default InitDataProvider;
