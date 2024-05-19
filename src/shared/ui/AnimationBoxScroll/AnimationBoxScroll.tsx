import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLMotionProps, motion } from 'framer-motion';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';
import { useCalculateAnimation } from 'shared/lib/hooks/useCalculateAnimation/useCalculateAnimation';

export interface AnimationBoxProps extends HTMLMotionProps<'div'> {
  className?: string;
  children?: ReactNode | undefined;
  visiblePart: number;
  exitAnimation: boolean;
  setExit?: (val: boolean) => void;
  show?: boolean;
  addVisibleOption?: boolean;
}

const AnimationBoxScroll = ({
  className,
  children,
  exitAnimation,
  visiblePart,
  setExit,
  show,
  addVisibleOption = true,
  ...props
}: AnimationBoxProps) => {
  const { width, height } = useContext(DimensionsContext);

  const [visible, setVisible] = useState<boolean>(false);

  const boxRef = useRef<HTMLDivElement | null>(null);
  const boxRect = useElementRect(boxRef, true);

  const AnimationBoxVisible = useMemo(
    () =>
      useCalculateAnimation({
        value: visiblePart,
        top: Number(boxRect?.top),
        bottom: Number(boxRect?.bottom),
        height: height,
        elemHeight: Number(boxRect?.height),
      }),
    [boxRect?.top, boxRect?.bottom, boxRect?.height, height, width],
  );

  useEffect(() => {
    if (setExit) {
      if (!AnimationBoxVisible) {
        setExit(true);
      } else {
        setExit(false);
      }
    }
  }, [AnimationBoxVisible]);

  useEffect(() => {
    AnimationBoxVisible && !exitAnimation && setVisible(true);
    exitAnimation && setVisible(false);
  }, [AnimationBoxVisible, exitAnimation]);

  show && console.log(visible);

  return (
    <motion.div
      ref={boxRef}
      initial='hidden'
      animate={visible && addVisibleOption ? 'visible' : 'hidden'}
      className={classNames('', {}, [className])}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimationBoxScroll;
