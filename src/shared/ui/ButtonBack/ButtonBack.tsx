import React from "react";
import cls from "./ButtonBack.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";

import { IoChevronBackOutline } from "react-icons/io5";

interface ButtonBackProps {
  className?: string;
  backFunc: any;
}

const ButtonBack = ({ className, backFunc }: ButtonBackProps) => {
  const { t } = useTranslation();
  const onBack = () => {
    backFunc();
  };
  return (
    <button
      className={classNames(cls.ButtonBack, {}, [className])}
      onClick={onBack}
    >
      <IoChevronBackOutline />
      <p>{t("Back")}</p>
    </button>
  );
};

export default ButtonBack;
