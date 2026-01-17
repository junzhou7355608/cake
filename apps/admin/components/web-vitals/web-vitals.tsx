'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '../../utils';

export function WebVitals() {
  useEffect(() => {
    reportWebVitals((metric) => {
      console.log(metric);
      // if (process.env.NODE_ENV === 'development') {
      // }
      // 生产环境可以发送到分析服务
      // 例如：analytics.track('web-vital', metric);
    });
  }, []);

  return null;
}
