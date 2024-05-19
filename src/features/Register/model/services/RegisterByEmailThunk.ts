import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';

interface RegisterByEmailThunkProps {
  name: string;
  email: string;
  password: string;
  code: string;
}

interface RegisterByEmailResponse {
  data: {
    userId: string;
  };
}

export const RegisterByEmailThunk = createAsyncThunk<
  RegisterByEmailResponse,
  RegisterByEmailThunkProps,
  ThunkConfig<string>
>('register/register_by_email_thunk', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<RegisterByEmailResponse>(
      '/register',
      authData,
    );

    return response.data;
  } catch (err: any) {
    if (err.response.status == 429) {
      return rejectWithValue(
        'Слишком много запросов авторизации, попробуйте через 1 минуту!',
      );
    }

    return rejectWithValue(err.response.data.errMessage);
  }
});
