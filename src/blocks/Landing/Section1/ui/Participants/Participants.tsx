import React, { memo } from 'react';

import cls from './Participants.module.scss';

import { motion, Variants } from 'framer-motion';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getPageLoaderData } from 'features/PageLoader';

interface ParticipantsProps {
  className?: string;
}

const Participants = memo(({ className }: ParticipantsProps) => {
  const isLoaded = useSelector(getPageLoaderData).isLoading;
  const duration = 0.8;
  const delay = 0.6;
  const TextAnimationVariants: Variants = {
    start: { y: 50, opacity: 0 },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],
        duration: duration,
        delay,
      },
    },
  };
  return (
    <motion.div
      className={classNames(cls.Participants, {}, [])}
      animate={isLoaded ? 'start' : 'end'}
      variants={TextAnimationVariants}
    >
      <span className={cls.Participants__span}>63% мест </span>
      <p className={cls.Participants__text}>потока уже приобретены</p>
    </motion.div>
  );
});

export default Participants;
