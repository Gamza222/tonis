import React from 'react';

import cls from './PicBox.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface TimeBoxProps {
  className?: string;
  Pic: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const PicBox = ({ className, Pic }: TimeBoxProps) => {
  return (
    <div className={classNames(cls.TimeBox, {}, [])}>
      <div className={cls.TimeBox__content}>
        <Pic className={cls.TimeBox__content__pic} />
      </div>
    </div>
  );
};

export default PicBox;
