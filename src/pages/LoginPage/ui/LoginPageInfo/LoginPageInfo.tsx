import React from "react";
import cls from "./LoginPageInfo.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getInitData } from "entities/initData/model/selectors/getInitData";
import { getUserData } from "entities/User";

import SkeletonWrapper from "shared/ui/Skeleton/Skeleton";

interface LoginPageInfoProps {
  className?: string;
}

const LoginPageInfo = ({ className }: LoginPageInfoProps) => {
  const initData = useSelector(getInitData);
  const userData = useSelector(getUserData);

  return (
    <div className={classNames(cls.LoginPageInfo, {}, [className])}>
      <div className={cls.LoginPageInfo__avatar}>
        <SkeletonWrapper loading={initData.isLoading} variant="circular">
          <img
            src={userData.authData?.photoLink || ""}
            className={cls.LoginPageInfo__avatar__img}
          />
        </SkeletonWrapper>
      </div>

      <SkeletonWrapper loading={initData.isLoading}>
        <div className={cls.LoginPageInfo__name}>
          <p className={cls.LoginPageInfo__name__text}>
            {initData?.data?.user?.first_name || ""}
          </p>
          <p className={cls.LoginPageInfo__name__text}>
            {initData?.data?.user?.last_name || ""}
          </p>
        </div>
      </SkeletonWrapper>
    </div>
  );
};

export default LoginPageInfo;
