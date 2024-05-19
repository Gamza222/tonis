import React from 'react';

import cls from './Section2Pics.module.scss';
import DotsPic from 'shared/assets/icons/main/DotsBg.svg';
import zenoPic1 from 'shared/assets/icons/pngs/Zenno1.png';
import zenoPic2 from 'shared/assets/icons/pngs/Zenno2.png';

import { classNames } from 'shared/lib/classNames/classNames';
import { motion } from 'framer-motion';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

interface Section2PicsProps {
  className?: string;
  exitAnimation: boolean;
}

const Section2Pics = ({ className, exitAnimation }: Section2PicsProps) => {
  const duration = 0.8;

  const animationTextVariants = {
    hidden: {
      // height: 1,
      opacity: 0,
    },
    visible: {
      // height: '100%',
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
  const animationExit = {
    // height: 0,
    // opacity: 0,
    // transition: {
    //   height: {
    //     duration: 0.4,
    //   },
    //   opacity: {
    //     duration: 0.35,
    //   },
    // },
  };
  return (
    <div className={classNames(cls.Section2Pics, {}, [])}>
      <div className={cls.Section2Pics__pic1}>
        <DotsPic className={cls.Dots1} />
        <DotsPic className={cls.Dots2} />
        <AnimationBoxScroll
          visiblePart={0}
          variants={animationTextVariants}
          exitAnimation={exitAnimation}
          className={cls.Section2Pics__pic1__img}
          exit={animationExit}
        >
          <img src={zenoPic1} alt='' />
        </AnimationBoxScroll>
      </div>
      <div className={cls.Section2Pics__pic2}>
        <AnimationBoxScroll
          visiblePart={0}
          variants={animationTextVariants}
          exitAnimation={exitAnimation}
          className={cls.Section2Pics__pic1__img}
          exit={animationExit}
        >
          <img src={zenoPic2} alt='' />
        </AnimationBoxScroll>
      </div>
    </div>
  );
};

export default Section2Pics;
