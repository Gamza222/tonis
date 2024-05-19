import React, { memo } from 'react';

import cls from './NavbarLink.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  className?: string;
  to: string;
  children: any;
  blank?: boolean;
  onClick?: () => void;
}

const NavbarLink = memo(
  ({ className, blank = false, to, children, onClick }: NavbarLinkProps) => {
    return (
      <Link
        to={to}
        className={classNames(cls.NavbarLink, {}, [className])}
        target={blank ? '_blank' : '_self'}
        onClick={onClick}
      >
        <span />
        {children}
      </Link>
    );
  },
);

export default NavbarLink;
