import React, { useCallback, useState } from 'react';

import cls from './Section2Content.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';
import { motion } from 'framer-motion';
import Section2Title from './Section2Title/Section2Title';
import Section2Text from './Section2Text/Section2Text';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';
import Section2Options from './Section2Options/Section2Options';
import { Link } from 'react-router-dom';

interface Section2ContentProps {
  className?: string;
  exitAnimation: boolean;
}

const Section2Content = ({
  className,
  exitAnimation,
}: Section2ContentProps) => {
  const duration = 0.5;

  const animationTextVariants = {
    hidden: { x: '-10%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
  return (
    <div className={classNames(cls.Section2Content, {}, [])}>
      <Section2Title exitAnimation={exitAnimation} />
      <Section2Text exitAnimation={exitAnimation} />
      <Section2Options exitAnimation={exitAnimation} />
      <AnimationBoxScroll
        visiblePart={10}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
      >
        <Link to='https://t.me/web3up_official' target='_blank'>
          <ButtonType1 text='Записаться на курс' className={cls.ButtonType1} />
        </Link>
      </AnimationBoxScroll>
    </div>
  );
};

export default Section2Content;
