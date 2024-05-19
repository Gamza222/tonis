import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginVerifyCodeLoading = (state: StateSchema) =>
  state?.LoginVerifyCode?.isLoading;
