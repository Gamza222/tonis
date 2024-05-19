import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SliderLoader.module.scss';

interface SliderLoaderProps {
  className?: string;
  slide: number;
  numOfSlides: number;
}

const SliderLoader = ({ className, slide, numOfSlides }: SliderLoaderProps) => {
  const barWidth = (slide / numOfSlides) * 100;
  return (
    <div className={classNames(cls.SliderLoader, {}, [])}>
      <div
        className={cls.SliderLoader__bar}
        style={{ width: `${barWidth}%` }}
      />
    </div>
  );
};

export default SliderLoader;
