import { Metric, onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

export function reportWebVitals(send: (metric: Metric) => void) {
  onCLS(send);
  onINP(send);
  onLCP(send);
  onFCP(send);
  onTTFB(send);
}
