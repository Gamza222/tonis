import React from 'react';

import cls from './Section8Title.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section8TitleProps {
  className?: string;
  exitAnimation: boolean;
}

const Section8Title = ({ className, exitAnimation }: Section8TitleProps) => {
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
    <h3 className={classNames(cls.Section8Title, {}, [])}>
      <div className={cls.Part}>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span className={cls.Section8Title}>Часто </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span className={cls.Section8Title}>задаваемые </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span className={cls.Section8Title__gradient}>вопросы</span>
          </AnimationBoxScroll>
        </div>
      </div>
    </h3>
  );
};

export default Section8Title;
