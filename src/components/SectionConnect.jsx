import React from 'react';
import connect from '../assets/svgs/connect.svg';

export const SectionConnect = () => {
  return (
    <div className="w-full flex flex-col space-y-8 items-center justify-center p-12 mb-8">
      <div className="w-5/6 relative pt-32 pl-12">
        <img
          alt="connect"
          src={connect}
          className="background-img bg-gradient-to-r from-red-500 to-red-400 rounded-lg shadow-lg"
        />
        <p className="text-3xl text-slate-50 mb-8">Want to talk to parents?</p>
        <button className="text-red-400 bg-slate-50 rounded-lg px-4 py-2 text-sm">
          Advertise with us
        </button>
      </div>
    </div>
  );
};
