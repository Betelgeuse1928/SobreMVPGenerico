'use client';

import { useEffect, useState } from 'react';

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export interface CountdownState extends CountdownResult {
  /** false durante el render del servidor y hasta que monta en el cliente */
  ready: boolean;
}

const ZERO: CountdownResult = { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false };

const calculate = (target: string): CountdownResult => {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, isCompleted: false };
};

/**
 * Cuenta regresiva en tiempo real. Para evitar un desajuste de hidratación
 * (el server y el cliente calculan en instantes distintos), el primer render
 * devuelve ceros con `ready: false`; el valor real aparece al montar.
 */
export const useCountdown = (target: string): CountdownState => {
  const [value, setValue] = useState<CountdownState>({ ...ZERO, ready: false });

  useEffect(() => {
    setValue({ ...calculate(target), ready: true });
    const interval = setInterval(
      () => setValue({ ...calculate(target), ready: true }),
      1000,
    );
    return () => clearInterval(interval);
  }, [target]);

  return value;
};
