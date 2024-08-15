import { useState, useContext } from 'react';
import { motion } from "framer-motion";
import GameContext from '../store/GameContext';
import Button from './Button';

import triangle from '../assets/bg-triangle.svg';

export default function GameBoard() {
  const [showResults, setShowResults] = useState(false);
  const [playerPick, setPlayerPick] = useState('');
  const gameCtx = useContext(GameContext);

  function handleClick(pick) {
    setPlayerPick(pick)
    setShowResults(true);
    gameCtx.checkForWin(pick);
  }

  return (
    <div className="relative mx-auto">
      {showResults &&
        <>
          <div className="flex items-center gap-8 lg:gap-24 my-12">
            <motion.div
              id="user-pick"
              key="user-pick"
              initial={{ x:-600 }}
              animate={{ x:0 }}
              transition={{ ease: "easeOut", duration: .7, type: 'spring' }}
            >
              <h3 className="hidden lg:block font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">YOU PICKED</h3>
              <Button type={playerPick}>
                {gameCtx.result == "WIN" &&
                  <motion.div
                    className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -top-[15px] -left-[15px] rounded-full shadow-[0_0_40px_10px_rgba(245,245,244,0.6)]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      ease: [0, 0.71, 0.8, 1.01],
                    }}
                  />
                }
              </Button>
              <h3 className="lg:hidden font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">YOU PICKED</h3>
            </motion.div>
            <motion.div
              id="lg-screen-results"
              key="lg-screen-results"
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0, 0.71, 0.8, 1.01],
              }}
            >
              <h2 className="font-barlow font-bold text-5xl text-stone-100">YOU {gameCtx.result}</h2>
              <button
                className="font-barlow font-bold py-3 px-12 mt-6 bg-stone-100 rounded-md"
                onClick={() => setShowResults(false)}
              >
                PLAY AGAIN
              </button>
            </motion.div>
            <motion.div
              id="house-pick"
              key="house-pick"
              initial={{ x:600 }}
              animate={{ x:0 }}
              transition={{ ease: "easeOut", duration: .7, type: 'spring' }}
            >
              <h3 className="hidden lg:block font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">THE HOUSE PICKED</h3>
              <Button type={gameCtx.housePick}>
                {gameCtx.result == "LOSE" &&
                    <motion.div
                      className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -top-[15px] -left-[15px] lg:-top-[25px] lg:-left-[25px] rounded-full shadow-[0_0_40px_10px_rgba(245,245,244,0.6)]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: [0, 0.71, 0.8, 1.01],
                      }}
                    />
                  }
              </Button>
              <h3 className="lg:hidden font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">THE HOUSE PICKED</h3>
            </motion.div>
          </div>
          <motion.div
            id="sm-screen-results"
            className="lg:hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0, 0.71, 0.8, 1.01],
            }}
          >
            <h2 className="font-barlow font-bold text-5xl text-stone-100">YOU {gameCtx.result}</h2>
            <button
              className="font-barlow font-bold py-3 px-12 mt-6 bg-stone-100 rounded-md"
              onClick={() => setShowResults(false)}
            >
              PLAY AGAIN
            </button>
          </motion.div>
        </>
      }
      {!showResults && (
        <motion.div
          className="w-[200px] lg:w-[300px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <img src={triangle} />
          <div
            onClick={() => handleClick('rock')}
            className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -bottom-[70px] lg:-bottom-[100px] inset-x-0 mx-auto"
          >
            <Button type="rock" />
          </div>
          <div
            onClick={() => handleClick('paper')}
            className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -top-[70px] -left-[70px] lg:-top-[100px] lg:-left-[100px]"
          >
            <Button type="paper" />
          </div>
          <div
            onClick={() => handleClick('scissors')}
            className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -top-[70px] -right-[70px] lg:-top-[100px] lg:-right-[100px]"
          >
            <Button type="scissors" />
          </div>
        </motion.div>
      )}
    </div>
  )
}