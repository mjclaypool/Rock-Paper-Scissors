import { useState, useContext } from 'react';
import { motion } from "framer-motion";
import GameContext from '../store/GameContext';
import GameResults from './GameResults';
import Button from './Button';

import triangle from '../assets/bg-triangle.svg';

export default function GameBoard() {
  const [showResults, setShowResults] = useState(false);
  const gameCtx = useContext(GameContext);

  function setPlayAgain() {
    setShowResults(false);
  }

  function handleClick(pick) {
    setShowResults(true);
    gameCtx.checkForWin(pick);
  }

  return (
    <div className="relative mx-auto">
      {showResults ? <GameResults playAgain={setPlayAgain} /> :
        <motion.div
          className="w-[200px] lg:w-[300px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <img src={triangle} alt="Background triangluar shape" />
          <div
            onClick={() => handleClick('rock')}
            className="absolute w-[140px] h-[140px] -bottom-[70px] inset-x-0 mx-auto
              lg:w-[200px] lg:h-[200px] lg:-bottom-[100px]"
          >
            <Button type="rock" />
          </div>
          <div
            onClick={() => handleClick('paper')}
            className="absolute w-[140px] h-[140px] -top-[70px] -left-[70px]
              lg:w-[200px] lg:h-[200px] lg:-top-[100px] lg:-left-[100px]"
          >
            <Button type="paper" />
          </div>
          <div
            onClick={() => handleClick('scissors')}
            className="absolute w-[140px] h-[140px] -top-[70px] -right-[70px]
              lg:w-[200px] lg:h-[200px] lg:-top-[100px] lg:-right-[100px]"
          >
            <Button type="scissors" />
          </div>
        </motion.div>
      }
    </div>
  )
}