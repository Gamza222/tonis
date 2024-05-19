import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LessonContentBox.module.scss';

interface LessonContentBoxProps {
  className?: string;
  text?: string;
  items?: string[];
}

const LessonContentBox = ({
  className,
  text,
  items,
}: LessonContentBoxProps) => {
  return (
    <div
      className={classNames(
        cls.LessonContentBox,
        { [cls.LessonContentBoxText]: text },
        [],
      )}
    >
      <div className={cls.TextWrapper}>
        {text && <p className={cls.LessonContentBox__text}>{text}</p>}
        {items?.map((text, key) => (
          <p className={cls.LessonContentBox__textItem} key={key}>
            &#x2022; {` `}
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LessonContentBox;
