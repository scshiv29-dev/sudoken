'use client';

import Modal from "./Modal";

export default function Card({ text ,color}: any) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{text}</h2>
        <div className="card-actions justify-end">
          <Modal color={color} diff={text}/>
          
        </div>
      </div>
    </div>
  );
}
