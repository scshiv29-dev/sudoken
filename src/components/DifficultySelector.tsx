import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { difficulties, Difficulty } from "@/lib/constants";
import Playnow from "./Playnow";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const DifficultySelector = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const clearDiff = ({ redirect }: { redirect: boolean }) => {
    setRedirecting(redirect);
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
        <Playnow clearDiff={clearDiff} difficultyColors={difficulty} />
      ) : null}
    </>
  );
};

export default DifficultySelector;
