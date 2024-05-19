import React from 'react';

import cls from './Section3Content.module.scss';
import Section3Title from '../Section3Title/Section3Title';
import Section3Text from '../Section3Text/Section3Text';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface Section3ContentProps {
  className?: string;
  exitAnimation: boolean;
}

const Section3Content = ({
  className,
  exitAnimation,
}: Section3ContentProps) => {
  const duration = 0.5;

  const animationTextVariants = {
    hidden: { x: '-10%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
  return (
    <div className={classNames(cls.Section3Content, {}, [])}>
      <Section3Title exitAnimation={exitAnimation} />
      <Section3Text exitAnimation={exitAnimation} />
      <AnimationBoxScroll
        visiblePart={10}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
      >
        <Link to='https://t.me/web3up_official' target='_blank'>
          <ButtonType1 text='Записаться на курс' className={cls.ButtonType1} />
        </Link>
      </AnimationBoxScroll>
    </div>
  );
};

export default Section3Content;
