import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scroll behavior
    const htmlElement = document.documentElement;
    const originalBehavior = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    
    window.scrollTo(0, 0);
    
    // Restore smooth scroll behavior after scrolling
    setTimeout(() => {
      htmlElement.style.scrollBehavior = originalBehavior;
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
