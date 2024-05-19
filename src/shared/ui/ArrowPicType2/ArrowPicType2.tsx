import React from 'react';
import cls from './ArrowPicType2.module.scss';

import ArrowPic from 'shared/assets/icons/main/ArrowType2.svg';

import { classNames } from 'shared/lib/classNames/classNames';

interface ArrowPicType2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ArrowPicType2 = (props: ArrowPicType2Props) => {
  const { className } = props;
  return (
    <button
      {...props}
      className={classNames(cls.ArrowPicType2, {}, [className])}
    >
      <ArrowPic className={cls.ArrowPicType2__pic} />
    </button>
  );
};

export default ArrowPicType2;
