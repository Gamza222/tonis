import { getUserData } from "./model/selectors/getUserData";
import { userActions, userReducer } from "./model/slices/UserSlice";
import { type User, type UserScema } from "./model/types/User";

export { User, UserScema };
export { getUserData };
export { userActions, userReducer };
