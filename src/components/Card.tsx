"use client";

export default function Card({ text, color, changeDifficulty }: any) {
  return (
    <div className="card w-96 shadow-xl">
      <button
        className={`btn ${color}`}
        onClick={() => changeDifficulty(text, color)}>
        Play Now
      </button>
    </div>
  );
}
