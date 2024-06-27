import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PairEntityState } from "../types/PairEntity";
import { fetchPairEntitiesThunk } from "../api/fetchPairEntitiesThunk";

const initialState: PairEntityState = {
  data: undefined,
  pair: undefined,
  error: undefined,
  isLoading: false,
};

export const PairEntitySlice = createSlice({
  name: "PairEntities",
  initialState,
  reducers: {
    setPair: (state, action: PayloadAction<string>) => {
      state.pair = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPairEntitiesThunk.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchPairEntitiesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload;
    });
    builder.addCase(fetchPairEntitiesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.data = undefined;
    });
  },
});

export const { actions: PairEntityActions } = PairEntitySlice;
export const { reducer: PairEntityReducer } = PairEntitySlice;
