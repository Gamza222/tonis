import React, { memo } from 'react';
import cls from './Buttons.module.scss';

import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';
import ButtonType2 from 'shared/ui/ButtonType2/ButtonType2';

import { FaCirclePlay } from 'react-icons/fa6';
import { classNames } from 'shared/lib/classNames/classNames';
import { motion, Variants } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getPageLoaderData } from 'features/PageLoader';
import { Link } from 'react-router-dom';

interface ButtonsProps {
  className?: string;
}

const Buttons = memo(({ className }: ButtonsProps) => {
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
      className={classNames(cls.Buttons, {}, [])}
      animate={isLoaded ? 'start' : 'end'}
      variants={TextAnimationVariants}
    >
      <Link
        to='https://t.me/web3up_official'
        target='_blank'
        className={cls.Link}
      >
        <ButtonType2 text='Записаться на курс' className={cls.ButtonType2} />
      </Link>
      <Link
        className={cls.Link}
        to='https://www.youtube.com/watch?v=Ccua8OCxox4'
        target='_blank'
      >
        <ButtonType1
          Pic={FaCirclePlay}
          text='Узнать подробнее'
          className={cls.ButtonType1}
          video={true}
        />
      </Link>
    </motion.div>
  );
});

export default Buttons;
