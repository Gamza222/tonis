import React, { useCallback, useEffect, useState } from 'react';
import cls from './PageLoader.module.scss';

import LogoPic from 'shared/assets/icons/LogoAnimation.svg';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoaderActions } from '../model/slices/PageLoaderSlice';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  const dispatch = useAppDispatch();

  const [logoHide, setLogoHide] = useState<boolean>(false);
  const [gradientRotate, setGradientRotate] = useState<boolean>(false);

  const duration = 0.8;
  const hideLogoDelay = 2.2;

  const WrapperAnimationVariants: Variants = {
    start: { y: 0 },
    static: { y: 0 },
    end: {
      y: '-100%',
      opacity: 1,
      transition: {
        ease: [0.835, 0.085, 0.005, 1],
        duration: duration,
      },
    },
  };

  const LogoAnimationVariants: Variants = {
    start: { scale: 1, opacity: 0, y: '-50%', x: '-54.5%' },
    static: { scale: 1, opacity: 1, y: '-50%', x: '-54.5%' },
    end: {
      scale: 0,
      y: '-50%',
      x: '-50%',
      opacity: 0,
      transition: {
        duration: duration - 0.3,
      },
    },
  };

  const handleLoading = useCallback(() => {
    console.log('Loading...');
    setTimeout(() => {
      dispatch(PageLoaderActions.setLoading(false));
    }, (duration + hideLogoDelay - 0.3) * 1000);
  }, [dispatch]);

  useEffect(() => {
    dispatch(PageLoaderActions.setLoading(true));
    setTimeout(() => {
      setLogoHide(true);
    }, hideLogoDelay * 1000);
  }, []);

  return (
    <>
      <motion.div
        className={classNames(cls.PageLoader, {}, [])}
        initial={'start'}
        animate={logoHide ? 'end' : 'static'}
        variants={WrapperAnimationVariants}
        onAnimationComplete={variant =>
          variant == 'static' ? handleLoading() : ''
        }
        // style={{ display: 'none' }}
      >
        <motion.div
          className={cls.Logo}
          initial={'start'}
          animate={logoHide ? 'end' : 'static'}
          variants={LogoAnimationVariants}
        >
          <LogoPic className={classNames(cls.Logo__pic, {}, [])} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default PageLoader;
