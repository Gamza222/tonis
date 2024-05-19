import validator from 'validator';
import { PasswordValidator } from '../PasswordValidator/PasswordValidator';

export const RegFormValidator = (
  name: string,
  password: string,
  email: string,
) => {
  let mailValid = false;
  let passwordValid = false;
  let nameValid = false;

  if (name.length > 3) {
    nameValid = true;
  } else {
    nameValid = false;
  }

  const pwdCheck = PasswordValidator(password);
  if (
    pwdCheck.length &&
    pwdCheck.alphabet &&
    pwdCheck.special &&
    pwdCheck.upperCase
  ) {
    passwordValid = true;
  } else {
    passwordValid = false;
  }

  if (validator.isEmail(email)) {
    mailValid = true;
  } else {
    mailValid = false;
  }

  return {
    mailValid: mailValid,
    passwordValid: passwordValid,
    nameValid: nameValid,
  };
};
