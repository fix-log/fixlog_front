'use client';

import { useEffect, useState } from 'react';

const VIEW_PORT = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
};

type viewPortKey = keyof typeof VIEW_PORT;

export function useMediaQuery(): viewPortKey {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (VIEW_PORT.desktop <= size) return 'desktop';
  else if (VIEW_PORT.tablet <= size) return 'tablet';
  else return 'mobile';
}
