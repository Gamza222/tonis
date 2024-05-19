import React from 'react';

import cls from './Section2Options.module.scss';
import CheckSignPic from 'shared/assets/icons/main/CheckSign.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { motion } from 'framer-motion';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

interface Section2OptionsProps {
  className?: string;
  exitAnimation: boolean;
}

const Section2Options = ({
  className,
  exitAnimation,
}: Section2OptionsProps) => {
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
    <div className={classNames(cls.Section2Options, {}, [])}>
      <AnimationBoxScroll
        visiblePart={10}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
        className={classNames(cls.Section2Options, {}, [])}
      >
        <div className={cls.Section2Options__item}>
          <CheckSignPic className={cls.Section2Options__item__pic} />
          <p className={cls.Section2Options__item__text}>
            Полная автоматизация действий в браузере
          </p>
        </div>
      </AnimationBoxScroll>
      <AnimationBoxScroll
        visiblePart={10}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
        className={classNames(cls.Section2Options, {}, [])}
      >
        <div className={cls.Section2Options__item}>
          <CheckSignPic className={cls.Section2Options__item__pic} />
          <p className={cls.Section2Options__item__text}>
            Создание скриптов без знания языков программирования
          </p>
        </div>
      </AnimationBoxScroll>
      <AnimationBoxScroll
        visiblePart={10}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
        className={classNames(cls.Section2Options, {}, [])}
      >
        <div className={cls.Section2Options__item}>
          <CheckSignPic className={cls.Section2Options__item__pic} />
          <p className={cls.Section2Options__item__text}>
            Быстрый и легкий запуск сохраненных профилей
          </p>
        </div>
      </AnimationBoxScroll>
      <AnimationBoxScroll
        visiblePart={10}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
        className={classNames(cls.Section2Options, {}, [])}
      >
        <div className={cls.Section2Options__item}>
          <CheckSignPic className={cls.Section2Options__item__pic} />
          <p className={cls.Section2Options__item__text}>
            Запуск заданий по расписанию
          </p>
        </div>
      </AnimationBoxScroll>
    </div>
  );
};

export default Section2Options;
