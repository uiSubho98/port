"use client";

import { useEffect } from 'react';

export function AnimatedBackground() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-background" style={{
      backgroundImage: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), hsl(var(--primary) / 0.1), transparent 30vw), radial-gradient(circle at calc(var(--x, 50%) + 100px) calc(var(--y, 50%) + 100px), hsl(var(--accent) / 0.1), transparent 40vw)`
    }}></div>
  );
}
