import React, { useRef, useState } from 'react';
import cls from './ContentBox.module.scss';

import ArrowPic from 'shared/assets/icons/main/ArrowType2.svg';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside';
import { motion } from 'framer-motion';
import AnimationBoxScroll from 'shared/ui/AnimationBoxScroll/AnimationBoxScroll';

interface ContentBoxProps {
  className?: string;
  Pic: React.VFC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  addText: string;
  time?: boolean;
  zap?: boolean;
  exitAnimation: boolean;
}

const ContentBox = ({
  className,
  Pic,
  title,
  text,
  addText,
  time = false,
  zap = false,
  exitAnimation,
}: ContentBoxProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const [closing, setClosing] = useState<boolean>(false);
  const duration = 0.2;

  const onClaseModal = () => {
    setClosing(true);
    setTimeout(() => {
      setOpened(false);
      setClosing(false);
    }, (duration + 0.1) * 1000);
  };

  const modalRef = useRef<HTMLDivElement>(null);
  const modsModal: Mods = {
    [cls.closingModal]: closing,
  };
  const modsOverlay: Mods = {
    [cls.closingOverlay]: closing,
  };
  const modsPic: Mods = {
    [cls.time]: time,
    [cls.zap]: zap,
  };

  useClickOutside(modalRef, onClaseModal);

  const animationBoxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
  return (
    <>
      <AnimationBoxScroll
        visiblePart={60}
        variants={animationBoxVariants}
        exitAnimation={exitAnimation}
        className={classNames(cls.ContentBox, {}, [className])}
      >
        <div className={cls.Content}>
          <div className={cls.Icon}>
            <Pic className={classNames(cls.Icon__pic, { ...modsPic }, [])} />
          </div>
          <p className={cls.Title}>{title}</p>
          <p className={cls.Text}>{text}</p>
          <button className={cls.Button} onClick={() => setOpened(true)}>
            <p className={cls.ButtonText}>Читать далее</p>
            <ArrowPic />
          </button>
        </div>
      </AnimationBoxScroll>
      {opened && (
        <div className={classNames(cls.blackOverlay, { ...modsOverlay }, [])} />
      )}
      {opened && (
        <div ref={modalRef} className={classNames(cls.Modal, { ...modsModal })}>
          <div className={cls.Content}>
            <div className={cls.Icon}>
              <Pic className={classNames(cls.Icon__pic, { ...modsPic }, [])} />
            </div>
            <div className={cls.Content__text}>
              <p className={cls.Title}>{title}</p>
              <p className={cls.Text}>{addText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentBox;
