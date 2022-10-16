import React from 'react';
import laptop from '../assets/svgs/laptop.svg';
import circleRight from '../assets/svgs/circleRight.svg';

export const SectionShowcase = () => {
  return (
    <div className="w-full flex flex-col space-y-8 items-center justify-center p-12 relative">
      <img alt="circleRight" src={circleRight} className="circle-right-img" />
      <p className="font-bold text-3xl">Do more with Brand Labs</p>
      <p>Ready to start advertising?</p>
      <div className="flex items-center justify-center">
        <div className="flex flex-col space-y-4 w-1/2">
          <p className="text-2xl">Brand page Showcase</p>
          <p>
            Increase awareness of your business with a free brand page that you
            can make in minutes.
          </p>
          <p className="text-red-400">See Brand Pages</p>
        </div>
        <img alt="laptop" src={laptop} width={500} />
      </div>
    </div>
  );
};
