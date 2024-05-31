import React from "react";
import cls from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <div className={classNames(cls.Loader__content, {}, [])}></div>
    </div>
  );
};

export default Loader;
