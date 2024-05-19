import React from 'react';
import cls from './TableBox.module.scss';

import AnimationBoxScroll from '../AnimationBoxScroll/AnimationBoxScroll';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface TableBoxProps {
  className?: string;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  text: string;
  exitAnimation?: boolean;
}

const TableBox = ({
  className,
  left,
  center,
  right,
  text,
  exitAnimation,
}: TableBoxProps) => {
  const duration = 1;
  const animationTableVariants = {
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
  const mods: Mods = {
    [cls.left]: left,
    [cls.right]: right,
    [cls.center]: center,
  };

  return (
    <AnimationBoxScroll
      visiblePart={90}
      variants={animationTableVariants}
      exitAnimation={exitAnimation || false}
      className={classNames(cls.TableBox, { ...mods }, [className])}
    >
      <p className={cls.TableBox__text}>{text}</p>
      <div className={cls.TableBox__blob} />
    </AnimationBoxScroll>
  );
};

export default TableBox;
