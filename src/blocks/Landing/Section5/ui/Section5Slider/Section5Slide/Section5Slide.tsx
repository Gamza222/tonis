import React, { useState } from 'react';
import cls from './Section5Slide.module.scss';

import CheckSign from 'shared/assets/icons/main/CheckSign.svg';

import { motion } from 'framer-motion';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

export interface Section5SlideTitle {
  text: string;
  gradient?: boolean;
}

interface Section5SlideProps {
  className?: string;
  show: boolean;
  title: Section5SlideTitle[];
  exitAnimation: boolean;
  subtitle: string;
  options: string[];
}

const Section5Slide = ({
  className,
  show,
  title,
  exitAnimation,
  options,
  subtitle,
}: Section5SlideProps) => {
  const [hide, setHide] = useState(true);
  const duration = 1;

  const animationButtonsVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: duration,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  return (
    <AnimationBoxScroll
      visiblePart={300}
      className={classNames(cls.Section5Slide, {}, [])}
      variants={animationButtonsVariants}
      exitAnimation={exitAnimation}
    >
      <motion.div
        className={classNames(cls.Section5Slide, {}, [])}
        variants={animationButtonsVariants}
        animate={show && !exitAnimation ? 'visible' : 'hidden'}
      >
        <h3 className={cls.Titlewrapper}>
          {title.map((item, key) => {
            return item.gradient ? (
              <span className={cls.TitleGradient} key={key}>
                {item.text}
              </span>
            ) : (
              item.text.split(' ').map((value, key) => {
                return (
                  <span className={cls.Title} key={key}>
                    {value + ' '}
                  </span>
                );
              })
            );
          })}
        </h3>
        <div className={cls.Section5Slide__subtitle}>
          <p className={cls.Text}>{subtitle}</p>
        </div>
        <div className={cls.Section5Slide__options}>
          {options.map((option, key) => {
            return (
              <div key={key} className={cls.Section5Slide__options__item}>
                <div className={cls.CheckBox}>
                  <CheckSign />
                </div>
                <p className={cls.Text2}>{option}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimationBoxScroll>
  );
};

export default Section5Slide;
