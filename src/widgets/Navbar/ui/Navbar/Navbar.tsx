import React, { useEffect, useState } from "react";

import cls from "./Navbar.module.scss";

import { Mods, classNames } from "shared/lib/classNames/classNames";
import TradeButton from "../TradeButton/TradeButton";
import ProfileButton from "../ProfileButton/ProfileButton";
import CampaignsButton from "../CampaignsButton/CampaignsButton";
import {
  TelegramPlatform,
  platform,
} from "shared/lib/telegram/functions/telegram-platform";

interface NavbarProps {
  className?: string;
  mobile?: boolean;
}

const Navbar = ({ className, mobile = false }: NavbarProps) => {
  const isNavbarIos = platform instanceof TelegramPlatform && platform.isIos();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  console.log("Navbar", isVisible);

  const navbarMods: Mods = {
    [cls.IosNavbar]: false,
  };

  return (
    <>
      {isVisible && (
        <div className={classNames(cls.Navbar, { ...navbarMods }, [className])}>
          <div className={cls.Navbar__content}>
            <TradeButton />
            <CampaignsButton />
            <ProfileButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
