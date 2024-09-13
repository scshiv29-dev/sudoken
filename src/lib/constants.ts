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

export enum DifficultyTitle {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
  Random = "Random",
}

export type Difficulty = {
  title: DifficultyTitle;
  icon: LucideIcon;
  color: string;
  textColor: string;
  buttonColor: string;
};

export const difficulties: Difficulty[] = [
  {
    title: DifficultyTitle.Easy,
    icon: require("lucide-react").ZapIcon,
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-700 dark:text-green-300",
    buttonColor: "bg-green-500 hover:bg-green-600 text-white",
  },
  {
    title: DifficultyTitle.Medium,
    icon: require("lucide-react").BrainIcon,
    color: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-700 dark:text-yellow-300",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
  },
  {
    title: DifficultyTitle.Hard,
    icon: require("lucide-react").TrophyIcon,
    color: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-700 dark:text-red-300",
    buttonColor: "bg-red-500 hover:bg-red-600 text-white",
  },
  {
    title: DifficultyTitle.Random,
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
      "Yes, Sudoken is free.",
  },
  {
    question: "Can I play offline?",
    answer:
      "Once you've signed up, you can play puzzles online only. We are working on an android app but its under development.",
  },
  {
    question: "How often are new puzzles added?",
    answer:
      "We have a database of 500k sudoku puzzles, you'll never run out of puzzles.",
  },
  {
    question: "Is there a leaderboard?",
    answer:
      "Yes, we have global leaderboard so you can compete with Sudoku enthusiasts worldwide ",
  },
];

export const whyChoose = [
  {
    icon: require("lucide-react").ZapIcon,
    title: "Adaptive Difficulty",
    description: "Puzzles that grow with your skills",
  },
  {
    icon: require("lucide-react").SmartphoneIcon,
    title: "Play Anywhere",
    description: "Available on all your devices",
  },
  {
    icon: require("lucide-react").BarChartIcon,
    title: "Track Progress",
    description: "Monitor your improvement over time",
  },
  {
    icon: require("lucide-react").ClockIcon,
    title: "Time Challenges",
    description: "Test your speed and accuracy",
  },
];
