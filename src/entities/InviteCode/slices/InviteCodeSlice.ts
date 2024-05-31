import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InviteCodeState } from "../types/InviteCode";
import { sendInviteCodeThunk } from "../api/sendInviteCodeThunk";

const initialState: InviteCodeState = {
  data: undefined,
  error: "",
  isLoading: false,
  code: undefined,
  success: false,
};

export const inviteCodeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    clearUserCode: (state) => {
      state.code = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendInviteCodeThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        sendInviteCodeThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          const data = action.payload;
          state.data = data;
          state.success = true;
          state.error = "";
        }
      )
      .addCase(sendInviteCodeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: inviteCodeActions } = inviteCodeSlice;
export const { reducer: inviteCodeReducer } = inviteCodeSlice;
