import React from 'react';

import cls from './Hamburger.module.scss';

import HamburgerPic from '../../assets/icons/main/Hamburger.svg';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface HamburgerProps {
  className?: string;
  opened: boolean;
  toggleHamburger: () => void;
}

const Hamburger = ({ className, opened, toggleHamburger }: HamburgerProps) => {
  const mods: Mods = {
    [cls.HamburgerActive]: opened,
  };
  return (
    <button
      onClick={toggleHamburger}
      className={classNames(cls.Hamburger, {}, [className])}
    >
      <HamburgerPic className={classNames(cls.HamburgerPic, { ...mods }, [])} />
    </button>
  );
};

export default Hamburger;
