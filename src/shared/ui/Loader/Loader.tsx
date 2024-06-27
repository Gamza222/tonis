import React from "react";
import cls from "./Loader.module.scss";

import Logo from "shared/assets/icons/Loader.svg";

import { classNames } from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <Logo />
    </div>
  );
};

export default Loader;
