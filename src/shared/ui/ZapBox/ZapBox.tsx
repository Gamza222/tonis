import React from 'react';
import cls from './ZapBox.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface ZapBoxProps {
  className?: string;
}

const ZapBox = ({ className }: ZapBoxProps) => {
  return <div className={classNames(cls.ZapBox, {}, [])}></div>;
};

export default ZapBox;
