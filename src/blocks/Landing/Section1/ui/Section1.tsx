import React, { useEffect, useRef } from 'react';

import cls from './Section1.module.scss';

import Participants from './Participants/Participants';
import Buttons from './Buttons/Buttons';
import Timings from './Timings/Timings';
import Section1Title from './Section1Title/Section1Title';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getPageLoaderData } from 'features/PageLoader';
import { canvasNodes } from 'shared/lib/CanvasBlob/CanvasBlob';

interface Section1Props {
  className?: string;
}

const Section1 = ({ className }: Section1Props) => {
  const canvasBg = useRef<HTMLCanvasElement>(null);
  const isLoaded = useSelector(getPageLoaderData).isLoading;
  const ctx = canvasBg?.current?.getContext('2d');
  const firstDuration = 0.8;

  useEffect(() => {
    if (canvasBg.current !== null) {
      //   const drawCanvas = () => {
      //     if (canvasBg.current) canvasNodes(canvasBg.current);
      //   };
      //   window.addEventListener('resize', drawCanvas);

      canvasNodes(canvasBg.current);
    }
  }, [canvasBg]);
  const canvasMods: Mods = {
    [cls.canvasBgVisible]: !isLoaded,
  };

  return (
    <div className={classNames(cls.Section1, {}, [])} id='what_is_zenoposter'>
      {/* <canvas
        ref={canvasBg}
        className={classNames(cls.Background, { ...canvasMods }, [])}
      ></canvas> */}
      <div className={cls.Section1__content}>
        <Section1Title />
        <Participants />
        <Buttons />
        <Timings />
      </div>
    </div>
  );
};

export default Section1;
