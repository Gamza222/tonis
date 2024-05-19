import React, { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavbarLinks.module.scss';
import NavbarLink from '../../NavbarLink/NavbarLink';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';
import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import { HashLink } from 'react-router-hash-link';

interface NavbarLinksProps {
  className?: string;
  closeNavbar?: () => void;
}

const NavbarLinks = ({ className, closeNavbar }: NavbarLinksProps) => {
  const { width, height } = useWindowDimensions();

  const dimensionsProps = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );
  return (
    <nav className={classNames(cls.NavbarLinks, {}, [className])}>
      {width > 1350 ? (
        <>
          {' '}
          <HashLink to='/#what_is_zenoposter'>Что такое ZennoPoster</HashLink>
          <HashLink to='/#program'>Программа курса</HashLink>
          <HashLink to='/#results'>Результат</HashLink>
          <HashLink to='/#tariffs'>Тарифы</HashLink>
          <HashLink to='/#questions'>Вопросы</HashLink>
        </>
      ) : (
        <>
          <HashLink
            className={cls.MobileLink}
            onClick={closeNavbar}
            to='/#what_is_zenoposter'
          >
            <ButtonType1 navbar className={cls.NavbarLinkButton}>
              Что такое ZennoPoster
            </ButtonType1>
          </HashLink>
          <HashLink
            onClick={closeNavbar}
            to='/#program'
            className={cls.MobileLink}
          >
            <ButtonType1 navbar className={cls.NavbarLinkButton}>
              Программа курса
            </ButtonType1>
          </HashLink>
          <HashLink
            onClick={closeNavbar}
            className={cls.MobileLink}
            to='/#results'
          >
            <ButtonType1 navbar className={cls.NavbarLinkButton}>
              Результат
            </ButtonType1>
          </HashLink>
          <HashLink
            className={cls.MobileLink}
            onClick={closeNavbar}
            to='/#tariffs'
          >
            <ButtonType1 navbar className={cls.NavbarLinkButton}>
              Тарифы
            </ButtonType1>
          </HashLink>
          <HashLink
            onClick={closeNavbar}
            to='/#questions'
            className={cls.MobileLink}
          >
            <ButtonType1 className={cls.NavbarLinkButton} navbar>
              Вопросы
            </ButtonType1>
          </HashLink>
        </>
      )}
    </nav>
  );
};

export default NavbarLinks;
