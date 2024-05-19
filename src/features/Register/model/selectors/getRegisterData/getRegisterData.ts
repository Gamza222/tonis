import { StateSchema } from 'app/providers/StoreProvider';

export const getRegisterData = (state: StateSchema) => state?.Register?.data;
