import React, { memo } from 'react';

import cls from './Section1Title.module.scss';

import { motion, Variants } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getPageLoaderData } from 'features/PageLoader';
import { classNames } from 'shared/lib/classNames/classNames';

interface TitleSection2Props {
  className?: string;
}

const Section1Title = memo(({ className }: TitleSection2Props) => {
  const isLoaded = useSelector(getPageLoaderData).isLoading;
  const duration = 0.8;
  const TextAnimationVariants: Variants = {
    start: { y: '150%' },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],
        duration: duration,
      },
    },
  };
  return (
    <motion.div className={cls.TitleWrapper}>
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          initial={'start'}
          animate={isLoaded ? 'start' : 'end'}
          variants={TextAnimationVariants}
        >
          <h2 className={cls.Title}>Успешные</h2>
        </motion.div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          initial={'start'}
          animate={isLoaded ? 'start' : 'end'}
          variants={TextAnimationVariants}
        >
          <h2 className={classNames(cls.Title, {}, [cls.TitleGradient])}>
            крипто операции
          </h2>
        </motion.div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          initial={'start'}
          animate={isLoaded ? 'start' : 'end'}
          variants={TextAnimationVariants}
        >
          <h2 className={cls.Title}>начинаются</h2>
        </motion.div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          initial={'start'}
          animate={isLoaded ? 'start' : 'end'}
          variants={TextAnimationVariants}
        >
          <h2 className={cls.Title}>с автоматизации</h2>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default Section1Title;
