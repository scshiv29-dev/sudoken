import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DifficultyTitle } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(val: string) {
  return val.slice(0, 1).toUpperCase() + val.slice(1);
}

export function getRandomDifficulty(): string {
  const difficulties = Object.values(DifficultyTitle);
  const randomIndex = Math.floor(Math.random() * difficulties.length);
  return difficulties[randomIndex].toLowerCase();
}
