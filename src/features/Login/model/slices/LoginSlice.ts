import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { LoginSendCodeThunk } from '../services/LoginSendCodeThunk';

const initialState: LoginSchema = {
  isLoading: false,
  data: {
    password: '',
    email: '',
  },
  userId: '',
  email: '',
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.data.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.data.password = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(LoginSendCodeThunk.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(LoginSendCodeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.userId = action.payload.data.userId;
        state.email = action.payload.data.email;
      })
      .addCase(LoginSendCodeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: LoginActions } = LoginSlice;
export const { reducer: LoginReducer } = LoginSlice;
