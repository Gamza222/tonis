import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import cls from "./SingleInputForm.module.scss";

import { Mods, classNames } from "shared/lib/classNames/classNames";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";

interface SingleInputFormProps {
  className?: string;
  placeholder: string;
  value: string;
  active: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  error?: string;
  isLoading?: boolean;
  onClearInput: () => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const SingleInputForm = (props: SingleInputFormProps) => {
  const {
    className,
    placeholder,
    value,
    active,
    autoFocus,
    maxLength,
    error,
    isLoading = false,
    onClearInput,
    handleChange,
    onFocus,
    onBlur,
  } = props;
  const buttonsMods: Mods = {
    [cls.ButtonsActive]: !active,
    [cls.ButtonsError]: error,
  };

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.SingleInputForm, {}, [className])}>
      <div className={cls.SingleInputForm__input}>
        <TextField
          // id="outlined-basic"
          error={Boolean(error)}
          className={cls.SingleInputForm__input__textField}
          fullWidth={true}
          label={placeholder}
          variant="outlined"
          type="search"
          inputProps={{ maxLength: maxLength }}
          onChange={(event) => handleChange(event)}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          autoFocus={autoFocus}
        />
        {value && !isLoading && (
          <div className={cls.SingleInputForm__input__buttons}>
            <button
              className={classNames(
                cls.SingleInputForm__cancel,
                { ...buttonsMods },
                []
              )}
              onClick={onClearInput}
            >
              <ImCross className={cls.SingleInputForm__cancel__pic} />
            </button>
          </div>
        )}
        {isLoading && <Loader className={cls.Loader} />}
      </div>
      {error && <p className={cls.Error}>{t(error)} !</p>}
    </div>
  );
};

export default SingleInputForm;
