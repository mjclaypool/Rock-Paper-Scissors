import './index.css'
import { GameContextProvider } from './store/GameContext';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Rules from './components/Rules';

function App() {
  return (
    <GameContextProvider>
      <div className="flex flex-col w-screen h-screen items-center justify-between p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(214,_47%,_23%)] to-[hsl(237,_49%,_15%)]">
        <Header />
        <GameBoard />
        <Rules />
      </div>
    </GameContextProvider>
  )
}

export default App
