import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { InitDataSchema } from "../types/initDataSchema";

const initialState: InitDataSchema = {
  data: undefined,
  error: "",
  isLoading: false,
};

export const initDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<WebAppInitData>) => {
      state.data = action.payload;
    },
    initData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.data = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.data = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: initDataActions } = initDataSlice;
export const { reducer: initDataReducer } = initDataSlice;
