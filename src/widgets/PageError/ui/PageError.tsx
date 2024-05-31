import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
  text?: any;
}

const PageError = memo(({ className, text }: PageErrorProps) => {
  const { t } = useTranslation();

  const ReloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [])}>
      <p>
        {t("Произошла непредвиденная ошибка")}: {text}
      </p>
      <button onClick={ReloadPage}>{t("Обновить страницу")}</button>
    </div>
  );
});

export default PageError;
