import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InfoBoxType1.module.scss';

interface InfoBoxType1Props {
  className?: string;
}

const InfoBoxType1 = ({ className }: InfoBoxType1Props) => {
  return <div className={classNames(cls.InfoBoxType1, {}, [])}></div>;
};

export default InfoBoxType1;
