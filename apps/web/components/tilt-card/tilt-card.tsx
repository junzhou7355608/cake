'use client';

import { useIsMobile } from '@repo/hooks';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { PropsWithChildren, useRef } from 'react';

export function TiltCard({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const rotateX = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 300, damping: 30 });
  const scaleSpring = useSpring(scale, { stiffness: 300, damping: 30 });

  const handleMouseEnter = () => {
    if (isMobile) return;
    scale.set(1.035);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxRotate = 10;
    const newRotateX = (mouseY / (rect.height / 2)) * -maxRotate;
    const newRotateY = (mouseX / (rect.width / 2)) * maxRotate;

    x.set(newRotateY);
    y.set(newRotateX);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: scaleSpring,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
