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

import { useRouter } from "next/navigation";

export default function Playnow({ color, diff, buttonColor, clearDiff }: any) {
  function getRandomDifficulty(): string {
    const difficulties = ["easy", "medium", "hard"];
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    return difficulties[randomIndex];
  }

  const router = useRouter();
  const difficulty =
    diff !== "Random" ? diff.toLowerCase() : getRandomDifficulty();

  return (
    <AlertDialog open={!!diff} onOpenChange={(v) => null}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={color}>{diff}</AlertDialogTitle>
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
