import React from "react";
import cls from "./TradeButton.module.scss";

import { Mods, classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

import { Link, useLocation } from "react-router-dom";

import { RiSwapBoxFill } from "react-icons/ri";

interface TradeButtonProps {
  className?: string;
}

const TradeButton = (props: TradeButtonProps) => {
  const { t } = useTranslation();
  const { className } = props;

  const url = useLocation().pathname;

  const selected = url == routeConfig.trade.path;

  const mods: Mods = {
    [cls.active]: selected,
    [cls.inactive]: !selected,
  };
  return (
    <Link
      className={classNames(cls.TradeButton, {}, [className])}
      to={routeConfig.trade.path || ""}
    >
      <RiSwapBoxFill
        className={classNames(cls.TradeButton__icon, { ...mods }, [])}
      />
      <p className={classNames(cls.TradeButton__text, { ...mods }, [])}>
        {t("Trade")}
      </p>
    </Link>
  );
};

export default TradeButton;
