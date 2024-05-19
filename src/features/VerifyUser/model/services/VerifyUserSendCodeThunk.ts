import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';

interface VerifyUserSendCodeThunkProps {
  code: string;
  userId: string;
}

interface VerifyUserSendCodeResponse {
  data: {
    userId: string;
  };
}

export const VerifyUserSendCodeThunk = createAsyncThunk<
  VerifyUserSendCodeResponse,
  VerifyUserSendCodeThunkProps,
  ThunkConfig<string>
>('verify_user/verify_user_send_code_thunk', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<VerifyUserSendCodeResponse>(
      '/verify_user',
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
