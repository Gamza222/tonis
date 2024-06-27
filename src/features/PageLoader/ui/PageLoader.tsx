import React, { useCallback, useEffect, useState } from "react";
import cls from "./PageLoader.module.scss";

// import LogoPic from 'shared/assets/icons/LogoAnimation.svg';

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoaderActions } from "../model/slices/PageLoaderSlice";
import Loader from "shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cls.PageLoader}>
      <Loader className={cls.Spinner} />
    </div>
  );
};

export default PageLoader;
