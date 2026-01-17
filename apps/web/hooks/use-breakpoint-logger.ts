'use client';

import { useEffect } from 'react';

export function useBreakpointLogger() {
  useEffect(() => {
    const getCurrentBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) return '2xl';
      if (width >= 1280) return 'xl';
      if (width >= 1024) return 'lg';
      if (width >= 768) return 'md';
      if (width >= 640) return 'sm';
      if (width >= 480) return 'xs';
      return 'base';
    };

    const logBreakpoint = () => {
      const breakpoint = getCurrentBreakpoint();
      console.log(`当前断点: ${breakpoint} (宽度: ${window.innerWidth}px)`);
    };

    // 初始打印
    logBreakpoint();

    // 监听窗口大小变化
    window.addEventListener('resize', logBreakpoint);

    return () => {
      window.removeEventListener('resize', logBreakpoint);
    };
  }, []);
}
