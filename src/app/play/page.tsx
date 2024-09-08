'use client';

import {useState} from "react"

import Card from "@/components/Card";
import Homepage  from "@/components/homepage";

export default function Play() {

  const [selectedDifficulty,setSelectedDifficulty]=useState<null|{diff:string,color:string}>(null)

  function changeDifficulty(diff:string,color:string){
    setSelectedDifficulty({diff,color})
  }
 
  return (
    <>
    <div className="flex flex-wrap  p-4">
      <Homepage/>
        <Card text={"Easy"} color={"btn-success"}  changeDifficulty={changeDifficulty}/>
        <Card text={"Medium"} color={"btn-warning"}  changeDifficulty={changeDifficulty}/>
        <Card text={"Hard"} color={"btn-error"}  changeDifficulty={changeDifficulty}/>

        <Card text={"Random"} color={"btn-primary"}  changeDifficulty={changeDifficulty}/>
   
    </div>
    {selectedDifficulty? <Playnow diff={selectedDifficulty.diff} color={selectedDifficulty.color}/> : null}
    </>
  );
}
