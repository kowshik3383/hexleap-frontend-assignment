import Image from 'next/image';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type CollectionDataType = {
  date: string;
  day: string;
  time: string;
  title: string;
  location: string;
  collectionName: string;
  image: string;
};

const CollectionData: CollectionDataType[] = [
  {
    title: "Las Vegas Aviators",
    date: "OCT 15",
    day: "SUN",
    time: "4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collectionName: "Take Flight Collection",
    image: "/component2-1.png"
  },
  {
    title: "Sacramento River Cats",
    date: "OCT 15",
    day: "SUN",
    time: "4:30 PM",
    location: "Sutter Health Park Sacramento, California",
    collectionName: "Orange Collection",
    image: "/component2-2.png"
  },
  {
    title: "Las Vegas Aviators",
    date: "OCT 15",
    day: "SUN",
    time: "4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collectionName: "Take Flight Collection",
    image: "/component2-3.png"
  },
];

export default function Component2() {

  const CollectionCard = (props: CollectionDataType) => {

    return (
      <div className='p-3 dark:bg-neutral-700 shadow-lg shadow-slate-200 dark:shadow-slate-950 h-[37rem] w-full sm:w-72 text-center'>
        <div className="h-[23rem] w-full shadow-lg shadow-slate-300 dark:shadow-none">
          <Image
            className='h-full w-full object-cover'
            src={props.image} alt={props.collectionName} height={200} width={100} />
        </div>

        <div className="border-2 border-dashed border-slate-300 mt-5 mb-3"></div>

        <div>
          <p className='font-semibold text-lg text-slate-950 dark:text-slate-100'>{props.title}</p>
          <div className="flex text-sm capitalize text-slate-600 dark:text-slate-300 my-2 gap-1.5 justify-center items-center">
            <p>{props.date} | </p>
            <p>{props.day} | </p>
            <p>{props.time}</p>
          </div>
        </div>
        <p className='text-sm px-5 text-slate-500 dark:text-slate-300'>{props.location}</p>

        <div className="flex justify-center items-center mt-2">
          <button className='py-2 justify-center items-center bg-black text-white font-semibold w-full'>{props.collectionName}</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-10 pb-40">
        <div className="text-center px-2 md:px-40 lg:px-60">
          <p className='font-bold text-4xl dark:text-white'>Collection Spotlight</p>
          <p className='mt-5 text-sm'>Discover extraordinary events with your collection spotlight to make tickets exclusive access to premium for an unforgettable experience. Grab yours today!</p>
        </div>
        <br />
        <br />
        <div className="px-5 relative flex justify-center">
          <p className="absolute top-[43%] left-2 lg:left-20 border p-2 text-blue-500 cursor-pointer border-blue-600 flex justify-center items-center">
            <FaChevronLeft />
          </p>
          <div className="flex flex-col sm:flex-row gap-10 overflow-x-auto">
            {CollectionData.map((a, i) => <CollectionCard key={i} {...a} />)}
          </div>
          <p id="arrows" className="absolute top-[43%] right-2 lg:right-20 border p-2 text-blue-500 cursor-pointer border-blue-600 flex justify-center items-center">
            <FaChevronRight />
          </p>
        </div>
      </div>
    </>
  )
}
