import React, { useCallback, useState } from 'react';
import cls from './Section6.module.scss';

import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import Section6Title from './Section6Title/Section6Title';
import Section6Table from './Section6Table/Section6Table';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section6Props {
  className?: string;
}

const Section6 = ({ className }: Section6Props) => {
  const duration = 0.6;

  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);

  return (
    <AnimationBoxScroll
      className={classNames(cls.Section6, {}, [])}
      visiblePart={120}
      // variants={animationSection4Variants}
      exitAnimation={exitAnimation || false}
      setExit={setterExitAnimation}
    >
      <div className={cls.Section6__content}>
        <Section6Title exitAnimation={exitAnimation} />
        <Section6Table exitAnimation={exitAnimation} />
      </div>
    </AnimationBoxScroll>
  );
};

export default Section6;
