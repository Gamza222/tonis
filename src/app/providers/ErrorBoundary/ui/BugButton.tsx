import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

// компонент для тестирования
const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // <Button
    //     onClick={throwError}
    // >
    //     {t('error')}
    // </Button>
    <p>error</p>
  );
};

export default BugButton;
