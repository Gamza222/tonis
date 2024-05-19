import React, { memo } from 'react';

import cls from './Timings.module.scss';

import TimePic from '../../../../../shared/assets/icons/main/Time.svg';
import ZapPic from '../../../../../shared/assets/icons/main/Zap.svg';
import PicBox from 'shared/ui/PicBox/PicBox';

import { motion, Variants } from 'framer-motion';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getPageLoaderData } from 'features/PageLoader';

interface TimingsProps {
  className?: string;
}

const Timings = memo(({ className }: TimingsProps) => {
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
      className={classNames(cls.Timings, {}, [])}
      animate={isLoaded ? 'start' : 'end'}
      variants={TextAnimationVariants}
    >
      <div className={cls.Timings__item}>
        <PicBox Pic={TimePic} />
        <p className={cls.Timings__item__text}>
          Старт - <span>20 апреля</span>
        </p>
      </div>
      <div className={cls.Timings__item}>
        <PicBox Pic={ZapPic} />
        <p className={cls.Timings__item__text}>
          Продолжительность - <span>4 недели</span>
        </p>
      </div>
    </motion.div>
  );
});

export default Timings;
