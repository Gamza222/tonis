import React from "react";
import cls from "./TradePageTimes.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

export enum TimeFrames {
  "1S" = "1s",
  "1M" = "1m",
  "3M" = "3m",
  "5M" = "5m",
  "15M" = "15m",
  "30M" = "30m",
  "1H" = "1h",
  "2H" = "2h",
  "4H" = "4h",
  "6H" = "6h",
  "12H" = "12h",
  "1D" = "1D",
  "1W" = "1W",
  "1MONTH" = "1M",
}

interface TradePageTimesProps {
  className?: string;
  time: TimeFrames;
  onSetTime: (value: TimeFrames) => void;
}

const TradePageTimes = (props: TradePageTimesProps) => {
  const { t } = useTranslation("trade");
  const { className, time, onSetTime } = props;

  const setTime = (key: string) => {
    onSetTime(TimeFrames[key as keyof typeof TimeFrames]);
  };

  console.log(time);

  return (
    <div className={classNames(cls.TradePageTimes, {}, [className])}>
      <p className={cls.TradePageTimes__title}>{t("Time")}</p>
      <div className={cls.TradePageTimes__content}>
        {(Object.keys(TimeFrames) as Array<keyof typeof TimeFrames>).map(
          (key, index) => {
            return (
              <button
                className={classNames(
                  cls.TradePageTimes__content__button,
                  {
                    [cls.active]: TimeFrames[key] == time,
                  },
                  []
                )}
                onClick={() => setTime(key)}
                key={index}
              >
                {TimeFrames[key]}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TradePageTimes;
