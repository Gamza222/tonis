import React from 'react';

import cls from './Section6Title.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section6TitleProps {
  className?: string;
  exitAnimation: boolean;
}

const Section6Title = ({ className, exitAnimation }: Section6TitleProps) => {
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
    <h3 className={classNames(cls.Section6Title, {}, [])}>
      <div className={cls.Part}>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span className={cls.Section6Title__gradient}>Преимущества </span>
          </AnimationBoxScroll>
        </div>
      </div>
      <div className={cls.Part}>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span>Обучения </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span>у </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span>нас </span>
          </AnimationBoxScroll>
        </div>
      </div>
    </h3>
  );
};

export default Section6Title;
