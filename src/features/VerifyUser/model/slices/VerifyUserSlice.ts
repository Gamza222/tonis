import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { VerifyUserSchema } from '../types/VerifyUserSchema';
import { VerifyUserSendCodeThunk } from '../services/VerifyUserSendCodeThunk';

const initialState: VerifyUserSchema = {
  isLoading: false,
  data: {
    verifyCode: '',
  },
  userId: '',
};

export const VerifyUserSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setVerifyCode: (state, action: PayloadAction<string>) => {
      state.data.verifyCode = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(VerifyUserSendCodeThunk.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(VerifyUserSendCodeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.userId = action.payload.data.userId;
      })
      .addCase(VerifyUserSendCodeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: VerifyUserActions } = VerifyUserSlice;
export const { reducer: VerifyUserReducer } = VerifyUserSlice;
