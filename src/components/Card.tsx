'use client';

import Modal from "./Modal";

export default function Card({ text ,color,changeDifficulty}: any) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{text}</h2>
        <div className="card-actions justify-end">
        <button className={`btn ${color}`} onClick={()=>changeDifficulty(text,color)}>
              Play Now
            </button>
        </div>
      </div>
    </div>
  );
}
