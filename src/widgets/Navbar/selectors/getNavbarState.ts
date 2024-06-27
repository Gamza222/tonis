import { StateSchema } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";

export const getNavbarState = (state: StateSchema) => state.Navbar;
