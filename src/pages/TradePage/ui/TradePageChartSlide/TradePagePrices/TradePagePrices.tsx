import React, { memo } from "react";
import cls from "./TradePagePrices.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import PriceBox from "shared/ui/PriceBox/PriceBox";

interface TradePagePricesProps {
  className?: string;
}

const TradePagePrices = memo((props: TradePagePricesProps) => {
  const { t } = useTranslation("trade");
  const { className } = props;
  return (
    <div className={classNames(cls.TradePagePrices, {}, [className])}>
      <PriceBox
        className={cls.PriceBox}
        title={`${t("Price")}`}
        value={"70.000"}
      />
      <PriceBox
        className={cls.PriceBox}
        title={`${t("24h Change")}`}
        value={"-6.25"}
        percentage
      />
      <PriceBox
        className={cls.PriceBox}
        title={`${t("24h High")}`}
        value={"71.000"}
        normal
      />
      <PriceBox
        className={cls.PriceBox}
        title={`${t("24h Low")}`}
        value={"69.000"}
        normal
      />
    </div>
  );
});

export default TradePagePrices;
