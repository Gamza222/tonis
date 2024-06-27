import React, { memo, useEffect, useState } from "react";
import cls from "./Skeleton.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton, SkeletonOwnProps } from "@mui/material";

interface SkeletonWrapperProps extends SkeletonOwnProps {
  className?: string;
  loading: boolean;
}

const SkeletonWrapper = memo((props: SkeletonWrapperProps) => {
  const { className, loading, ...rest } = props;

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [loaded]);

  return (
    <>
      {loaded ? (
        props.children
      ) : (
        <Skeleton
          className={classNames(cls.SkeletonWrapper, {}, [className])}
          animation="wave"
          {...rest}
        >
          {props.children}
        </Skeleton>
      )}
    </>
  );
});

export default SkeletonWrapper;
