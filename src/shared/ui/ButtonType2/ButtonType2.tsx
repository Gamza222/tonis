import React, { ReactNode } from 'react';
import cls from './ButtonType2.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface ButtonType2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  Pic?: React.VFC<React.SVGProps<SVGSVGElement>>;
  picClassName?: string;
  text?: string;
  children?: ReactNode;
}

const ButtonType2 = (props: ButtonType2Props) => {
  const { className, children, Pic, picClassName, text } = props;

  return (
    <button {...props} className={classNames(cls.ButtonType2, {}, [])}>
      <div className={cls.ButtonType2__content}>
        {children ? (
          children
        ) : (
          <>
            {Pic && (
              <Pic
                className={classNames(cls.ButtonType2__content__pic, {}, [
                  picClassName,
                ])}
              />
            )}
            <p className={cls.ButtonType2__content__text}>{text}</p>
          </>
        )}
      </div>
    </button>
  );
};

export default ButtonType2;
