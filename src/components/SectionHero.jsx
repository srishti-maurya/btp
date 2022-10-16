import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import hero from '../assets/svgs/hero.svg';
import heroMini from '../assets/svgs/heroMini.svg';

export const SectionHero = () => {
  return (
    <div className="flex w-screen items-center pb-12">
      <div className="flex flex-col space-y-4 w-1/2 px-28">
        <p className="font-black text-3xl tracking-wide">
          Parents do play favorites with Brands
        </p>
        <p className="text-sm tracking-wide">
          A new mom is born every 8 seconds. She needs your brand now more than
          ever.
        </p>
        <div className="flex">
          <button className="px-8 py-1 rounded-lg text-red-400 border border-red-400 mr-8">
            Register
          </button>
          <button className="bg-red-400 px-8 py-1 rounded-lg text-red-50 border border-red-400">
            Login
          </button>
        </div>
      </div>
      <div className="relative m-4">
        <img alt="hero" src={hero} />
        <div className="hero-img-mini">
          <img alt="heroMini" src={heroMini} />
        </div>
        <div className="hero-img-desc bg-green-50 py-2 px-4 rounded-lg shadow-md">
          <p className="flex items-center">
            <GoPrimitiveDot color="#f87171" />
            <span className="ml-2 tracking-wide text-slate-500">
              Come meet the Googling Parent!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
