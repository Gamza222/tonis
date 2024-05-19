import React from 'react';
import cls from './Section5Title.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section5TitleProps {
  className?: string;
  exitAnimation: boolean;
}

const Section5Title = ({ className, exitAnimation }: Section5TitleProps) => {
  const duration = 0.6;
  const animationTitleBigVariants = {
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
  const animationTitleSmVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],
        duration: duration,
      },
    },
  };
  return (
    <div className={classNames(cls.Section5Title, {}, [])}>
      <AnimationBoxScroll
        visiblePart={0}
        variants={animationTitleSmVariants}
        exitAnimation={exitAnimation}
      >
        <h4 className={cls.TitleGradient}>В результате у вас будет</h4>
      </AnimationBoxScroll>
      <div className={cls.Titlewrapper}>
        <AnimationBoxScroll
          visiblePart={0}
          variants={animationTitleBigVariants}
          exitAnimation={exitAnimation}
        >
          <h3 className={cls.Title}>Портфолио работ</h3>
        </AnimationBoxScroll>
      </div>
    </div>
  );
};

export default Section5Title;
