import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavbarState } from "../model/types";

const initialState: NavbarState = {
  closed: false,
  closedPage: true,
};

export const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbarClosed: (state, action: PayloadAction<boolean>) => {
      state.closed = action.payload;
    },
    setNavbarPageClosed: (state, action: PayloadAction<boolean>) => {
      state.closedPage = action.payload;
    },
  },
});

export const { actions: NavbarActions } = NavbarSlice;
export const { reducer: NavbarReducer } = NavbarSlice;
