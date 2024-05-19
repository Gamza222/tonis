import React from 'react';

import cls from './Footer.module.scss';

import LogoPic from 'shared/assets/icons/Logo.svg';

import { classNames } from 'shared/lib/classNames/classNames';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={classNames(cls.Footer, {}, [])}>
      <div className={cls.Footer__content}>
        <div className={cls.Footer__content__top}>
          <LogoPic className={cls.Logo} />
        </div>
        <div className={cls.Footer__content__bottom}>
          <div className={cls.Footer__content__bottom__left}>
            <p className={cls.TextGray}>© 2024 Web3up.io. Все права защищены</p>
          </div>
          <div className={cls.Footer__content__bottom__right}>
            <a href='#' className={cls.TextGray}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
