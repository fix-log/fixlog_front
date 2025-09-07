import { useEffect, useState } from 'react';

export default function useNumericStyle(el: string, style: 'width' | 'height'): number | void {
  const [size, setSize] = useState<DOMRect>();
  const element = document.querySelector(el) as HTMLElement;

  useEffect(() => {
    const handleResize = () => {
      if (element) setSize(element.getBoundingClientRect());
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [element]);

  if (!size) return;

  if (style === 'width') {
    const left = parseInt(getComputedStyle(element).marginLeft);
    const right = parseInt(getComputedStyle(element).marginRight);
    return size.width + left + right;
  } else {
    const top = parseInt(getComputedStyle(element).marginTop);
    const bottom = parseInt(getComputedStyle(element).marginBottom);
    console.log(top, bottom);
    return size.height + top + bottom;
  }
}
