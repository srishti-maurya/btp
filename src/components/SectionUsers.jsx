import React from 'react';
import user from '../assets/svgs/user.svg';
import quote from '../assets/icons/quote.svg';
import dots from '../assets/icons/dots.svg';

export const SectionUsers = () => {
  return (
    <div className="w-full flex flex-col space-y-8 items-center justify-center p-12">
      <img alt="quote" src={quote} />
      <div className="flex items-center justify-center w-5/6">
        <div className="flex flex-col p-8 shadow-md rounded-lg m-4">
          <div className="flex items-center">
            <img alt="user" src={user} width={60} />
            <div className="ml-4">
              <p className="text-xl mb-2">Saxenna Oberoi</p>
              <p className="text-sm text-slate-500">
                Marketing Director, Kidzone
              </p>
            </div>
          </div>
          <p className="text-slate-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie et
            sollicitudin leo sit lectus. Ut amet ante a eu fusce fringilla
            varius arcu. Ut amet ante a eu fusce fringilla varius arcu.
          </p>
        </div>
        <div className="flex flex-col p-8 shadow-md rounded-lg m-4">
          <div className="flex items-center">
            <img alt="user" src={user} width={60} />
            <div className="ml-4">
              <p className="text-xl mb-2">Saxenna Oberoi</p>
              <p className="text-sm text-slate-500">
                Marketing Director, Kidzone
              </p>
            </div>
          </div>
          <p className="text-slate-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie et
            sollicitudin leo sit lectus. Ut amet ante a eu fusce fringilla
            varius arcu. Ut amet ante a eu fusce fringilla varius arcu.
          </p>
        </div>
      </div>
      <img alt="dots" src={dots} />
    </div>
  );
};
