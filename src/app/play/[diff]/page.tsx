import Clock from "@/components/Clock";
import SudokuBoardWrapper from "@/components/SudokuBoardWrapper";
import Pill from "@/components/pill";
import { getRandomPuzzleByDifficulty } from "@/lib/db";

interface SudokuData {
  puzzle: string[][];
  solution: string[][];
  difficulty: string;
  bestTime: string | null;
}

function isStringArrayArray(value: any): value is string[][] {
  return (
    Array.isArray(value) &&
    value.every(
      (row) => Array.isArray(row) && row.every((cell) => typeof cell === "string")
    )
  );
}

export default async function Play({ params }: { params: { diff: string } }) {
  let sodokudata: SudokuData | null = null;

  try {
    const data = await getRandomPuzzleByDifficulty(params.diff);

    if (
      data &&
      isStringArrayArray(data.puzzle) &&
      isStringArrayArray(data.solution)
    ) {
      sodokudata = {
        puzzle: data.puzzle,
        solution: data.solution,
        difficulty: data.difficulty,
        bestTime: data.bestTime ? String(data.bestTime) : null,
      };
    }
  } catch (error) {
    console.error("Failed to fetch Sudoku puzzle:", error);
  }

  if (sodokudata) {
    return (
      <div>
        <div className="flex justify-center items-center gap-x-10 p-10">
          <Clock />
          <Pill data={sodokudata.difficulty} />
          <Pill data={sodokudata.bestTime} />
        </div>
        <div className="flex flex-col md:flex-row h-[calc(100vh-12rem)]">
          <div className="md:basis-1/4 hidden md:block" />
          <div className="md:basis-1/2">
            <SudokuBoardWrapper
              sudokudata={sodokudata.puzzle}
              sudokuSolution={sodokudata.solution}
            />
          </div>
          <div className="md:basis-1/4"> Leaderboard</div>
        </div>
      </div>
    );
  } else {
    return <div>Error loading Sudoku puzzle. Please try again later.</div>;
  }
}
