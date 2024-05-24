import Clock from "@/components/Clock";
import SudokuBoard from "@/components/SudokuBoard";
import Pill from "@/components/pill";
import { getRandomPuzzleByDifficulty } from "@/lib/db";
export default async function Play({ params }: { params: { diff: string } }) {
  const sodokudata = await getRandomPuzzleByDifficulty(params.diff);
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
            <SudokuBoard
              sudokudata={sodokudata.puzzle}
              sudokuSolution={sodokudata.solution}
            />
          </div>
          <div className="md:basis-1/4"> Leaderboard</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
