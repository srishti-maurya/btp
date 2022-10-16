import React from 'react';
import logoBtp from '../assets/svgs/logoBtp.svg';
import section from '../assets/svgs/section.svg';
import sectionMini from '../assets/svgs/sectionMini.svg';

export const SectionSolution = () => {
  return (
    <div className="bg-slate-50 w-full flex flex-col space-y-8 items-center justify-center py-12">
      <img alt="logo-btp" src={logoBtp} width={120} />
      <p className="font-bold text-2xl tracking-wider">
        Your perfect
        <span className="border-b-4 border-b-red-400 ml-1 pr-2">solution!</span>
      </p>
      <p className="w-1/2 pb-24 text-center tracking-wide px-8">
        Our innovative blend of marketing and advertising solutions connect
        brands with parents in powerful ways, at key decision-making moments
        throughout the journey called life.
      </p>
      <div className="relative">
        <img alt="section" src={section} />
        <div className="section-img-mini">
          <img alt="sectionMini" src={sectionMini} />
        </div>
      </div>
    </div>
  );
};
