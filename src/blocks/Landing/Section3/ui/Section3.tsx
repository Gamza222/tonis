import React, { useCallback, useState } from 'react';

import cls from './Section3.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import Section3Boxes from './Section3Boxes/Section3Boxes';
import Section3Content from './Section3Content/Section3Content';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section3Props {
  className?: string;
}

const Section3 = ({ className }: Section3Props) => {
  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);
  return (
    <AnimationBoxScroll
      className={classNames(cls.Section3, {}, [])}
      visiblePart={170}
      // variants={animationSection2Variants}
      exitAnimation={exitAnimation || false}
      setExit={setterExitAnimation}
    >
      <div className={cls.Section3__content}>
        <Section3Boxes exitAnimation={exitAnimation} />
        <Section3Content exitAnimation={exitAnimation} />
      </div>
    </AnimationBoxScroll>
  );
};

export default Section3;
