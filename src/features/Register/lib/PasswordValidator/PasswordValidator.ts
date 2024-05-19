export const PasswordValidator = (value: string) => {
  const formatSpecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const formatAlphabet = /[a-zA-Z]/g;

  const length = value.length >= 8;
  const upperCase = value !== value.toLowerCase() ? true : false;
  const special = formatSpecial.test(value);
  const alphabet = formatAlphabet.test(value);

  return {
    length: length,
    alphabet: alphabet,
    upperCase: upperCase,
    special: special,
  };
};
