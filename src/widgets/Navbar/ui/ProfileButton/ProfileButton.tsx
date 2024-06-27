import React, { useEffect } from "react";
import cls from "./ProfileButton.module.scss";

import ProfileIcon from "shared/ui/ProfileIcon/ProfileIcon";

import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

interface ProfileButtonProps {
  className?: string;
}

const ProfileButton = (props: ProfileButtonProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const url = useLocation().pathname;

  const selected = url == routeConfig.profile.path;

  const mods: Mods = {
    [cls.active]: selected,
    [cls.inactive]: !selected,
  };
  return (
    <Link
      className={classNames(cls.ProfileButton, {}, [className])}
      to={routeConfig.profile.path || ""}
    >
      <div className={cls.ProfileButton__icon}>
        <ProfileIcon className={classNames(cls.Icon, { ...mods }, [])} />
      </div>
      <p className={classNames(cls.ProfileButton__text, { ...mods }, [])}>
        {t("Profile")}
      </p>
    </Link>
  );
};

export default ProfileButton;
