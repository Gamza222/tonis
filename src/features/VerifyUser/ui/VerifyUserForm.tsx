import React, { useCallback, useState } from 'react';

import cls from './VerifyUserForm.module.scss';

import InputType1 from 'shared/ui/InputType1/InputType1';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getVerifyUserData } from '../model/selectors/getVerifyUserData/getRegisterData';
import { getVerifyUserError } from '../model/selectors/getVerifyUserError/getRegisterError';
import { getVerifyUserLoading } from '../model/selectors/getVerifyUserLoading/getRegisterLoading';
import { getRegisterUserId } from 'features/Register';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VerifyUserActions } from '../model/slices/VerifyUserSlice';
import { VerifyUserSendCodeThunk } from '../model/services/VerifyUserSendCodeThunk';

interface VerifyUserProps {
  className?: string;
}

const VerifyUserForm = ({ className }: VerifyUserProps) => {
  const dispatch = useAppDispatch();

  const [verifyCodeError, setVerifyCodeError] = useState<string>('');

  const verifyUserData = useSelector(getVerifyUserData);
  const verifyUserError = useSelector(getVerifyUserError);
  const verifyUserLoading = useSelector(getVerifyUserLoading);

  const userId = useSelector(getRegisterUserId);

  const setVerifyCode = useCallback(
    (value: string) => {
      dispatch(VerifyUserActions.setVerifyCode(value));
    },
    [dispatch],
  );

  const submitVerifyUserForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (verifyUserData.verifyCode.length == 6) {
      setVerifyCodeError('');
      dispatch(
        VerifyUserSendCodeThunk({
          code: verifyUserData.verifyCode,
          userId: userId,
        }),
      );
    } else {
      setVerifyCodeError('Код должен состоять из 6 цифр!');
    }
  };

  return (
    <form
      className={classNames(cls.VerifyUser, {}, [])}
      onSubmit={e => submitVerifyUserForm(e)}
    >
      <p>{verifyCodeError}</p>
      <InputType1
        type={'text'}
        value={verifyUserData.verifyCode}
        onChange={e => setVerifyCode(e.target.value)}
      />
      <ButtonType1 type='submit' text='Отправить' />
    </form>
  );
};

export default VerifyUserForm;
