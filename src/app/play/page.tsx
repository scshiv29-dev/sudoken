"use client";
import DifficultySelector from "@/components/DifficultySelector";

export default function Play() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-7rem)] flex flex-col justify-center">
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
          Choose Your Challenge
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sudoken offers Sudoku puzzles for all skill levels. Select your
          difficulty and start solving!
        </p>
      </section>
      <div className="">
        <DifficultySelector />
      </div>
    </div>
  );
}
