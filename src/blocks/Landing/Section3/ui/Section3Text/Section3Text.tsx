import React from 'react';
import cls from './Section3Text.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section3TextProps {
  className?: string;
  exitAnimation: boolean;
}

const Section3Text = ({ className, exitAnimation }: Section3TextProps) => {
  const duration = 1;
  const delay = duration;

  const animationTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
  return (
    <AnimationBoxScroll
      visiblePart={20}
      variants={animationTextVariants}
      exitAnimation={exitAnimation}
    >
      <p className={classNames(cls.Section3Text, {}, [])}>
        Zennoposter – это программное обеспечение, которое позволит вам без
        знания языков программирования автоматизировать любые однотипные и
        монотонные действия в браузере, а также большинство других задач, на
        которые вы тратите много времени.
      </p>
    </AnimationBoxScroll>
  );
};

export default Section3Text;
