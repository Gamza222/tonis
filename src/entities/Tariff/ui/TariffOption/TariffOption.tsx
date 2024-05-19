import React from 'react';
import cls from './TariffOption.module.scss';
import CheckPic from 'shared/assets/icons/main/CheckSign.svg';

import { classNames } from 'shared/lib/classNames/classNames';

interface TariffOptionProps {
  className?: string;
  options: Number[];
  number: number;
  text: string;
}

const TariffOption = ({
  className,
  options,
  number,
  text,
}: TariffOptionProps) => {
  return (
    <div
      className={classNames(
        cls.Option,
        { [cls.optionSelected]: options.includes(number) },
        [],
      )}
    >
      <div className={cls.Option__pic}>
        {/* <CheckPic className={cls.Option__pic__img} /> */}
      </div>
      <p className={cls.Option__text}>{text}</p>
    </div>
  );
};

export default TariffOption;
