import React, { ReactNode } from "react";

import cls from "./ButtonType1.module.scss";

import { classNames, Mods } from "shared/lib/classNames/classNames";
import SkeletonWrapper from "../Skeleton/Skeleton";
import Loader from "../Loader/Loader";

interface ButtonType1Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  Pic?: React.VFC<React.SVGProps<SVGSVGElement>>;
  picClassName?: string;
  text?: string;
  children?: ReactNode;
  isLoading?: boolean;
}

const ButtonType1 = (props: ButtonType1Props) => {
  const {
    className,
    children,
    Pic,
    picClassName,
    text,
    isLoading = false,
    ...rest
  } = props;
  const ItemsMods: Mods = {
    [cls.ItemsHide]: isLoading,
  };
  return (
    <button
      className={classNames(cls.ButtonType1, {}, [className])}
      disabled={isLoading}
      {...rest}
    >
      <div className={cls.ButtonType1__content}>
        <div className={classNames(cls.Items, { ...ItemsMods }, [])}>
          {children ? (
            children
          ) : (
            <>
              {Pic && (
                <Pic
                  className={classNames(cls.ButtonType1__content__pic, {}, [
                    picClassName,
                  ])}
                />
              )}
              <p className={cls.ButtonType1__content__text}>{text}</p>
            </>
          )}
        </div>
        {isLoading && <Loader className={cls.Loader} />}
      </div>
    </button>
  );
};

export default ButtonType1;
