import "dotenv";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import { PhotoSize, UserProfilePhotos } from "telegraf/types";
import axios from "axios";

export interface fetchUserPhotosThunkProps {
  user_id: number;
}

export interface fetchUserPhotosRequestProps {
  result: UserProfilePhotos;
  ok: boolean;
}

export const fetchUserPhotosThunk =
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  createAsyncThunk<
    UserProfilePhotos,
    fetchUserPhotosThunkProps,
    ThunkConfig<string>
  >("profile/fetchUserPhotos", async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<fetchUserPhotosRequestProps>(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getUserProfilePhotos`,
        { params: { user_id: data.user_id } }
      );
      console.log(response.data);
      return response.data.result;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  });
