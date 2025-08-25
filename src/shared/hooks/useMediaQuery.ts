import { useEffect, useState } from "react";

const VIEW_PORT = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
};

type viewPortType = 'mobile' | 'tablet' | 'desktop';

export function useMediaQuery(): viewPortType {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => setSize(window.innerWidth)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize',handleResize)
  },[])
  if (VIEW_PORT.desktop <= size) return 'desktop';
  else if (VIEW_PORT.tablet <= size) return 'tablet';
  else return 'mobile';
}
