"use client"
// ♥ ILY claire ♥

import { calcHowMuchWaterPerKg } from "@/lib/utils"
import { useId, useState } from "react"

const defaultStyles = "border border-pink-700/70 bg-pink-800/70 text-pink-50 px-3 py-1.5 rounded-lg "

export default function WaterCalculator() {
  const inputId = useId()
  const [resultWaterNeeded, setResultWaterNeeded] = useState<string | undefined>()

  function onClick() {
    const weightInKG = parseInt(
      (document
        .getElementById(inputId) as unknown as {value:string})
        .value)
    if(isNaN(weightInKG) || weightInKG <= 0) {

      alert("Invalid input")
      return
    }
    const resultNeededWater = calcHowMuchWaterPerKg(weightInKG)
    resultNeededWater
    setResultWaterNeeded(resultNeededWater)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className={defaultStyles + "p-4 flex flex-col gap-2 max-w-max text-center bg-pink-900/40"}>
        <div className="flex gap-2 items-center">
          <input id={inputId} type="number" placeholder="Enter your weight in Kg" className="border border-pink-700/70 bg-pink-800/20 text-pink-50 px-3 py-1.5 rounded-lg outline-0"/>
          <button onClick={onClick} className={defaultStyles + "hover:bg-pink-500/40 active:bg-pink-900/30 hover:text-pink-100"}>Calculate</button>
        </div>
        <div className={defaultStyles}>{resultWaterNeeded || "Not yet calculated."}</div>
        <div className={defaultStyles + "mt-10"}>ILY CLAIREEEE</div>
      </div>
    </div>
  )
}
