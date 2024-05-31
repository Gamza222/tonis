// export interface CounterState {
//     value: number
// }

// eslint-disable-next-line max-len
import {
  type ReducersMapObject,
  type EnhancedStore,
  type AnyAction,
  type Reducer,
  type CombinedState,
} from "@reduxjs/toolkit";

import { type AxiosInstance } from "axios";
import { type NavigateOptions, type To } from "react-router-dom";

import { RegisterSchema } from "features/Register/model/types/RegisterSchema";
import { VerifyUserSchema } from "features/VerifyUser/model/types/VerifyUserSchema";
import { LoginSchema } from "features/Login/model/types/LoginSchema";
import { UserScema } from "entities/User";
import { LoginVerifyCodeSchema } from "features/LoginVerifyCode/model/types/LoginVerifyCodeSchema";
import { PageLoaderSchema } from "features/PageLoader/model/types/PageLoaderSchema";
import { InitDataSchema } from "entities/initData";
import { InviteCodeState } from "entities/InviteCode/types/InviteCode";

export interface StateSchema {
  //auth
  Register: RegisterSchema;
  VerifyUser: VerifyUserSchema;
  Login: LoginSchema;
  LoginVerifyCode: LoginVerifyCodeSchema;
  //auth

  InitData: InitDataSchema;
  User: UserScema;

  InviteCode?: InviteCodeState;

  //feat
  PageLoader: PageLoaderSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtrArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtrArg;
  state: StateSchema;
}
