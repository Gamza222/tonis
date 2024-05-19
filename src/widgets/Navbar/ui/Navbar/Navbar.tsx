import React, { useState } from 'react';

import cls from './Navbar.module.scss';

import LogoPic from 'shared/assets/icons/Logo.svg';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import LoginButton from '../LoginButton/LoginButton';
import RegisterButton from '../RegisterButton/RegisterButton';

import { motion, Variants } from 'framer-motion';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPageLoaderData } from 'features/PageLoader';

interface NavbarProps {
  className?: string;
  mobile?: boolean;
}

const Navbar = ({ className, mobile = false }: NavbarProps) => {
  const loadingLogo = useSelector(getPageLoaderData).isLoading;
  const duration = 0.8;
  const delay = 2;

  const NavbarAnimationVarinats: Variants = {
    start: { rotateX: -90, opacity: 0 },
    end: {
      rotateX: 0,
      opacity: 1,
      transition: {
        ease: [0.835, 0.085, 0.055, 0.032],
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      className={classNames(cls.Navbar, {}, [className])}
      variants={NavbarAnimationVarinats}
      initial={'start'}
      animate={loadingLogo ? 'start' : 'end'}
    >
      <Link to='/' className={cls.Logo}>
        <LogoPic className={cls.Logo__pic} />
      </Link>
      <NavbarLinks className={cls.NavbarLinks} />
      <div className={cls.Buttons}>
        <LoginButton />
        {/* <RegisterButton /> */}
      </div>
    </motion.div>
  );
};

export default Navbar;
