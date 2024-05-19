import React, { useEffect, useState } from 'react';
import cls from './Question.module.scss';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { motion } from 'framer-motion';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface QuestionProps {
  className?: string;
  exitAnimation: boolean;
  text: string;
  content: string;
}

const Question = ({
  className,
  exitAnimation,
  text,
  content,
}: QuestionProps) => {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(true);
  const duration = 0.3;

  const animationQuestionVariants = {
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
    [cls.ButtonOpened]: opened,
  };

  const contentMods: Mods = {
    [cls.contentClosing]: closing,
  };

  return (
    <AnimationBoxScroll
      visiblePart={20}
      variants={animationQuestionVariants}
      exitAnimation={exitAnimation}
    >
      <button onClick={toggleOpen} className={classNames(cls.Question, {}, [])}>
        <div className={classNames(cls.Button, { ...btnMods }, [])}>
          <p className={cls.Button__title}>{text}</p>
          <div className={cls.Button__square} />
        </div>
        <motion.div
          variants={animationContentVariants}
          initial={'hidden'}
          animate={opened ? 'visible' : 'hidden'}
        >
          <div className={classNames(cls.Content, { ...contentMods }, [])}>
            <p className={cls.Content__text}>{content}</p>
          </div>
        </motion.div>
      </button>
    </AnimationBoxScroll>
  );
};

export default Question;
