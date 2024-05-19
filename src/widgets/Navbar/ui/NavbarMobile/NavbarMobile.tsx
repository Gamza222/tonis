import React, { useCallback, useState } from 'react';

import cls from './NavbarMobile.module.scss';

import LogoPic from 'shared/assets/icons/Logo.svg';
import NavbarMobileNav from './NavbarMobileNav/NavbarMobileNav';
import Hamburger from 'shared/ui/Hamburger/Hamburger';

import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { motion, Variants } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getPageLoaderData } from 'features/PageLoader';

interface NavbarMobileProps {
  className?: string;
}

const NavbarMobile = ({ className }: NavbarMobileProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);
  const [openedHam, setOpenedHam] = useState<boolean>(false);
  const duration = 0.2;

  const loadingLogo = useSelector(getPageLoaderData).isLoading;
  const durationAnimation = 0.8;

  const NavbarAnimationVarinats: Variants = {
    start: { rotateX: -90, opacity: 0 },
    end: {
      rotateX: 0,
      opacity: 1,
      transition: {
        ease: [0.835, 0.085, 0.055, 0.032],
        duration: durationAnimation,
      },
    },
  };

  const toggleMenu = useCallback(() => {
    if (!opened) {
      setOpened(true);
      setOpenedHam(true);
      setClosing(false);
    } else if (opened) {
      setClosing(true);
      setOpenedHam(false);
      setTimeout(() => {
        setOpened(false);
      }, duration * 1000);
    }
  }, [opened, setOpened, closing, setClosing]);

  return (
    <motion.div
      className={classNames(cls.NavbarMobile, {}, [])}
      variants={NavbarAnimationVarinats}
      initial={'start'}
      animate={loadingLogo ? 'start' : 'end'}
    >
      <div className={cls.NavbarMobile__top}>
        <Link to={RoutePath['main']} className={cls.Logo}>
          <LogoPic className={cls.Logo__pic} />
        </Link>
        <Hamburger opened={openedHam} toggleHamburger={toggleMenu} />
      </div>
      {opened && <NavbarMobileNav closing={closing} closeNavbar={toggleMenu} />}
    </motion.div>
  );
};

export default NavbarMobile;
