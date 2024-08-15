import { useState } from "react";
import { createContext } from "react";

const GameContext = createContext({
  score: '',
  result: '',
  playerPick: '',
  housePick: '',
  checkForWin: (pick) => {},
});

export function GameContextProvider({children}) {
  const [playerScore, setPlayerScore] = useState(0);
  const [playerResult, setPlayerResult] = useState('');
  const [userPick, setUserPick] = useState('');
  const [compPick, setCompPick] = useState('');

  function getComputerPick() {
    let computerPick = Math.floor(Math.random() * 3);
    if (computerPick == 0) {
      setCompPick('rock');
      return "rock";
    } else if (computerPick == 1) {
      setCompPick('paper');
      return "paper";
    } else if (computerPick == 2) {
      setCompPick('scissors');
      return "scissors";
    }
  }

  function checkForWin(pick) {
    let cpuPick = getComputerPick()
    if (pick == "rock") {
      setUserPick("rock")
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
      setUserPick("paper")
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
      setUserPick("scissors")
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
    playerPick: userPick,
    housePick: compPick,
    checkForWin,
  };

  return <GameContext.Provider value={gameCtx}>{children}</GameContext.Provider>
}

export default GameContext;