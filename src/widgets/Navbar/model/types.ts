import { getUserData } from "entities/User";
import { useSelector } from "react-redux";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

import { IconType } from "react-icons/lib";

import { RiSwapBoxFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";

export interface NavbarItemProps {
  title: string;
  path: string;
  icon: string | IconType;
}

// export const NavbarItems = (): NavbarItemProps[] => {
//   const userData = useSelector(getUserData);

//   return [
//     {
//       title: "Trade",
//       path: routeConfig.profile.path || "",
//       icon: RiSwapBoxFill,
//     },
//     {
//       title: "Referals",
//       path: routeConfig.profile.path || "",
//       icon: FaPeopleGroup,
//     },
//   ];
// };

export interface NavbarState {
  closed: boolean;
  closedPage?: boolean;
}
