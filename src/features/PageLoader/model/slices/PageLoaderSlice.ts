import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PageLoaderSchema } from '../types/PageLoaderSchema';

const initialState: PageLoaderSchema = {
  isLoading: false,
};

export const PageLoaderSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { actions: PageLoaderActions } = PageLoaderSlice;
export const { reducer: PageLoaderReducer } = PageLoaderSlice;
