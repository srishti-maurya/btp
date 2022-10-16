import React from 'react';
import goals from '../assets/svgs/goals.svg';

export const SectionGoals = () => {
  return (
    <div className="w-full flex flex-col space-y-8 items-center justify-center py-12 bg-yellow-50">
      <p className="font-bold text-2xl tracking-wider">
        Take steps towards your goals
      </p>
      <p className="pb-12 text-center tracking-wide">
        Our secret sauce for your success
      </p>
      <div className="w-4/5">
        <img alt="goals" src={goals} />
      </div>
      <div className="w-4/5 flex justify-between">
        <p className="w-28 text-center text-sm">Come onboard</p>
        <p className="w-28 text-center text-sm"> List your brand page</p>
        <p className="w-28 text-center text-sm">Categorize your products</p>
        <p className="w-28 text-center text-sm">Set up & manage campaigns</p>
        <p className="w-28 text-center text-sm">Get discovered by Moms</p>
      </div>
    </div>
  );
};
