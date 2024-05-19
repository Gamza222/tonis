import React from 'react';
import cls from './Tariff.module.scss';

import ButtonType2 from 'shared/ui/ButtonType2/ButtonType2';
import CheckPic from 'shared/assets/icons/main/CheckSign.svg';

import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import TariffOption from './TariffOption/TariffOption';

interface TariffProps {
  className?: string;
  exitAnimation: boolean;
  title: string;
  places: string;
  text: string;
  price: number;
  options: number[];
  href: string;
  button: string;
  usual?: boolean;
  plus?: boolean;
}

const Tariff = ({
  className,
  exitAnimation,
  title,
  places,
  text,
  price,
  options,
  href,
  button,
  usual = false,
  plus = false,
}: TariffProps) => {
  const duration = 0.6;

  const buttonMods: Mods = {
    [cls.ButtonPlus]: plus,
    [cls.ButtonUsusal]: usual,
  };
  const tariffMods: Mods = {
    [cls.TariffPlus]: plus,
    [cls.TariffUsual]: usual,
  };

  const animationTariffVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],

        duration: duration,
      },
    },
  };
  return (
    <AnimationBoxScroll
      className={classNames(cls.Tariff, { ...tariffMods }, [className])}
      visiblePart={220}
      exitAnimation={exitAnimation || false}
      variants={animationTariffVariants}
    >
      <div className={cls.Tariff__content}>
        <p className={cls.Tariff__title}>{title}</p>
        {/* <p className={cls.Tariff__places}>{places}</p> */}
        {/* <p className={cls.Tariff__text}>{text}</p> */}
        <p className={cls.Tariff__price}>${price}</p>
        <div className={cls.Tariff__options}>
          <TariffOption
            text='Базовое обучение (более 15 лекций)'
            number={0}
            options={options}
          />
          <TariffOption
            text='Пожизненный доступ к урокам'
            number={1}
            options={options}
          />
          <TariffOption
            text='9 мес. доступ к приватному чату команды'
            number={2}
            options={options}
          />
          <TariffOption
            text='12 мес. поддержка после обучения'
            number={3}
            options={options}
          />
          <TariffOption
            text='Еженедельные созвоны с командой'
            number={4}
            options={options}
          />
          <TariffOption
            text='Дополнительные лекции по C#'
            number={5}
            options={options}
          />
          <TariffOption
            text='Базовые наработки (сниппеты) на языке С# для применения в шаблонах'
            number={6}
            options={options}
          />
          <TariffOption
            text='Доступ к имеющимся скриптам команды Web3UP (Scroll, checkerы кошельков, HyperLane, Xterio + Palio) + обновления скриптов на всё время присутствия в приватном чате'
            number={7}
            options={options}
          />
          <TariffOption
            text='Индивидуальные (по запросу) созвоны'
            number={8}
            options={options}
          />
          <TariffOption
            text='Приоритетная техническая поддержка'
            number={9}
            options={options}
          />
          <TariffOption
            text='Доступ к новым скриптам (активностям), которые будут выпущены командой в будущем'
            number={10}
            options={options}
          />
          <TariffOption
            text='Доступ к голосованию по приоритетной разработке скриптов (под актуальные/горящие активности)'
            number={11}
            options={options}
          />
        </div>
        <a
          href={href}
          target='_blank'
          className={classNames(cls.Tariff__button, { ...buttonMods }, [])}
        >
          <ButtonType2 text={button} />
        </a>
      </div>
    </AnimationBoxScroll>
  );
};

export default Tariff;
