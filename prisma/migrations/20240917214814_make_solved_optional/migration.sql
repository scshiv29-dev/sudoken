-- CreateTable
CREATE TABLE "Puzzle" (
    "id" TEXT NOT NULL,
    "bestTime" INTEGER,
    "difficulty" TEXT NOT NULL,
    "puzzle" JSONB NOT NULL,
    "solution" JSONB NOT NULL,

    CONSTRAINT "Puzzle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGame" (
    "id" TEXT NOT NULL,
    "puzzleId" TEXT NOT NULL,
    "solved" BOOLEAN DEFAULT false,
    "userBestTime" INTEGER,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserGame_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserGame" ADD CONSTRAINT "UserGame_puzzleId_fkey" FOREIGN KEY ("puzzleId") REFERENCES "Puzzle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
