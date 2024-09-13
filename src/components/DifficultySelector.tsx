import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  TrophyIcon,
  BrainIcon,
  ZapIcon,
  ShuffleIcon,
  LucideIcon,
  Loader2,
} from "lucide-react";
import Playnow from "./Playnow";
import { Button } from "./ui/button";

type Difficulty = {
  title: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  buttonColor: string;
};
const difficulties: Difficulty[] = [
  {
    title: "Easy",
    icon: ZapIcon,
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-700 dark:text-green-300",
    buttonColor: "bg-green-500 hover:bg-green-600 text-white",
  },
  {
    title: "Medium",
    icon: BrainIcon,
    color: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-700 dark:text-yellow-300",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
  },
  {
    title: "Hard",
    icon: TrophyIcon,
    color: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-700 dark:text-red-300",
    buttonColor: "bg-red-500 hover:bg-red-600 text-white",
  },
  {
    title: "Random",
    icon: ShuffleIcon,
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-700 dark:text-purple-300",
    buttonColor: "bg-purple-500 hover:bg-purple-600 text-white",
  },
];

const DifficultySelector = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const clearDiff = () => {
    setRedirecting(true);
    setDifficulty(null);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {difficulties.map((level) => (
          <Card
            key={level.title}
            className={`${level.color} border-none shadow-lg hover:shadow-xl transition-shadow`}>
            <CardContent className="p-6 text-center">
              <level.icon
                className={`mx-auto h-12 w-12 ${level.textColor} mb-4`}
              />
              <h3 className={`text-xl font-semibold mb-2 ${level.textColor}`}>
                {level.title}
              </h3>
              <Button
                variant="secondary"
                disabled={redirecting}
                onClick={() => setDifficulty(level)}
                className={`mt-4 ${level.buttonColor}`}>
                {redirecting ? (
                  <>
                    <Loader2 className="h-2 w-4 mr-2 animate-spin" />
                    Staring Game...
                  </>
                ) : (
                  "Start Game"
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {difficulty ? (
        <Playnow
          clearDiff={clearDiff}
          color={difficulty.textColor}
          diff={difficulty.title}
          buttonColor={difficulty.buttonColor}
        />
      ) : null}
    </>
  );
};

export default DifficultySelector;
