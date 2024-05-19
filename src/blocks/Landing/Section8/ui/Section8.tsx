import React, { useCallback, useState } from 'react';

import cls from './Section8.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';
import Section8Title from './Section8Title/Section8Title';
import Section8Questions from './Section8Questions/Section8Questions';

interface Section8Props {
  className?: string;
}

const Section8 = ({ className }: Section8Props) => {
  const duration = 0.6;

  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);
  return (
    <AnimationBoxScroll
      id={'questions'}
      className={classNames(cls.Section8, {}, [])}
      visiblePart={220}
      exitAnimation={exitAnimation || false}
      setExit={setterExitAnimation}
    >
      <div className={cls.Section8__content}>
        <Section8Title exitAnimation={exitAnimation} />
        <Section8Questions exitAnimation={exitAnimation} />
      </div>
    </AnimationBoxScroll>
  );
};

export default Section8;
