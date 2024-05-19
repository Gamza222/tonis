import { StateSchema } from 'app/providers/StoreProvider';

export const getVerifyUserError = (state: StateSchema) =>
  state?.VerifyUser?.error;
