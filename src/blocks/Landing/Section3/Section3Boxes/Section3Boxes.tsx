import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Section3Boxes.module.scss';

interface Section3BoxesProps {
  className?: string;
}

const Section3Boxes = ({ className }: Section3BoxesProps) => {
  return <div className={classNames(cls.Section3Boxes, {}, [])}></div>;
};

export default Section3Boxes;
