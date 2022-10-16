import React from 'react';
import circleCenter from '../assets/svgs/circleCenter.svg';
import sectionRelations from '../assets/svgs/sectionRelations.svg';

export const SectionRelation = () => {
  return (
    <div className="w-full flex flex-col space-y-8 items-center justify-center p-12 relative">
      <img
        alt="circleCenter"
        src={circleCenter}
        className="circle-center-img"
      />
      <div className="flex items-center justify-center">
        <div className="flex flex-col space-y-4 w-1/2 px-12">
          <p className="text-2xl">Build relationship that lasts</p>
          <p>
            Build an active and engaged audience for your business. Build a
            lasting relationship with Parents for long term impacts
          </p>
        </div>
        <img alt="sectionRelations" src={sectionRelations} width={500} />
      </div>
    </div>
  );
};
