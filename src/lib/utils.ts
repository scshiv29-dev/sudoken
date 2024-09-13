import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(val: string) {
  return val.slice(0, 1).toUpperCase() + val.slice(1);
}
