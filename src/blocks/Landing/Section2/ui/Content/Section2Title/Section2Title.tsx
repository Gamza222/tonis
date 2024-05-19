import React from 'react';
import cls from './Section2Title.module.scss';

import { motion } from 'framer-motion';
import { classNames } from 'shared/lib/classNames/classNames';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

interface Section2TitleProps {
  className?: string;
  exitAnimation: boolean;
}

const Section2Title = ({ className, exitAnimation }: Section2TitleProps) => {
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
    <h3 className={classNames(cls.Title, {}, [])}>
      <div className={cls.Part}>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span>Обучение </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span>проводится </span>
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
            <span>на базе ПО - </span>
          </AnimationBoxScroll>
        </div>
        <div className={cls.Titlewrapper}>
          <AnimationBoxScroll
            visiblePart={0}
            variants={animationTitleVariants}
            exitAnimation={exitAnimation}
          >
            <span className={cls.Title__gradient}>Zennoposter.</span>
          </AnimationBoxScroll>
        </div>
      </div>
    </h3>
  );
};

export default Section2Title;
