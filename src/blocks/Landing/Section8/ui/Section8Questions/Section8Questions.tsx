import React from 'react';
import cls from './Section8Questions.module.scss';

import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import TelegramPic from 'shared/assets/icons/main/Telegram.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { Question } from 'widgets/Question';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import { Link } from 'react-router-dom';

interface Section8QuestionsProps {
  className?: string;
  exitAnimation: boolean;
}

const Section8Questions = ({
  className,
  exitAnimation,
}: Section8QuestionsProps) => {
  const duration = 0.3;

  const animationButtonVariants = {
    hidden: { x: '-10%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.135, 0.285, 0.335, 1],

        duration: duration,
      },
    },
  };
  return (
    <div className={classNames(cls.Section8Questions, {}, [className])}>
      <div className={cls.Section8Questions__part}>
        <div className={cls.Section8Questions__part__content}>
          <Question
            text={'Сколько длится обучение?'}
            content='Обучение длится 4 недели и включает более 20 уроков, которые освещают все основные направления для качественного написания скриптов.'
            exitAnimation={exitAnimation}
          />
          <Question
            text={'Какой формат обучения?'}
            content='Формат обучения: гибридный. Лекции проводятся в формате: видео-запись. Также на протяжении обучения запланированы еженедельные созвоны, несколько домашних заданий и разборы ошибок. Для оперативной поддержки и ответов на вопросы разработана система тикетов в телеграм-чате.'
            exitAnimation={exitAnimation}
          />
          <Question
            text={'Можно ли проходить обучение в удобное для меня время?'}
            content='Конечно! Вы сможете ознакомиться с учебным материалом (видео-уроками) в удобное для Вас время в любой день недели на нашей платформе. По окончанию обучения у Вас также останется доступ к лекциям!'
            exitAnimation={exitAnimation}
          />
        </div>
      </div>
      <div className={cls.Section8Questions__part}>
        <div className={cls.Section8Questions__part__content}>
          <Question
            text={
              'Смогу ли я научиться создавать собственные скрипты, если я не разбираюсь и не знаю языков программирования?'
            }
            content='Несомненно! Мы верим, что по окончанию обучения каждый ученик сможет создавать свои собственные скрипты без знания языков программирования ведь Zennoposter - это инструмент, который позволяет реализовать любую идею без знания программирования!'
            exitAnimation={exitAnimation}
          />
          <Question
            text={
              'Как я могу получать помощь и советы после окончания обучения?'
            }
            content='Оперативно получать советы и ответы на вопросы Вы сможете в нашем телеграм-чате на протяжении всего курса обучения. Также предусмотрена поддержка от 6 месяцев после прохождения обучения. Обратиться за помощью Вы сможете в нашем телеграм-чате через специально созданную систему тикетов!'
            exitAnimation={exitAnimation}
          />
        </div>
        <AnimationBoxScroll
          visiblePart={20}
          variants={animationButtonVariants}
          exitAnimation={exitAnimation}
        >
          <div className={cls.Section8Questions__part__buttons}>
            <p className={cls.Text}>
              Остались вопросы - напишите нашему менеджеру в Telegram
            </p>

            <Link
              to='https://t.me/artis01B'
              target='_blank'
              className={cls.Link}
            >
              <ButtonType1
                Pic={TelegramPic}
                text={'Написать в Telegram'}
                className={cls.TelegramButton}
              />
            </Link>
          </div>
        </AnimationBoxScroll>
      </div>
    </div>
  );
};

export default Section8Questions;
