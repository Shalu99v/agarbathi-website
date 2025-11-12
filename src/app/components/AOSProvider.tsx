'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
  children: React.ReactNode;
};

export default function AOSProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out',
      offset: 80,
    });

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('load', AOS.refresh);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', AOS.refresh);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
}

