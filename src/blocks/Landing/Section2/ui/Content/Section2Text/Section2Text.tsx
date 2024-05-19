import React from 'react';

import cls from './Section2Text.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { motion } from 'framer-motion';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

interface Section2TextProps {
  className?: string;
  exitAnimation: boolean;
}

const Section2Text = ({ className, exitAnimation }: Section2TextProps) => {
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
      <p className={classNames(cls.Section2Text, {}, [])}>
        ZennoPoster - это мощный инструмент, который помогает автоматизировать
        управление криптовалютными кошельками, включая кошельки MetaMask, Argent
        и другие. Мы используем ZennoPoster для участия в различных активностях,
        проведения транзакций, мониторинга балансов и многого другого.
      </p>
    </AnimationBoxScroll>
  );
};

export default Section2Text;
