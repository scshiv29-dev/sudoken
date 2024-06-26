"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Playnow({ color, diff }: any) {
  function getRandomDifficulty(): string {
    const difficulties = ["easy", "medium", "hard"];
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    return difficulties[randomIndex];
}
  const difficulty=diff!=='Random' ? diff.toLowerCase() : getRandomDifficulty()
    return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="border rounded-md  p-6 animate-in zoom-in-50   duration-300  bg-background">
         <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Click `Play Now` below once you are ready. Time starts the moment you land on the game page .
          </p>
          <div className="modal-action">
            <Link className={`btn ${color}`} href={`/play/${difficulty}`}>
              Play Now
            </Link>
            </div>
      </div>
    </div>
  );
}
