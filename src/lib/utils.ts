import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(val: string) {
  return val.slice(0, 1).toUpperCase() + val.slice(1);
}

export type Difficulty = {
  title: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  buttonColor: string;
};

export const difficulties: Difficulty[] = [
  {
    title: "Easy",
    icon: require("lucide-react").ZapIcon,
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-700 dark:text-green-300",
    buttonColor: "bg-green-500 hover:bg-green-600 text-white",
  },
  {
    title: "Medium",
    icon: require("lucide-react").BrainIcon,
    color: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-700 dark:text-yellow-300",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
  },
  {
    title: "Hard",
    icon: require("lucide-react").TrophyIcon,
    color: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-700 dark:text-red-300",
    buttonColor: "bg-red-500 hover:bg-red-600 text-white",
  },
  {
    title: "Random",
    icon: require("lucide-react").ShuffleIcon,
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-700 dark:text-purple-300",
    buttonColor: "bg-purple-500 hover:bg-purple-600 text-white",
  },
];
