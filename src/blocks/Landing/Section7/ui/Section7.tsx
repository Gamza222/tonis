import React, { useCallback, useState } from 'react';

import cls from './Section7.module.scss';

import Section7Title from './Section7Title/Section7Title';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

import { classNames } from 'shared/lib/classNames/classNames';
import { Tariff } from 'entities/Tariff';

interface Section7Props {
  className?: string;
}

const Section7 = ({ className }: Section7Props) => {
  const duration = 0.6;

  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);

  return (
    <AnimationBoxScroll
      id='tariffs'
      className={classNames(cls.Section7, {}, [])}
      visiblePart={220}
      exitAnimation={exitAnimation || false}
      setExit={setterExitAnimation}
    >
      <div className={cls.Section7__content}>
        <Section7Title exitAnimation={exitAnimation} />
        <div className={cls.Boxes}>
          <Tariff
            exitAnimation={exitAnimation}
            title={'Базовый'}
            places={'∞ мест'}
            text={'Какой-то текст который описывает этот пакет'}
            price={666}
            options={[0, 1, 2, 3, 4]}
            button={'Купить Базовый'}
            href={'https://t.me/Web3up_bot'}
            usual={true}
          />
          <Tariff
            exitAnimation={exitAnimation}
            title={'Эксперт'}
            places={'∞ мест'}
            text={'Какой-то текст который описывает этот пакет'}
            price={1111}
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
            button={'Купить Эксперт'}
            href={'https://t.me/Web3up_bot'}
          />
          <Tariff
            exitAnimation={exitAnimation}
            title={'Стандарт'}
            places={'∞ мест'}
            text={'Какой-то текст который описывает этот пакет'}
            price={888}
            options={[0, 1, 2, 3, 4, 5, 6]}
            button={'Купить Стандарт'}
            href={'https://t.me/Web3up_bot'}
            plus={true}
          />
        </div>
      </div>
    </AnimationBoxScroll>
  );
};

export default Section7;
