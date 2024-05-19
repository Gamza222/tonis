import { RefObject, useEffect, useState } from 'react';

export function useElementRect(ref: RefObject<HTMLElement>, show?: boolean) {
  const [rect, setRect] = useState<DOMRect | null>();

  function getRect(elem: HTMLElement) {
    if (elem) {
      const elemRect = elem.getBoundingClientRect();
      return elemRect;
    }
  }

  useEffect(() => {
    function handleResize() {
      if (ref.current) {
        setRect(getRect(ref.current));
      }
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(() => {
        setRect(getRect(ref.current!));
      });
      resizeObserver.observe(ref.current);
    }
  }, [ref]);

  return rect;
}
