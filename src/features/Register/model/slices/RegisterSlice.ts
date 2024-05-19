import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RegisterSchema } from '../types/RegisterSchema';
import { RegisterByEmailThunk } from '../services/RegisterByEmailThunk';

const initialState: RegisterSchema = {
  isLoading: false,
  data: {
    name: '',
    email: '',
    password: '',
    code: '',
  },
  userId: '',
};

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.data.name = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.data.password = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.data.email = action.payload;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.data.code = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(RegisterByEmailThunk.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(RegisterByEmailThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.userId = action.payload.data.userId;
      })
      .addCase(RegisterByEmailThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: RegisterActions } = RegisterSlice;
export const { reducer: RegisterReducer } = RegisterSlice;
