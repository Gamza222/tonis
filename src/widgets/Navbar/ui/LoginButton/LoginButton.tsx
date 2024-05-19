import React, { useCallback } from 'react';

import cls from './LoginButton.module.scss';

import PersonPic from 'shared/assets/icons/main/Person.svg';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import { classNames } from 'shared/lib/classNames/classNames';
import { Bounce, toast, ToastContainer } from 'react-toastify';

interface LoginButtonProps {
  className?: string;
  closeNavbar?: () => void;
}

const LoginButton = ({ className, closeNavbar }: LoginButtonProps) => {
  const onClick = useCallback(() => {
    closeNavbar && closeNavbar();
    toast.error('Функция пока не доступна!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  }, [closeNavbar]);

  return (
    <ButtonType1
      onClick={onClick}
      className={cls.ButtonType1}
      text='Войти по ID пользователя'
      Pic={PersonPic}
      picClassName={cls.LoginPic}
      navbar
    />
  );
};

export default LoginButton;
