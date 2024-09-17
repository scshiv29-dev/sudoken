// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  // Read data from JSON file
  const dataPath = path.join(process.cwd(), 'sudoku.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Prepare an array of puzzle data
  const puzzlesData = data.map((item: any) => ({
    id: item._id,
    bestTime: item.best_time ? parseInt(item.best_time, 10) || null : null,
    difficulty: item.difficulty,
    puzzle: item.puzzle,
    solution: item.solution,
  }));

  // Batch insert puzzles using createMany
  const batchSize = 1000; // Adjust the batch size as needed
  for (let i = 0; i < puzzlesData.length; i += batchSize) {
    const batch = puzzlesData.slice(i, i + batchSize);
    await prisma.puzzle.createMany({
      data: batch,
      skipDuplicates: true, // Optional: skips records that would violate unique constraints
    });
    console.log(`Inserted batch ${i / batchSize + 1}`);
  }

  console.log('All puzzles inserted successfully!');
}

main()
  .catch(async (e) => {
    console.error('Error seeding data:', e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
