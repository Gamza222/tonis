import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import cls from "./InviteCode.module.scss";

import ButtonType1 from "shared/ui/ButtonType1/ButtonType1";
import ButtonBack from "shared/ui/ButtonBack/ButtonBack";
import SingleInputForm from "shared/ui/SingleInputForm/SingleInputForm";

import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import { inviteCodeActions } from "../slices/InviteCodeSlice";
import { useSelector } from "react-redux";
import { getInviteCodeState } from "../selectors/getInviteCodeState";
import { sendInviteCodeThunk } from "../api/sendInviteCodeThunk";

interface InviteCodeProps {
  className?: string;
  visible: boolean;
  onClose: () => void;
  onSliding: (value: boolean) => void;
}

const InviteCode = ({
  className,
  visible,
  onClose,
  onSliding,
}: InviteCodeProps) => {
  const { t } = useTranslation("login");
  const dispacth = useAppDispatch();

  const InviteCodeState = useSelector(getInviteCodeState);
  const [active, setActive] = useState<boolean>(false);
  const [hiding, setHiding] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<string>("");

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispacth(inviteCodeActions.setUserCode(event.target.value));
    },
    [dispacth]
  );

  const onClearInput = useCallback(() => {
    dispacth(inviteCodeActions.clearUserCode());
  }, [dispacth]);

  const onFocus = () => {
    setActive(true);
  };
  const onBlur = () => {
    setActive(false);
  };

  const closeInviteCode = () => {
    setHiding(true);
    onSliding(false);
    setTimeout(() => {
      onClose();
      setHiding(false);
    }, 200);
  };

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const code = InviteCodeState?.code;
      dispacth(sendInviteCodeThunk({ code: code }));
    },
    [dispacth, InviteCodeState]
  );

  useEffect(() => {
    const success = [InviteCodeState?.success];
    if (success) {
      closeInviteCode();
    }
  }, [InviteCodeState?.success]);

  useEffect(() => {
    if (visible) {
      setHiding(false);
    }
  }, [visible]);

  const InviteCodeMods: Mods = {
    [cls.InviteCodeHiding]: hiding,
  };

  return (
    <>
      {visible && (
        <div
          className={classNames(cls.InviteCode, { ...InviteCodeMods }, [
            className,
          ])}
        >
          <div className={cls.InviteCode__content}>
            <ButtonBack backFunc={closeInviteCode} />
            <SingleInputForm
              className={cls.InviteCode__content__input}
              active={active}
              value={InviteCodeState?.code || ""}
              placeholder={t("Input invite code")}
              maxLength={10}
              error={InviteCodeState?.error}
              formId="inviteCode"
              onClearInput={onClearInput}
              handleChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSubmit={onSubmit}
              autoFocus
            />
            <ButtonType1
              className={cls.InviteCode__content__submit}
              text={t("Check code")}
              type="submit"
              form="inviteCode"
              isLoading={InviteCodeState?.isLoading}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InviteCode;
