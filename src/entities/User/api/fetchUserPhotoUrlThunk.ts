import "dotenv";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";

import axios from "axios";
import { File } from "@telegraf/types";

export interface fetchUserPhotosThunkProps {
  file_id: string;
  //   file_path: string;
}

export interface fetchUserPhotoUrlRequestProps {
  result: File;
  ok: boolean;
}

export const fetchUserPhotoUrlThunk =
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  createAsyncThunk<string, fetchUserPhotosThunkProps, ThunkConfig<string>>(
    "profile/fetchUserPhotoUrl",
    async (data, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;
      try {
        const response = await axios.get<fetchUserPhotoUrlRequestProps>(
          `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile`,
          { params: { file_id: data.file_id } }
        );

        return (
          `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${response.data.result.file_path}` ||
          ""
        );
      } catch (e) {
        console.log(e);
        return rejectWithValue("error");
      }
    }
  );
