'use client';

import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';

/**
 * Keeps the initial route loader visible until the client has hydrated and
 * above-the-fold entrance animations have had time to reveal the page.
 */
const InitialLoadGate = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeout: number | undefined;

    const finishInitialLoad = () => {
      // Give the route a short beat after its scripts and assets are ready so
      // its entrance animations can reveal the content before the overlay lifts.
      timeout = window.setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState === 'complete') {
      finishInitialLoad();
    } else {
      window.addEventListener('load', finishInitialLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishInitialLoad);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, []);

  return isLoading ? <Loader /> : null;
};

export default InitialLoadGate;
