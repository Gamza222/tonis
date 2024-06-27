import React, { memo } from "react";
import cls from "./TradePageSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { TradePageSwitcherOptions } from "../TradePage";

interface TradePageSwitcherProps {
  className?: string;
  option: TradePageSwitcherOptions;

  selectOption: (value: TradePageSwitcherOptions) => void;
}

const TradePageSwitcher = memo((props: TradePageSwitcherProps) => {
  const { t } = useTranslation("trade");
  const { className, option, selectOption } = props;

  const onSelectGraph = () => {
    selectOption(TradePageSwitcherOptions.GRAPH);
  };
  const onSelectTrade = () => {
    selectOption(TradePageSwitcherOptions.TRADE);
  };

  return (
    <div className={classNames(cls.TradePageSwitcher, {}, [className])}>
      <button
        onClick={onSelectGraph}
        className={classNames(cls.TradePageSwitcher__button, {
          [cls.active]: option == TradePageSwitcherOptions.GRAPH,
        })}
      >
        {t("Graph")}
      </button>
      <button
        onClick={onSelectTrade}
        className={classNames(cls.TradePageSwitcher__button, {
          [cls.active]: option == TradePageSwitcherOptions.TRADE,
        })}
      >
        {t("Trade")}
      </button>
    </div>
  );
});

export default TradePageSwitcher;
