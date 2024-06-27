import React from "react";
import cls from "./CampaignsButton.module.scss";

import { Mods, classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

import { Link, useLocation } from "react-router-dom";

import { MdEmojiEvents } from "react-icons/md";

interface CampaignsButtonProps {
  className?: string;
}

const CampaignsButton = (props: CampaignsButtonProps) => {
  const { t } = useTranslation();
  const { className } = props;

  const url = useLocation().pathname;

  const selected = url == routeConfig.campaigns.path;

  const mods: Mods = {
    [cls.active]: selected,
    [cls.inactive]: !selected,
  };
  return (
    <Link
      className={classNames(cls.CampaignsButton, {}, [className])}
      to={routeConfig.campaigns.path || ""}
    >
      <MdEmojiEvents
        className={classNames(cls.CampaignsButton__icon, { ...mods }, [])}
      />
      <p className={classNames(cls.CampaignsButton__text, { ...mods }, [])}>
        {t("Campaigns")}
      </p>
    </Link>
  );
};

export default CampaignsButton;
