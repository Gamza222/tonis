import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { type ThunkExtrArg, type StateSchema } from "./StateSchema";
import { type CombinedState, type Reducer } from "redux";
import { type NavigateOptions, type To } from "react-router-dom";
import { createReducerManager } from "./ReducerManager";
import { $api } from "shared/api/api";
import { RegisterReducer } from "features/Register";
import { VerifyUserReducer } from "features/VerifyUser";
import { LoginReducer } from "features/Login";
import { PageLoaderReducer } from "features/PageLoader";
import { userReducer } from "entities/User";
import { initDataReducer } from "entities/initData";
import { inviteCodeReducer } from "entities/InviteCode/slices/InviteCodeSlice";
import { PairEntityReducer } from "entities/PairEntity/slices/pairEntitiesSlice";
import { NavbarReducer } from "widgets/Navbar";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    //auth
    Register: RegisterReducer,
    VerifyUser: VerifyUserReducer,
    Login: LoginReducer,
    User: userReducer,
    InitData: initDataReducer,
    //auth

    //entities
    InviteCode: inviteCodeReducer,
    PairEntities: PairEntityReducer,
    //entities

    //widgets
    Navbar: NavbarReducer,
    //widgets

    //feat
    PageLoader: PageLoaderReducer,
  };

  const ReducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtrArg = {
    api: $api,
  };
  const store = configureStore({
    reducer: ReducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = ReducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
