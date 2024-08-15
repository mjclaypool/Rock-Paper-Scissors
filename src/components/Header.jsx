import { useContext } from "react"
import GameContext from "../store/GameContext"

export default function Header() {
  const gameCtx = useContext(GameContext);

  return (
    <div className="flex items-center justify-between w-[100%] max-w-screen-sm border-2 border-header-outline rounded-md p-4 lg:px-6">
      <div className="flex flex-col items-start">
        <h1 className="font-barlow font-bold text-2xl lg:text-4xl text-stone-100 leading-none lg:leading-[32px]">ROCK</h1>
        <h1 className="font-barlow font-bold text-2xl lg:text-4xl text-stone-100 leading-none lg:leading-[32px]">PAPER</h1>
        <h1 className="font-barlow font-bold text-2xl lg:text-4xl text-stone-100 leading-none lg:leading-[32px]">SCISSORS</h1>
      </div>
      <div className="flex flex-col justify-center px-6 lg:px-8 py-2 bg-stone-100 rounded-md">
        <h2 className="font-barlow font-semibold text-xs lg:text-sm text-score-text tracking-wider">SCORE</h2>
        <h3 className="font-barlow font-bold text-4xl lg:text-5xl text-dark-txt">{gameCtx.score}</h3>
      </div>
    </div>
  )
}