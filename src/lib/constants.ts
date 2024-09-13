import { LucideIcon } from "lucide-react";

export enum ModalState {
  Incomplete = "incomplete",
  Success = "success",
  TryAgain = "tryAgain",
  Incorrect = "incorrect",
}

export interface ModalData {
  state: ModalState;
  color: string;
  title: string;
  desc: string;
}

export const modalArray: ModalData[] = [
  {
    state: ModalState.Incomplete,
    color: "text-error",
    title: "Complete the puzzle first",
    desc: "Sorry but the puzzle looks incomplete. Please fill all the squares to evaluate.",
  },
  {
    state: ModalState.Success,
    color: "text-success",
    title: "Congrats You Won",
    desc: "Congrats! You have completed the Sudoku. Your time has been added to the leaderboard of this quiz.",
  },
  {
    state: ModalState.TryAgain,
    color: "text-warning",
    title: "Oops Try again!",
    desc: "Seems like this is not the optimal solution for this puzzle. Try again 😊",
  },
  {
    state: ModalState.Incorrect,
    color: "text-error",
    title: "Incorrect Solution",
    desc: "Some cells are incorrect. Please correct them to complete the puzzle.",
  },
];

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

export const testimonials = [
  {
    name: "Alex",
    comment:
      "Sudoken has dramatically improved my Sudoku skills. The adaptive difficulty is a game-changer!",
  },
  {
    name: "Sam",
    comment:
      "I love how I can play on my phone or tablet. It's perfect for my daily commute.",
  },
  {
    name: "Jordan",
    comment:
      "The UI is so clean and intuitive. It makes solving Sudoku puzzles a joy.",
  },
];

export const faqs = [
  {
    question: "Is Sudoken free to play?",
    answer:
      "Yes, Sudoken offers a free version with limited puzzles. We also have a premium version with additional features and unlimited puzzles.",
  },
  {
    question: "Can I play offline?",
    answer:
      "Once you've downloaded the app, you can play puzzles offline. Your progress will sync when you're back online.",
  },
  {
    question: "How often are new puzzles added?",
    answer:
      "We add new puzzles daily to keep the challenge fresh and exciting for our users.",
  },
  {
    question: "Is there a leaderboard?",
    answer:
      "Yes, we have global and friend leaderboards so you can compete with Sudoku enthusiasts worldwide or just with your friends.",
  },
];
