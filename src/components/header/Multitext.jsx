import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Multitext = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Frontend Developer',
        'Ui/Ux Designer',
        'Programmer',
        '',
        
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef}></span>;
};

export default Multitext;
