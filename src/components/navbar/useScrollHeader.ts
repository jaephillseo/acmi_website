'use client';

import { useState, useEffect } from 'react';

export const useScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      setIsScrolled(window.scrollY >= 20);
    };

    window.addEventListener('scroll', scrollHeader);
    return () => window.removeEventListener('scroll', scrollHeader);
  }, []);

  return isScrolled;
};