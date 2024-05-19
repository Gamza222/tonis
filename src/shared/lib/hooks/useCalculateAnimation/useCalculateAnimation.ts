import { useEffect } from 'react';

interface useCalculateAnimationProps {
  value: number;
  top: number;
  bottom: number;
  height: number;
  elemHeight: number;
  show?: boolean;
}

export function useCalculateAnimation({
  value,
  top,
  bottom,
  height,
  elemHeight,
  show,
}: useCalculateAnimationProps) {
  // useEffect(() => {
  //   setBoxRect(useElementRect(boxRef));
  // }, [boxRef]);
  const visibleHeight =
    Math.min(Number(bottom), height) - Math.max(Number(top), 0);

  if (value > height) {
    return true;
  }

  if (bottom < 0) {
    return true;
  }

  if (bottom == visibleHeight && bottom > 0 && visibleHeight > 0) {
    return true;
  }

  show && console.log(visibleHeight, value);

  return (
    visibleHeight > height ||
    visibleHeight > value ||
    (visibleHeight == elemHeight && visibleHeight > 0 && elemHeight > 0)
  );
}
