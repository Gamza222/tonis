import React, { useEffect, useState } from 'react';
import cls from './Lesson.module.scss';

import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import ArrowPic from 'shared/assets/icons/main/Arrow.svg';
import LessonContentBox from './LessonContentBox/LessonContentBox';

import { motion } from 'framer-motion';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export enum LessonColors {
  YELLOW = 'yellow',
  BLUE = 'blue',
  PINK = 'pink',
}

interface LessonProps {
  className?: string;
  exitAnimation: boolean;
  number: string;
  text: string;
  lesson: string;
  color: LessonColors;
  contentText: string;
  contentData: string[];
  first?: boolean;
}

const Lesson = ({
  className,
  exitAnimation,
  number,
  text,
  lesson,
  color,
  first = false,
  contentText,
  contentData,
}: LessonProps) => {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(true);
  const duration = 0.3;

  const animationTitleVariants = {
    hidden: { x: '-10%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],

        duration: duration,
      },
    },
  };

  const animationContentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  const toggleOpen = () => {
    if (!opened) {
      setOpened(true);
      setClosing(false);
    } else if (opened) {
      setOpened(false);
      setTimeout(() => {
        setClosing(true);
      }, duration * 1000);
    }
  };

  useEffect(() => {
    if (exitAnimation) {
      setOpened(false);
      setClosing(true);
    }
  }, [exitAnimation]);

  const btnMods: Mods = {
    [cls.First]: first,
    [cls.ButtonOpened]: opened,
  };

  const lessonMods: Mods = {
    [cls[color]]: color,
  };
  const contentMods: Mods = {
    [cls.contentClosing]: closing,
  };

  return (
    <AnimationBoxScroll
      className={classNames(cls.Lesson, {}, [className])}
      visiblePart={20}
      variants={animationTitleVariants}
      exitAnimation={exitAnimation}
    >
      <button
        onClick={toggleOpen}
        className={classNames(cls.Button, { ...btnMods }, [])}
      >
        <div className={cls.Button__left}>
          <div className={cls.Arrow}>
            <ArrowPic className={cls.Arrow__pic} />
          </div>
          <p className={cls.Text}>{number}</p>
          <p className={cls.Text}>{text}</p>
        </div>
        <div className={cls.Button__right}>
          <p className={classNames(cls.Text, { ...lessonMods }, [])}>
            {lesson}
          </p>
        </div>
      </button>
      <motion.div
        variants={animationContentVariants}
        initial={'hidden'}
        animate={opened ? 'visible' : 'hidden'}
        className={classNames(cls.ContentWrapper, { ...contentMods }, [])}
      >
        <div className={cls.Content}>
          <LessonContentBox items={contentData} />
          {/* <LessonContentBox text={contentText} /> */}
        </div>
      </motion.div>
    </AnimationBoxScroll>
  );
};

export default Lesson;
