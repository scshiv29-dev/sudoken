"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Difficulty } from "@/lib/constants";
import { getRandomDifficulty } from "@/lib/utils";

import { useRouter } from "next/navigation";

type PlayNowProps = {
  difficultyColors: Difficulty;
  clearDiff: ({ redirect }: { redirect: boolean }) => void;
};
export default function Playnow({ difficultyColors, clearDiff }: PlayNowProps) {
  const { title: diff, textColor, buttonColor } = difficultyColors;

  const router = useRouter();
  const difficulty =
    diff !== "Random" ? diff.toLowerCase() : getRandomDifficulty();

  return (
    <AlertDialog open={!!diff} onOpenChange={(v) => null}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={textColor}>
            <span className="flex items-center">
              <difficultyColors.icon className="h-4 w-4 mr-2" />
              {diff}
            </span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Click `Play Now` below once you are ready. Time starts the moment
            you land on the game page .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => clearDiff({ redirect: false })}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              clearDiff({ redirect: true });
              router.push(`/play/${difficulty}`);
            }}
            className={buttonColor}>
            Play Now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
