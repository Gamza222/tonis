import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginVerifyCodeError = (state: StateSchema) =>
  state?.LoginVerifyCode?.error;
