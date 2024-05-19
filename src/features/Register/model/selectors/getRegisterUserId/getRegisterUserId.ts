import { StateSchema } from 'app/providers/StoreProvider';

export const getRegisterUserId = (state: StateSchema) =>
  state?.Register?.userId;
