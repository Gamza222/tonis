import React from "react";
import cls from "./TradePageChartSlide.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import TradePagePrices from "./TradePagePrices/TradePagePrices";
import Chart from "widgets/Chart/Chart";
import TradePageTimes, { TimeFrames } from "./TradePageTimes/TradePageTimes";

interface TradePageChartSlideProps {
  className?: string;
  data: any;
  timeFrame: TimeFrames;
  onSetTimeFrame: (value: TimeFrames) => void;
}

const TradePageChartSlide = (props: TradePageChartSlideProps) => {
  const { t } = useTranslation("trade");
  const { className, data, timeFrame, onSetTimeFrame } = props;
  return (
    <div className={classNames(cls.TradePageChartSlide, {}, [className])}>
      <TradePagePrices />
      <TradePageTimes onSetTime={onSetTimeFrame} time={timeFrame} />
      <Chart data={data} />
    </div>
  );
};

export default TradePageChartSlide;
