import React from 'react';
import cls from './Section3Title.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section3TitleProps {
  className?: string;
  exitAnimation: boolean;
}

const Section3Title = ({ className, exitAnimation }: Section3TitleProps) => {
  const duration = 0.6;

  const animationTitleVariants = {
    hidden: { y: '150%', opacity: 0 },
    visible: {
      y: 0,

      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],

        duration: duration,
      },
    },
  };
  return (
    <h2 className={classNames(cls.Section3Title, {}, [])}>
      <div className={cls.Part}>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span>Что </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span>такое </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span className={cls.Section3Title__gradient}>Zennoposter.</span>
          </AnimationBoxScroll>
        </div>
      </div>
    </h2>
  );
};

export default Section3Title;
