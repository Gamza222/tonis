import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InputType1.module.scss';

interface InputType1Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  className?: string;
}

const InputType1 = (props: InputType1Props) => {
  const { className } = props;
  return (
    <input className={classNames(cls.InputType1, {}, [className])} {...props} />
  );
};

export default InputType1;
