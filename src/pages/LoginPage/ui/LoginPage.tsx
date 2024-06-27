import React, { useCallback, useEffect, useState } from "react";
import cls from "./LoginPage.module.scss";

import DynamicModuleLoader from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import ButtonType1 from "shared/ui/ButtonType1/ButtonType1";
import LoginPageInfo from "./LoginPageInfo/LoginPageInfo";
import SkeletonWrapper from "shared/ui/Skeleton/Skeleton";
import LoginPageTasks from "./LoginPageTasks/LoginPageTasks";

import Logo from "shared/assets/icons/png/logo.png";
import Ton from "shared/assets/icons/crypto/ton-pic.svg";

import { Mods, classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { InviteCode } from "entities/InviteCode";

import { useSelector } from "react-redux";
import { getInitData } from "entities/initData/model/selectors/getInitData";
import { getInviteCodeState } from "entities/InviteCode/selectors/getInviteCodeState";
import { ConnectWalletButton } from "entities/ConnectWalletButton";

interface LoginPageProps {
  className?: string;
}

const initialReducers = {};
const LoginPage = ({ className }: LoginPageProps) => {
  const { t } = useTranslation("login");

  const [inviteCodeVisible, setInviteCodeVisible] = useState<boolean>(false);
  const [slidingLogin, setSlidingLogin] = useState<boolean>(false);

  const initData = useSelector(getInitData);
  const InviteCodeState = useSelector(getInviteCodeState);

  const openInviteCode = useCallback(() => {
    if (!InviteCodeState?.success && !inviteCodeVisible) {
      setInviteCodeVisible(true);
      setSlidingLogin(true);
    }
  }, [setInviteCodeVisible, inviteCodeVisible, InviteCodeState]);

  const onSlidingLogin = useCallback(
    (value: boolean) => {
      setSlidingLogin(value);
    },
    [setInviteCodeVisible, inviteCodeVisible, setSlidingLogin, slidingLogin]
  );

  const closeInviteCode = useCallback(() => {
    setInviteCodeVisible(false);
  }, [setInviteCodeVisible, inviteCodeVisible]);

  const LoginPageMods: Mods = {
    // [cls.LoginPageSlide]: slidingLogin,
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {/* <ThreeScene /> */}
      {inviteCodeVisible && (
        <InviteCode
          visible={inviteCodeVisible}
          onClose={closeInviteCode}
          onSliding={onSlidingLogin}
        />
      )}
      <div className={classNames(cls.LoginPage, { ...LoginPageMods }, [])}>
        <div className={cls.LoginPage__content}>
          <div className={cls.LoginPage__content__logo}>
            <img
              src={Logo}
              alt="Logo"
              className={cls.LoginPage__content__logo__pic}
            />
          </div>
          <h1 className={cls.LoginPage__content__title}>
            {t("Welcome to Obelisk")}
          </h1>
          <div className={cls.LoginPage__content__buttons}>
            <SkeletonWrapper
              loading={initData.isLoading}
              className={cls.SkeletonButton}
            >
              <ButtonType1
                className={cls.LoginPage__content__buttons__btn}
                text={
                  InviteCodeState.success && InviteCodeState?.code
                    ? InviteCodeState?.code
                    : t("Input Invite Code")
                }
                onClick={openInviteCode}
              />
            </SkeletonWrapper>
            {/* <SkeletonWrapper loading={initData.isLoading} width="100%">
              <ConnectWalletButton />
            </SkeletonWrapper> */}
          </div>
          {/* <LoginPageInfo /> */}
          {/* <LoginPageTasks /> */}
          <div className={cls.LoginPage__content__bottom}>
            <p className={cls.LoginPage__content__bottom__text}>
              {t("Build on TON")}
            </p>
            <Ton className={cls.LoginPage__content__bottom__pic} />
          </div>
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginPage;
