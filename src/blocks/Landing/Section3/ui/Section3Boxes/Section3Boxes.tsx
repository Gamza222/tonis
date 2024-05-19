import React from 'react';
import cls from './Section3Boxes.module.scss';

import { ContentBox } from 'widgets/ContentBox';
import { classNames } from 'shared/lib/classNames/classNames';

import WalletPic from 'shared/assets/icons/main/wallet.svg';
import TimePic from 'shared/assets/icons/main/Time.svg';
import ZapPic from 'shared/assets/icons/main/Zap.svg';
import MenuPic from 'shared/assets/icons/main/menu.svg';

interface Section3BoxesProps {
  className?: string;
  exitAnimation: boolean;
}

const Section3Boxes = ({ className, exitAnimation }: Section3BoxesProps) => {
  return (
    <div className={classNames(cls.Section3Boxes, {}, [className])}>
      <ContentBox
        exitAnimation={exitAnimation}
        Pic={WalletPic}
        title='Безопасность и экономия'
        text='Ваша безопасность - в Ваших руках! Создавая собственные скрипты при помощи...'
        addText='Ваша безопасность - в Ваших руках! Создавая собственные скрипты при помощи интуитивно понятного и приятного интерфейса - Ваши данные и средства всегда будут в безопасности. Также Вам больше не придется приобретать скрипты у других разработчиков!'
      />
      <ContentBox
        exitAnimation={exitAnimation}
        Pic={TimePic}
        time={true}
        title='Экономия времени'
        text='Забудьте об однотипных и монотонных действиях вручную! Создав собственный скрипт...'
        addText='Забудьте об однотипных и монотонных действиях вручную! Создав собственный скрипт Вы сможете освободить себя от рутины и увеличить охват выполняемых задач при помощи многопоточной работы профилей.'
      />
      <ContentBox
        exitAnimation={exitAnimation}
        Pic={ZapPic}
        zap={true}
        title='Быстрый старт'
        text='Zennoposter - позволяет быстро начать разработку собственных скриптов...'
        addText='Zennoposter - позволяет быстро начать разработку собственных скриптов. При помощи множества готовых действий для работы Вы сможете быстро и качественно реализовывать Ваши идеи!'
      />
      <ContentBox
        exitAnimation={exitAnimation}
        Pic={MenuPic}
        title='Масштабирование и конкурентоспособность'
        text='Zennoposter - позволяет масштабировать Ваши идеи без труда! При разработке собственных скриптов...'
        addText='Zennoposter - позволяет масштабировать Ваши идеи без труда! При разработке собственных скриптов Вы сможете избавиться от лицензионных привязок и маштабировать выполнение скриптов на неограниченное количество мощностей, что позволит Вам на равных конкурировать с другими.'
      />
    </div>
  );
};

export default Section3Boxes;
