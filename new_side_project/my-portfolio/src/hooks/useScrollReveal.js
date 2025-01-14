// src/hooks/useScrollReveal.js
import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.hidden');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150; // Adjust if necessary

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('visible');
          reveals[i].classList.remove('hidden');
        } else {
          reveals[i].classList.add('hidden');
          reveals[i].classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollReveal;
