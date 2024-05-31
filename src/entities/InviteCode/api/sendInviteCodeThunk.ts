import "dotenv";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";

import axios from "axios";

export interface sendInviteCodeThunkProps {
  code: string | undefined;
}

export interface sendInviteCodeRequestProps {
  result: number;
  ok: boolean;
}

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const sendInviteCodeThunk =
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  createAsyncThunk<string, sendInviteCodeThunkProps, ThunkConfig<string>>(
    "inviteCode/send",
    async (data, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;
      try {
        //   const response = await axios.get<fetchUserPhotosRequestProps>(
        //     `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getUserProfilePhotos`,
        //     { params: { user_id: data.user_id } }
        //   );
        await wait(100);
        if (!data.code) {
          throw new Error("Fullfill input");
        }
        if (data.code !== "22222") {
          throw new Error("Code is not valid");
        }
        return data.code;
      } catch (e: any) {
        return rejectWithValue(e.message);
      }
    }
  );
