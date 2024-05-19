import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginVerifyCodeSchema } from '../types/LoginVerifyCodeSchema';
import { LoginVerifyCodeThunk } from '../services/LoginVerifyCodeThunk';

const initialState: LoginVerifyCodeSchema = {
  isLoading: false,
  inputData: {
    code: '',
    email: '',
  },
  data: null,
};

export const LoginVerifyCodeSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.inputData.code = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(LoginVerifyCodeThunk.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(LoginVerifyCodeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = action.payload.user;
      })
      .addCase(LoginVerifyCodeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: LoginVerifyCodeActions } = LoginVerifyCodeSlice;
export const { reducer: LoginVerifyCodeReducer } = LoginVerifyCodeSlice;
