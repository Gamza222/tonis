import React from 'react';
import cls from './RegisterButton.module.scss';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import { classNames } from 'shared/lib/classNames/classNames';

interface RegisterButtonProps {
  className?: string;
}

const RegisterButton = ({ className }: RegisterButtonProps) => {
  return (
    <ButtonType1
      className={cls.ButtonType1}
      text='Регистрация'
      onClick={() => {}}
      navbar
    />
  );
};

export default RegisterButton;
