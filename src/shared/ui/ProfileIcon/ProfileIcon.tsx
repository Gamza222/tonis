import React, { memo } from "react";
import cls from "./ProfileIcon.module.scss";

import SkeletonWrapper from "../Skeleton/Skeleton";

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getInitData } from "entities/initData/model/selectors/getInitData";
import { getUserData } from "entities/User";

interface ProfileIconProps {
  className?: string;
}

const ProfileIcon = memo((props: ProfileIconProps) => {
  const { t } = useTranslation();
  const initData = useSelector(getInitData);
  const userData = useSelector(getUserData);
  const { className } = props;

  console.log(initData, userData.isLoading);
  return (
    <SkeletonWrapper loading={userData.isLoading} variant="circular">
      <div className={classNames(cls.ProfileIcon, {}, [className])}>
        {userData.authData?.photoLink ? (
          <img
            className={cls.ProfileIcon__image}
            src={userData.authData?.photoLink}
          />
        ) : (
          <p className={cls.ProfileIcon__text}>
            {initData.data?.user?.first_name.split("")[0] || "g"}
          </p>
        )}
        {/* <img
          className={cls.ProfileIcon__image}
          src={
            userData.authData?.photoLink ||
            "data:image/jpeg;base64,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"
          }
        /> */}
      </div>
    </SkeletonWrapper>
  );
});

export default ProfileIcon;
