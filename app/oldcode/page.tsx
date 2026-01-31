"use client"


import { strict } from "assert";
import { Span } from "next/dist/trace";
import { useRef, useState } from "react";


export default function Home() {
  const irgendwas = "2 cuties";
  const [counter, setCounter] = useState(0)
  const [unterschrift, setUnterschrift] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (): void => {
    const inputElement = inputRef.current;
    const value = inputElement?.value
    if(!value){
      alert("ALARMMM ALARRMM keine unterschift!!1! betüger!!!")
      return
    } 
    setUnterschrift(value);
  }

  return (
    <div className="flex flex-col gap-1 text-9xl " >
      <span>
        hier sind
      </span>
      <span>
        {irgendwas}
      </span>
      <button onClick={()=>{setCounter(counter+1)}} className="border-dashed border-pink-500 border-10" >
        Ja claire ist cute :3
      </button>
      <span>
        {counter} {"mal geprüft"}
      </span>
      <input type="text" ref={inputRef} />
      <button onClick={onSubmit}>
        Unterschreiben
      </button>
      {unterschrift && <span>unterschrieben</span> }
    </div>
  );
}
