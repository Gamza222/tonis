import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { type ThunkExtrArg, type StateSchema } from './StateSchema';
import { type CombinedState, type Reducer } from 'redux';
import { type NavigateOptions, type To } from 'react-router-dom';
import { createReducerManager } from './ReducerManager';
import { $api } from 'shared/api/api';
import { RegisterReducer } from 'features/Register';
import { VerifyUserReducer } from 'features/VerifyUser';
import { LoginReducer } from 'features/Login';
import { LoginVerifyCodeReducer } from 'features/LoginVerifyCode';
import { PageLoaderReducer } from 'features/PageLoader';
import { userReducer } from 'entities/User';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    //auth
    Register: RegisterReducer,
    VerifyUser: VerifyUserReducer,
    Login: LoginReducer,
    LoginVerifyCode: LoginVerifyCodeReducer,
    //auth
    User: userReducer,

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
    middleware: getDefaultMiddleware =>
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
