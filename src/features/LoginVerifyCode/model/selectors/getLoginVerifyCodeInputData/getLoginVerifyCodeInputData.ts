import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginVerifyCodeInputData = (state: StateSchema) =>
  state?.LoginVerifyCode?.inputData;
