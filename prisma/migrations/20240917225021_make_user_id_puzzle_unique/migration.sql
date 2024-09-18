/*
  Warnings:

  - A unique constraint covering the columns `[userId,puzzleId]` on the table `UserGame` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserGame_userId_puzzleId_key" ON "UserGame"("userId", "puzzleId");
