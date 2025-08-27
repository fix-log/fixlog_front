'use client';

import { useEffect, useState } from 'react';

const VIEW_PORT = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
};

type viewPortKey = keyof typeof VIEW_PORT;
type stylesType = {
  [key in viewPortKey]: Record<string, string>;
};

export function useMediaQuery(styles: stylesType): Record<string, string> {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (VIEW_PORT.desktop <= size) return styles.desktop;
  else if (VIEW_PORT.tablet <= size) return styles.tablet;
  else return styles.mobile;
}
