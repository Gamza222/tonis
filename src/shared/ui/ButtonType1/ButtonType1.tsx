import React, { ReactNode } from 'react';

import cls from './ButtonType1.module.scss';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface ButtonType1Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  Pic?: React.VFC<React.SVGProps<SVGSVGElement>>;
  picClassName?: string;
  text?: string;
  children?: ReactNode;
  navbar?: boolean;
  video?: boolean;
}

const ButtonType1 = (props: ButtonType1Props) => {
  const { className, children, Pic, picClassName, text, navbar, video } = props;
  const mods: Mods = {
    [cls.onNavbar]: navbar,
  };
  return (
    <button
      {...props}
      className={classNames(cls.ButtonType1, { ...mods }, [className])}
    >
      <div className={cls.ButtonType1__content}>
        {children ? (
          children
        ) : (
          <>
            {Pic && !video && (
              <Pic
                className={classNames(cls.ButtonType1__content__pic, {}, [
                  picClassName,
                ])}
              />
            )}
            {Pic && video && (
              <div>
                <Pic
                  className={classNames(cls.ButtonType1__content__pic, {}, [
                    picClassName,
                  ])}
                />
              </div>
            )}
            <p className={cls.ButtonType1__content__text}>{text}</p>
          </>
        )}
      </div>
    </button>
  );
};

export default ButtonType1;
