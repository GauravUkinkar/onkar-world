"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './transition.scss'; // Ensure to include your Tailwind CSS imports

const Transition = () => {
  useEffect(() => {
    // GSAP animation for fade down effect
    gsap.fromTo(".transition-wrapper",
      { opacity: 0, y: '-40px', filter: 'blur(12px)' },
      { opacity: 1, y: '0', filter: 'blur(0)', duration: 0.5, ease: "power2.out" }
    );

    return () => {
      // GSAP animation for fade up effect
      gsap.to(".transition-wrapper",
        { opacity: 0, y: '40px', filter: 'blur(12px)', duration: 0.5, ease: "power2.in" }
      );
    };
  }, []);

  return (
    <div className="transition-wrapper">
      <div className="content">
        {/* Optional: Add content or a logo */}
        <image src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Transition;
