import { StateSchema } from 'app/providers/StoreProvider';

export const getVerifyUserLoading = (state: StateSchema) =>
  state?.VerifyUser?.isLoading;
