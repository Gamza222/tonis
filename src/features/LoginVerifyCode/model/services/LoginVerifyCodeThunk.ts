import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginVerifyCodeThunkProps {
  code: string;
  email: string;
}

interface LoginVerifyCodeResponse {
  user: User;
}

export const LoginVerifyCodeThunk = createAsyncThunk<
  LoginVerifyCodeResponse,
  LoginVerifyCodeThunkProps,
  ThunkConfig<string>
>('login/verify_code', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<LoginVerifyCodeResponse>(
      '/login',
      authData,
    );
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data.user));
    return response.data;
  } catch (err: any) {
    if (err.response.status == 429) {
      return rejectWithValue(
        'Слишком много запросов верификации пользователя, попробуйте через 1 минуту!',
      );
    }

    return rejectWithValue(err.response.data.errMessage);
  }
});
