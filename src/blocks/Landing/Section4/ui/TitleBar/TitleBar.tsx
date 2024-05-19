import React from 'react';
import cls from './TitleBar.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import EyePic from 'shared/assets/icons/main/Eye.svg';

import { classNames } from 'shared/lib/classNames/classNames';

interface TitleBarProps {
  className?: string;
  exitAnimation: boolean;
}

const TitleBar = ({ className, exitAnimation }: TitleBarProps) => {
  const duration = 0.6;

  const animationTitleVariants = {
    hidden: { opacity: 0 },
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
    <AnimationBoxScroll
      className={classNames(cls.TitleBar, {}, [])}
      visiblePart={0}
      variants={animationTitleVariants}
      exitAnimation={exitAnimation}
    >
      <div className={cls.TitleBar__left}>
        <EyePic className={cls.EyePic} />
        <p className={cls.Text}>№</p>
        <p className={cls.Text}>Тема</p>
      </div>
      <div className={cls.TitleBar__right}>
        <p className={cls.Text}>Вид урока</p>
      </div>
    </AnimationBoxScroll>
  );
};

export default TitleBar;
