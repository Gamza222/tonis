import React, { useState, useEffect } from 'react';

export function useWindowScrollTriggered() {
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const handleScroll = () => {
    setScrollTriggered(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scrollTriggered;
}
