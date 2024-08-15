import rock from '../assets/icon-rock.svg';
import paper from '../assets/icon-paper.svg';
import scissors from '../assets/icon-scissors.svg';

export default function Button({ type, children }) {
  return (
    <>
      {type == 'rock' &&
        <div className="relative w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] rounded-full cursor-pointer bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(349,_71%,_52%)] to-[hsl(349,_70%,_56%)]">
          <div className="absolute w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] inset-0 m-auto rounded-full bg-stone-300 shadow-inside">
            <img src={rock} alt="rock" className="absolute inset-0 m-auto lg:w-[40%]" />
            {children}
          </div>
        </div>
      }
      {type == 'paper' &&
        <div className="relative w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] rounded-full cursor-pointer bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(230,_89%,_62%)] to-[hsl(230,_89%,_65%)]">
          <div className="absolute w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] inset-0 m-auto rounded-full bg-stone-300 shadow-inside">
            <img src={paper} alt="paper" className="absolute inset-0 m-auto lg:w-[40%]" />
            {children}
          </div>
        </div>
      }
      {type == 'scissors' &&
        <div className="relative w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] rounded-full cursor-pointer bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(39,_89%,_49%)] to-[hsl(40,_84%,_53%)]">
          <div className="absolute w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] inset-0 m-auto rounded-full bg-stone-300 shadow-inside">
            <img src={scissors} alt="scissors" className="absolute inset-0 m-auto lg:w-[40%]" />
            {children}
          </div>
        </div>
      }
    </>
  )
}