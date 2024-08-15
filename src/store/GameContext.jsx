import { useState } from "react";
import { createContext } from "react";

const GameContext = createContext({
  score: '',
  result: '',
  housePick: '',
  playAgain: () => {},
  checkForWin: (pick) => {},
});

export function GameContextProvider({children}) {
  const [playerScore, setPlayerScore] = useState(0);
  const [playerResult, setPlayerResult] = useState('');
  const [compPick, setCompPick] = useState('');

  function getComputerPick() {
    let computerPick = Math.floor(Math.random() * 3);
    if (computerPick == 0) {
      console.log("CPU chooses rock");
      setCompPick('rock');
      return "rock";
    } else if (computerPick == 1) {
      console.log("CPU chooses paper");
      setCompPick('paper');
      return "paper";
    } else if (computerPick == 2) {
      console.log("CPU chooses scissors");
      setCompPick('scissors');
      return "scissors";
    } else {
      console.log("Something isn't right...")
    }
  }

  function playAgain() {
    setPlayerScore(20);
  }

  function checkForWin(pick) {
    let cpuPick = getComputerPick()
    if (pick == "rock") {
      if (cpuPick == "rock") {
        setPlayerScore(playerScore);
        setPlayerResult('TIED');
      } else if (cpuPick == "paper") {
        setPlayerScore(playerScore - 1)
        setPlayerResult('LOSE');
      } else if (cpuPick == "scissors") {
        setPlayerScore(playerScore + 1);
        setPlayerResult('WIN');
      }
    }
    else if (pick == "paper") {
      if (cpuPick == "rock") {
        setPlayerScore(playerScore + 1);
        setPlayerResult('WIN');
      } else if (cpuPick == "paper") {
        setPlayerScore(playerScore);
        setPlayerResult('TIED');
      } else if (cpuPick == "scissors") {
        setPlayerScore(playerScore - 1);
        setPlayerResult('LOSE');
      }
    }
    else if (pick == "scissors") {
      if (cpuPick == "rock") {
        setPlayerScore(playerScore - 1);
        setPlayerResult('LOSE');
      } else if (cpuPick == "paper") {
        setPlayerScore(playerScore + 1);
        setPlayerResult('WIN');
      } else if (cpuPick == "scissors") {
        setPlayerScore(playerScore);
        setPlayerResult('TIED');
      }
    }
  }

  const gameCtx = {
    score: playerScore,
    result: playerResult,
    housePick: compPick,
    playAgain,
    checkForWin,
  };

  return <GameContext.Provider value={gameCtx}>{children}</GameContext.Provider>
}

export default GameContext;