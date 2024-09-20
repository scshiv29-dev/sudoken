'use server';

import { getRandomPuzzleByDifficulty,getPuzzleById,createOrGetUserGame,updateUserGame,getUserGamesByUserId} from "@/lib/db";
import { getLeaderboard } from "@/lib/leaderboard";

export {getRandomPuzzleByDifficulty,getPuzzleById,createOrGetUserGame,updateUserGame,getLeaderboard,getUserGamesByUserId}