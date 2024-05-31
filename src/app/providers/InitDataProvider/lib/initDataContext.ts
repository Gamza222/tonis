import { createContext } from "react";

export interface InitDataContextProps {
  initData?: WebAppInitData;
  data?: WebApp;
}

export const InitDataContext = createContext<InitDataContextProps>({});
