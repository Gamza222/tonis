import React, { useCallback, useState } from 'react';

import cls from './Section2.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';
import Section2Content from './Content/Section2Content';
import Section2Pics from './Section2Pics/Section2Pics';

interface Section2Props {
  className?: string;
}

const Section2 = ({ className }: Section2Props) => {
  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);

  const animationSection2Variants = {
    hidden: { y: 0, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { staggerChildren: 0 } },
  };
  return (
    <AnimationBoxScroll
      id='program'
      className={classNames(cls.Section2, {}, [])}
      visiblePart={170}
      // variants={animationSection2Variants}
      exitAnimation={exitAnimation || false}
      setExit={setterExitAnimation}
    >
      <div className={cls.Section2__content}>
        <Section2Content exitAnimation={exitAnimation} />
        <Section2Pics exitAnimation={exitAnimation} />
      </div>
    </AnimationBoxScroll>
  );
};

export default Section2;
