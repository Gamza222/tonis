import React from 'react';
import cls from './Section6Table.module.scss';

import TableBox from 'shared/ui/TableBox/TableBox';

import { classNames } from 'shared/lib/classNames/classNames';

interface Section6TableProps {
  className?: string;
  exitAnimation: boolean;
}

const Section6Table = ({ className, exitAnimation }: Section6TableProps) => {
  return (
    <div className={classNames(cls.Section6Table, {}, [])}>
      <TableBox
        left={true}
        text={
          'Команда профессионалов с 5-ти летним опытом автоматизации браузерных, мобильных и других задач'
        }
        exitAnimation={exitAnimation}
      />
      <TableBox
        center={true}
        text={
          'Опыт работы с множеством сайтов и знание многих тонкостей автоматизации'
        }
        exitAnimation={exitAnimation}
      />
      <TableBox
        right={true}
        text={
          'Еженедельные созвоны с учениками для работы над ошибками. Домашние задания по пройденному материалу'
        }
        exitAnimation={exitAnimation}
      />
      <TableBox
        left={true}
        text={
          'Оперативная поддержка в процессе обучения. Поддержка после обучения от 6 месяцев и более'
        }
        exitAnimation={exitAnimation}
      />
      <TableBox
        center={true}
        text={'Пожизненный доступ к урокам'}
        exitAnimation={exitAnimation}
      />
      <TableBox
        right={true}
        text={
          'Доступ к имеющимся и новым скриптам команды Web3UP. Лекции по C# и многое другое...'
        }
        exitAnimation={exitAnimation}
      />
    </div>
  );
};

export default Section6Table;
