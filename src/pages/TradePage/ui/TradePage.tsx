import React, { useCallback, useState } from "react";
import cls from "./TradePage.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { PairEntity } from "entities/PairEntity";

import TradePageSwitcher from "./TradePageSwitcher/TradePageSwitcher";
import TradePageChartSlide from "./TradePageChartSlide/TradePageChartSlide";
import { TimeFrames } from "./TradePageChartSlide/TradePageTimes/TradePageTimes";

interface TradePageProps {
  className?: string;
}

export enum TradePageSwitcherOptions {
  TRADE = "trade",
  GRAPH = "graph",
}

const TradePage = (props: TradePageProps) => {
  const { t } = useTranslation("trade");
  const { className } = props;

  const [slide, setSlide] = useState<TradePageSwitcherOptions>(
    TradePageSwitcherOptions.GRAPH
  );

  const [timeFrame, setTimeFrame] = useState<TimeFrames>(TimeFrames["1S"]);

  const inialData = [
    { time: "2018-12-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    { time: "2018-12-23", open: 45.12, high: 53.9, low: 45.12, close: 48.09 },
    { time: "2018-12-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    { time: "2018-12-25", open: 68.26, high: 68.26, low: 59.04, close: 60.5 },
    { time: "2018-12-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    { time: "2018-12-27", open: 91.04, high: 121.4, low: 82.7, close: 111.4 },
    {
      time: "2018-12-28",
      open: 111.51,
      high: 142.83,
      low: 103.34,
      close: 131.25,
    },
    {
      time: "2018-12-29",
      open: 131.33,
      high: 151.17,
      low: 77.68,
      close: 96.43,
    },
    { time: "2018-12-30", open: 106.33, high: 110.2, low: 90.39, close: 98.1 },
    {
      time: "2018-12-31",
      open: 109.87,
      high: 114.69,
      low: 85.66,
      close: 111.26,
    },
  ];

  const selectOption = useCallback(
    (value: TradePageSwitcherOptions) => {
      setSlide(value);
    },
    [setSlide, slide]
  );

  const onSetTimeFrame = useCallback(
    (value: TimeFrames) => {
      setTimeFrame(value);
    },
    [timeFrame, setTimeFrame]
  );

  return (
    <div className={classNames(cls.TradePage, {}, [className])}>
      <div className={cls.TradePage__content}>
        {/* <p className={cls.PairEntity__name}>{name}</p>
          <p
            className={classNames(cls.PairEntity__price, { ...priceMods }, [])}
          >
            {priceString()} USDT
          </p> */}
        <TradePageSwitcher
          selectOption={selectOption}
          option={slide}
          className={cls.TradePageSwitcher}
        />
        <PairEntity
          className={cls.PairEntity}
          name="BTC/USDT"
          price={70.999}
          lastPrice={69.999}
          change={0.2}
        />
        {slide == TradePageSwitcherOptions.GRAPH && (
          <TradePageChartSlide
            data={inialData}
            timeFrame={timeFrame}
            onSetTimeFrame={onSetTimeFrame}
          />
        )}
      </div>
    </div>
  );
};

export default TradePage;
