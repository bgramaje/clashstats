import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export const getSecureId = () => {
  const array = new Uint32Array(1);
  if (typeof window !== 'undefined') {
    window.crypto.getRandomValues(array);
  }
  return array[0];
};
