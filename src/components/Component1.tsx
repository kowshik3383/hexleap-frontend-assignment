"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

type PlayerCard = {
  image: string;
  playerName: string;
  totalEvents: number;
  sportType: string;
};

const Players: PlayerCard[] = [
  {
    image: "/player1.png",
    playerName: "Sacramento River Cat",
    sportType: "Baseball",
    totalEvents: 48
  },
  {
    image: "/player2.png",
    playerName: "Las Vegas Aviator",
    sportType: "Baseball",
    totalEvents: 28
  },
  {
    image: "/player3.png",
    playerName: "New Jersey Devils",
    sportType: "Ice Hockey",
    totalEvents: 15
  },
  {
    image: "/player1.png",
    playerName: "Las Vegas Aviator",
    sportType: "Baseball",
    totalEvents: 28
  },
];

const Component1 = () => {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    if (!theme)
      document.documentElement.classList.remove("dark");
    else
      document.documentElement.classList.add("dark");
  }, [theme]);

  const PlayerBox: React.FC<PlayerCard> = (props) => {
    return (
      <div className='p-3 bg-white dark:bg-neutral-700 shadow-lg shadow-slate-200 dark:shadow-slate-950 h-[33rem] w-full sm:w-72'>
        <div className="h-[23rem] w-full">
          <Image
            className='h-full w-full object-cover'
            src={props.image} alt={props.playerName} height={200} width={100} />
        </div>

        <p className="py-4 text-xl font-semibold">{props.playerName}</p>

        <div className="px-3 py-2.5 bg-neutral-100 dark:bg-neutral-600 grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <p className='text-slate-500 dark:text-slate-300 text-sm'>Total Events</p>
            <p className='font-semibold'>{props.totalEvents}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-slate-500 dark:text-slate-300 text-sm'>Sports</p>
            <p className='font-semibold'>{props.sportType}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='bg-neutral-100 dark:bg-neutral-800 p-4 md:p-10'>
      <div className="flex flex-col gap-10 mx-auto w-fit">
        <div className="flex justify-between items-center">
          <p className='underline-offset-8 text-2xl font-semibold' style={{ textDecoration: "underline 2px solid skyblue" }}>Sports</p>
          <div className="">
            <button
              onClick={() => setTheme(!theme)}
              className='py-2 px-5 border border-slate-300 text-sm bg-white text-black'>
              {theme ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center items-center">
          {Players.map((player, index) => (
            <PlayerBox key={index} {...player} />
          ))}
          
          <div className='p-3 bg-white dark:bg-neutral-700 shadow-lg shadow-slate-200 dark:shadow-slate-950 h-[33rem] w-full sm:w-72'>
            <div className="h-[14rem] w-full">
              <Image
                className='h-full w-full object-cover'
                src={"/box.png"} alt={"Box"} height={200} width={100} />
            </div>

            <div className="px-3 py-2.5 border h-[17.4rem] border-slate-300 dark:border-slate-500">
              <p>Advertisement Title</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam reiciendis possimus praesentium ipsum, dolor sit amet  excepturi nesciunt! Veritatis nihil dolorem quaerat libero laborum?</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-9">
          <button type="button" className='bg-sky-500 text-white font-semibold tracking-wide text-sm px-6 py-2 rounded'>See More</button>
        </div>
      </div>
    </div>
  );
};

export default Component1;
