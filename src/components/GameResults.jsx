import { useContext } from 'react';
import { motion } from "framer-motion";
import GameContext from '../store/GameContext';
import Button from './Button';
import WinnerRing from './WinnerRing';

export default function GameResults({ playAgain }){
  const gameCtx = useContext(GameContext);

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-24 my-12">
        <motion.div
          id="user-pick"
          className="flex flex-col-reverse lg:flex-col"
          initial={{ x:-600 }}
          animate={{ x:0 }}
          transition={{ ease: "easeOut", duration: .7, type: 'spring' }}
        >
          <h3 className="font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">YOU PICKED</h3>
          <Button type={gameCtx.playerPick}>
            {gameCtx.result == "WIN" && <WinnerRing />}
          </Button>
        </motion.div>
        <motion.div
          id="lg-screen-results"
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-barlow font-bold text-5xl text-stone-100">YOU {gameCtx.result}</h2>
          <button
            className="font-barlow font-bold py-3 px-12 mt-6 bg-stone-100 rounded-md hover:text-score-text"
            onClick={playAgain}
          >
            PLAY AGAIN
          </button>
        </motion.div>
        <motion.div
          id="house-pick"
          className="flex flex-col-reverse lg:flex-col"
          initial={{ x:600 }}
          animate={{ x:0 }}
          transition={{ ease: "easeOut", duration: .7, type: 'spring' }}
        >
          <h3 className="font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">THE HOUSE PICKED</h3>
          <Button type={gameCtx.housePick}>
            {gameCtx.result == "LOSE" && <WinnerRing />}
          </Button>
        </motion.div>
      </div>
      <motion.div
        id="sm-screen-results"
        className="lg:hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-barlow font-bold text-5xl text-stone-100">YOU {gameCtx.result}</h2>
        <button
          className="font-barlow font-bold py-3 px-12 mt-6 bg-stone-100 rounded-md"
          onClick={playAgain}
        >
          PLAY AGAIN
        </button>
      </motion.div>
    </>
  )
}