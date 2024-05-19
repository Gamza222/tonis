import React, { useCallback, useState } from 'react';
import cls from './Section5.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';
import Section5Title from './Section5Title/Section5Title';
import Section5Slider from './Section5Slider/Section5Slider';

interface Section5Props {
  className?: string;
}

const Section5 = ({ className }: Section5Props) => {
  const duration = 0.6;

  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);

  return (
    <AnimationBoxScroll
      id='results'
      className={classNames(cls.Section5, {}, [])}
      visiblePart={20}
      // variants={animationSection5Variants}
      exitAnimation={exitAnimation || false}
      setExit={setterExitAnimation}
    >
      <div className={cls.Section5__content}>
        <Section5Title exitAnimation={exitAnimation} />
        <Section5Slider exitAnimation={exitAnimation} />
      </div>
    </AnimationBoxScroll>
  );
};

export default Section5;
