import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrophyIcon, BrainIcon, ZapIcon, ShuffleIcon } from "lucide-react";
const DifficultySelector = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {[
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
      ].map((level) => (
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DifficultySelector;
