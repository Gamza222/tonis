import { StateSchema } from 'app/providers/StoreProvider';

export const getVerifyUserData = (state: StateSchema) =>
  state?.VerifyUser?.data;
