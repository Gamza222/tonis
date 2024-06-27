import React from "react";
import cls from "./LoginPageTasks.module.scss";

import CheckText from "shared/ui/CheckText/CheckText";

import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getInviteCodeState } from "entities/InviteCode/selectors/getInviteCodeState";
import { useTranslation } from "react-i18next";
import { useWallet } from "app/providers/WalletProvider";

interface LoginPageTasksProps {
  className?: string;
}

const LoginPageTasks = ({ className }: LoginPageTasksProps) => {
  const { t } = useTranslation("Login");
  const inviteCodeState = useSelector(getInviteCodeState);
  const { walletAddress } = useWallet();

  return (
    <div className={classNames(cls.LoginPageTasks, {}, [className])}>
      <CheckText
        text={t("Invite code fulfilled")}
        checked={Boolean(inviteCodeState?.code)}
      />
      <CheckText
        text={t("Wallet connected")}
        checked={Boolean(walletAddress)}
      />
    </div>
  );
};

export default LoginPageTasks;
