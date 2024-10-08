import Clock from "@/components/Clock";
import { difficulties } from "@/lib/constants";
import SudokuBoardWrapper from "@/components/SudokuBoardWrapper";
import Pill from "@/components/pill";
import { getLeaderboardByPuzzle, getPuzzleById, getRandomPuzzleByDifficulty } from "@/lib/db";
import { capitalize } from "@/lib/utils";
import { auth } from "@/auth";
import Protected from "@/components/Protected";
interface SudokuData {
  id: string;
  puzzle: string[][];
  solution: string[][];
  difficulty: string;
  bestTime: string | null;
}

function isStringArrayArray(value: any): value is string[][] {
  return (
    Array.isArray(value) &&
    value.every(
      (row) =>
        Array.isArray(row) && row.every((cell) => typeof cell === "string")
    )
  );
}

export default async function Play({ params }: { params: { gameid: string } }) {
  let leaderboard;
  const session =await auth()
  let sodokudata: SudokuData | null = null;
  try {
    const data = await getPuzzleById(params.gameid);

    if (
      data &&
      isStringArrayArray(data.puzzle) &&
      isStringArrayArray(data.solution)
    ) {
      const lb=await getLeaderboardByPuzzle(data?.id,10)
      leaderboard=lb; 
      sodokudata = {
        id: data.id,
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
    const difficultyColors = difficulties.filter(
      ({ title }) => title === capitalize(sodokudata.difficulty)
    )[0];
    return (
      <div>

        <div className="flex justify-center items-center gap-x-10 p-10">
        </div>
        <div className="flex flex-col md:flex-row h-[calc(100vh-12rem)]">
          <div className="md:basis-1/4 hidden md:block" />
          <div className="md:basis-1/2">
            <SudokuBoardWrapper
              sudokudata={sodokudata.puzzle}
              sudokuSolution={sodokudata.solution}
              sudokuId={sodokudata.id}
              userId={session?.user?.id}
              difficulty={sodokudata.difficulty}
              
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
