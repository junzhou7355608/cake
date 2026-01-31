'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTimer } from 'react-timer-hook';

export function usePersistTimer(
  durationMs: number,
  key: string,
  onExpire?: () => void,
) {
  const [saved, setSaved] = useState<number>(0);

  useEffect(() => {
    const v = Number(window.localStorage.getItem(key));
    if (v) setSaved(v);
  }, [key]);

  const expiryTimestamp = useMemo(() => {
    if (!saved) {
      return new Date(Date.now() + durationMs);
    }
    return new Date(saved);
  }, [saved, durationMs]);

  const timer = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      window.localStorage.removeItem(key);
      onExpire?.();
    },
  });

  useEffect(() => {
    if (!saved) return;
    timer.restart(new Date(saved), true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saved]);

  const onStart = useCallback(() => {
    const end = Date.now() + durationMs;
    window.localStorage.setItem(key, String(end));
    timer.restart(new Date(end), true);
  }, [durationMs, key, timer]);

  const onReset = useCallback(() => {
    window.localStorage.removeItem(key);
    timer.pause();
  }, [key, timer]);

  return {
    ...timer,
    onStart,
    onReset,
  };
}
