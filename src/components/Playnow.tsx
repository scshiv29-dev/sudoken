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
    <AlertDialog open={!!diff} onOpenChange={(v) => clearDiff()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={color}>{diff}</AlertDialogTitle>
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
