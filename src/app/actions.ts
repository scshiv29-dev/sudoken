'use server';

import { getRandomPuzzleByDifficulty,getPuzzleById,createOrGetUserGame,updateUserGame,getUserGamesByUserId,getLeaderboard} from "@/lib/db";


export {getRandomPuzzleByDifficulty,getPuzzleById,createOrGetUserGame,updateUserGame,getLeaderboard,getUserGamesByUserId}