import React, { memo } from "react";
import cls from "./PriceBox.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@mui/material";

interface PriceBoxProps {
  className?: string;
  title: string;
  value: string;
  normal?: boolean;
  percentage?: boolean;
  isLoading?: boolean;
}

const PriceBox = memo((props: PriceBoxProps) => {
  const { t } = useTranslation();
  const {
    className,
    title,
    value,
    normal,
    percentage,
    isLoading = false,
  } = props;

  const priceMods: Mods = {
    [cls.green]: Number(value) > 0 && !normal,
    [cls.red]: Number(value) < 0 && !normal,
  };
  return (
    <>
      {isLoading ? (
        <Skeleton
          className={classNames(cls.SkeletonWrapper, {}, [
            "SkeletonWrapper",
            className,
          ])}
          animation="wave"
        />
      ) : (
        <div className={classNames(cls.PriceBox, {}, [className])}>
          <p className={cls.PriceBox__title}>{title}</p>
          <p className={classNames(cls.PriceBox__price, { ...priceMods }, [])}>
            {value}
            {percentage && "%"}
          </p>
        </div>
      )}
    </>
  );
});

export default PriceBox;
