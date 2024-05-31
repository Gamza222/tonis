import { type StateSchema } from "app/providers/StoreProvider";

export const getUserData = (state: StateSchema) => state?.User;
