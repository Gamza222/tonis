import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

export interface fetchPairEntitiesThunkProps {}

export interface fetchPairEntitiesResultProps {
  data: string[];
}

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const fetchPairEntitiesThunk = createAsyncThunk<
  string[],
  void, //fetchPairEntitiesThunkProps
  ThunkConfig<string>
>("PairEntities/fetch", async (_data, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    //   const response = await axios.fetch<fetchUserPhotosRequestProps>(
    //     `https://api.telegram.org/bot${process.env.BOT_TOKEN}/fetchUserProfilePhotos`,
    //     { params: { user_id: data.user_id } }
    //   );
    await wait(1000);
    return ["BTC/USDT", "ETH/USDT", "sksksk/usdth", "sksksk,,,sw"];
  } catch (e: any) {
    return rejectWithValue(e.message);
  }
});
