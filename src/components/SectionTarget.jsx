import React from 'react';
import circleLeft from '../assets/svgs/circleLeft.svg';
import sectionTarget from '../assets/svgs/sectionTarget.svg';

export const SectionTarget = () => {
  return (
    <div className="w-full flex flex-col space-y-8 items-center justify-center p-12 relative">
      <img alt="circleLeft" src={circleLeft} className="circle-left-img" />
      <div className="flex items-center justify-center">
        <img alt="sectionTarget" src={sectionTarget} width={500} />
        <div className="flex flex-col space-y-4 w-1/2 px-28">
          <p className="text-2xl">Precise Ad Targeting</p>
          <p>
            Innovative blend of life-stage marketing solutions to Reach and
            engage new, expectant, and experienced moms.
          </p>
          <ul className="list-disc">
            <li>Set clear objectives</li>
            <li>Define your audience</li>
            <li>Make impact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
