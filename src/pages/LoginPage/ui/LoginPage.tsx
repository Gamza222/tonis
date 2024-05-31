import React, { useCallback, useEffect, useState } from "react";
import cls from "./LoginPage.module.scss";

import DynamicModuleLoader from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import ButtonType1 from "shared/ui/ButtonType1/ButtonType1";
import LoginPageInfo from "./LoginPageInfo/LoginPageInfo";
import SkeletonWrapper from "shared/ui/Skeleton/Skeleton";

import { Mods, classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { InviteCode } from "entities/InviteCode";
import { inviteCodeReducer } from "entities/InviteCode/slices/InviteCodeSlice";

import { useSelector } from "react-redux";
import { getInitData } from "entities/initData/model/selectors/getInitData";
import ThreeScene from "shared/ui/Bg/Bg";
import { getInviteCodeState } from "entities/InviteCode/selectors/getInviteCodeState";
import { TonConnectButton } from "@tonconnect/ui-react";

interface LoginPageProps {
  className?: string;
}

const initialReducers = {
  InviteCode: inviteCodeReducer,
};
const LoginPage = ({ className }: LoginPageProps) => {
  const { t } = useTranslation("login");

  const [inviteCodeVisible, setInviteCodeVisible] = useState<boolean>(false);
  const [slidingLogin, setSlidingLogin] = useState<boolean>(false);

  const initData = useSelector(getInitData);
  const InviteCodeState = useSelector(getInviteCodeState);

  const openInviteCode = useCallback(() => {
    if (!InviteCodeState?.success) {
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
    [cls.LoginPageSlide]: slidingLogin,
  };
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {/* <ThreeScene /> */}
      <InviteCode
        visible={inviteCodeVisible}
        onClose={closeInviteCode}
        onSliding={onSlidingLogin}
      />
      <div className={classNames(cls.LoginPage, { ...LoginPageMods }, [])}>
        <div className={cls.LoginPage__content}>
          <LoginPageInfo />
          <div className={cls.LoginPage__content__buttons}>
            <SkeletonWrapper loading={initData.isLoading} width="100%">
              <ButtonType1
                className={cls.LoginPage__content__buttons__btn}
                text={t("Input Invite Code")}
                onClick={openInviteCode}
              />
            </SkeletonWrapper>
            <SkeletonWrapper loading={initData.isLoading} width="100%">
              <TonConnectButton
                className={cls.LoginPage__content__buttons__connectBtn}
              />
            </SkeletonWrapper>
          </div>
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginPage;
