import React, { PropsWithChildren } from "react";
import cls from "./CheckText.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { RxCross2 } from "react-icons/rx";
import { PiCheckBold } from "react-icons/pi";
import { RxCheck } from "react-icons/rx";

interface CheckTextProps extends PropsWithChildren {
  className?: string;
  checked: boolean;
  disabled?: boolean;
  text?: string;
  handleChange?: () => void;
}

const CheckText = (props: CheckTextProps) => {
  const { className, checked, disabled, text, handleChange } = props;

  const mods: Mods = {
    [cls.checked]: checked,
    [cls.unchecked]: !checked,
  };
  return (
    <div className={classNames(cls.CheckText, { ...mods }, [className])}>
      <p className={cls.CheckText__text}>{text}</p>
      <div className={classNames(cls.CheckBox, { ...mods }, [])}>
        {checked ? <RxCheck /> : <RxCross2 />}
      </div>
    </div>
  );
};

export default CheckText;
