import React, { useEffect, useRef } from "react";
import cls from "./Chart.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { ColorType, createChart } from "lightweight-charts";
import { ChartData } from "./types/types";
import { cssVarToValue } from "shared/lib/telegram/functions/css-var-to-value";

interface ChartProps {
  className?: string;
  data: ChartData[];
  colors?: {
    backgroundColor: string;
    lineColor: string;
    textColor: string;
    areaTopColor: string;
    areaBottomColor: string;
  };
}

const Chart = (props: ChartProps) => {
  const {
    className,
    data,
    colors: {
      backgroundColor = cssVarToValue("var(--tg-theme-bg-color)"),
      lineColor = cssVarToValue("var(--tg-theme-secondary-bg-color)"),
      textColor = cssVarToValue("var(--tg-theme-subtitle-text-color)"),
      areaTopColor = "blue",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
  } = props;
  const { t } = useTranslation();

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
      };

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        // watermark: {},
        grid: {
          vertLines: {
            color: lineColor,
          },
          horzLines: {
            color: lineColor,
          },
        },

        rightPriceScale: {
          borderVisible: false,
        },

        timeScale: {
          borderVisible: false,
        },

        /**
         * Horizontal grid line options.
         */

        width: chartContainerRef.current.clientWidth,
        height: 300,
      });
      chart.timeScale().fitContent();

      const newSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });

      newSeries.setData(data);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);

        chart.remove();
      };
    }
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);
  return (
    <div
      ref={chartContainerRef}
      className={classNames(cls.Chart, {}, [className])}
    />
  );
};

export default Chart;
