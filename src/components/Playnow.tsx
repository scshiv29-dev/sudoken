"use client";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Playnow({ color, diff, buttonColor }: any) {
  function getRandomDifficulty(): string {
    const difficulties = ["easy", "medium", "hard"];
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    return difficulties[randomIndex];
  }

  const router = useRouter();
  const difficulty =
    diff !== "Random" ? diff.toLowerCase() : getRandomDifficulty();
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={(v) => setOpen(v)}>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" className={`mt-4 ${buttonColor}`}>
          Start Game
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hello!</AlertDialogTitle>
          <AlertDialogDescription>
            Click `Play Now` below once you are ready. Time starts the moment
            you land on the game page .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => router.push(`/play/${difficulty}`)}
            className={buttonColor}>
            Play Now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
