import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';

interface LoginSendCodeThunkProps {
  password: string;
  email: string;
}

interface LoginSendCodeResponse {
  data: {
    userId: string;
    email: string;
  };
}

export const LoginSendCodeThunk = createAsyncThunk<
  LoginSendCodeResponse,
  LoginSendCodeThunkProps,
  ThunkConfig<string>
>('login/send_code', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<LoginSendCodeResponse>(
      '/send_login_code',
      authData,
    );

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
