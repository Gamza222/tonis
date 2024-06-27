import React, { memo, useEffect, useRef, useState } from "react";
import cls from "./PairEntity.module.scss";

import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchPairEntitiesThunk } from "../api/fetchPairEntitiesThunk";
import { useSelector } from "react-redux";
import { getPairEntitiesState } from "../selectors/getPairEntitiesState";
import { Autocomplete, Skeleton, TextField } from "@mui/material";
import { PairEntityActions } from "../slices/pairEntitiesSlice";

interface PairEntityProps {
  className?: string;
  name: string;
  change?: number;
  price: number;
  lastPrice: number;
}

const PairEntity = memo((props: PairEntityProps) => {
  const { t } = useTranslation();
  const { className, name, price, lastPrice, change = 0 } = props;
  const dispatch = useAppDispatch();

  const inputRef = useRef<JSX.Element>(null);

  const pairEntitiesState = useSelector(getPairEntitiesState);

  const priceString = (): string | number => {
    let newPrice: string | number = price;
    if (newPrice % 1 == 0) {
      newPrice = String(price + ",000");
    }
    return newPrice;
  };

  const percentMods: Mods = {
    [cls.PercentRed]: change < 0,
    [cls.PercentGreen]: change >= 0,
  };
  const priceMods: Mods = {
    [cls.PriceRed]: price < lastPrice,
    [cls.PriceGreen]: price >= lastPrice,
  };

  console.log(pairEntitiesState?.data?.[0]);

  const handlePairChange = (value: string | null) => {
    if (value) {
      dispatch(PairEntityActions.setPair(value));
    }
  };

  useEffect(() => {
    dispatch(fetchPairEntitiesThunk()).then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        console.log("fulfilled", res.payload?.[0]);
        handlePairChange(res.payload![0]);
      }
    });
  }, []);

  return (
    <>
      {!pairEntitiesState.pair &&
      !pairEntitiesState.data &&
      !pairEntitiesState.error ? (
        <Skeleton
          className={classNames(cls.SkeletonWrapper, {}, [
            "SkeletonWrapper",
            className,
          ])}
          animation="wave"
        />
      ) : (
        <div className={classNames(cls.PairEntity, {}, [className])}>
          {pairEntitiesState.error ? (
            <>Error</>
          ) : (
            <>
              {pairEntitiesState.pair && pairEntitiesState.data && (
                <Autocomplete
                  ref={inputRef}
                  className={cls.Input}
                  disablePortal
                  id="combo-box-demo"
                  options={pairEntitiesState.data}
                  onChange={(e, newValue: string | null) =>
                    handlePairChange(newValue)
                  }
                  value={pairEntitiesState.pair}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
});

export default PairEntity;

{
  /* <span
     className={classNames(
       cls.PairEntity__percent,
       { ...percentMods },
       []
     )}
   >
     {change < 0 ? "" : "+"}
     {change}%
   </span> */
}
