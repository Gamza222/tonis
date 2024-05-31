import { type StateSchema } from "app/providers/StoreProvider";

export const getInitData = (state: StateSchema) => state?.InitData;
