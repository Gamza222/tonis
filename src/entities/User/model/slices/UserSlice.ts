import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { User, UserScema } from "../types/User";
import { fetchUserPhotosThunk } from "entities/User/api/fetchUserPhotosThunk";
import { UserProfilePhotos } from "telegraf/types";
import { fetchUserPhotoUrlThunk } from "entities/User/api/fetchUserPhotoUrlThunk";

const initialState: UserScema = {
  authData: undefined,
  error: "",
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPhotosThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchUserPhotosThunk.fulfilled,
        (state, action: PayloadAction<UserProfilePhotos>) => {
          state.isLoading = false;
          const data = {
            photo_id: action.payload.photos[0][0].file_id,
            ...state.authData,
          };
          state.authData = data;
          console.log(state.authData);
        }
      )
      .addCase(fetchUserPhotosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserPhotoUrlThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchUserPhotoUrlThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          const data = {
            photoLink: action.payload,
            ...state.authData,
          };
          state.authData = data;
          console.log(state.authData);
        }
      )
      .addCase(fetchUserPhotoUrlThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
