import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Section7Title.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

interface Section7TitleProps {
  className?: string;
  exitAnimation: boolean;
}

const Section7Title = ({ className, exitAnimation }: Section7TitleProps) => {
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
    <h3 className={classNames(cls.Section7Title, {}, [])}>
      <AnimationBoxScroll
        visiblePart={0}
        variants={animationTitleVariants}
        exitAnimation={exitAnimation}
      >
        <span className={cls.Section6Title}>Тарифы</span>
      </AnimationBoxScroll>
    </h3>
  );
};

export default Section7Title;
