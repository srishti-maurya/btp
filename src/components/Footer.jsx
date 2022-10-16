import React from 'react';
import logoBtp from '../assets/svgs/logoBtp.svg';
import appStore from '../assets/icons/appStore.svg';
import googlePlay from '../assets/icons/googlePlay.svg';
import phone from '../assets/icons/phone.svg';
import mail from '../assets/icons/mail.svg';
import location from '../assets/icons/location.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';
import insta from '../assets/icons/insta.svg';

export const Footer = () => {
  return (
    <footer className="w-full flex space-x-4 p-12 bg-slate-50 text-slate-500 justify-evenly">
      <div className="flex flex-col space-y-4">
        <img alt="logoBtp" src={logoBtp} width={100} />
        <p className="text-sm pt-8">Download our app</p>
        <div className="flex space-x-4">
          <img alt="appStore" src={appStore} width={100} />
          <img alt="googlePlay" src={googlePlay} width={100} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-xl">Pages</p>
        <ul className="text-sm">
          <li className="pb-2"> Services </li>
          <li className="pb-2"> Resources </li>
          <li className="pb-2"> FAQs </li>
          <li className="pb-2"> Know More </li>
        </ul>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-xl">Contact</p>
        <ul className="text-sm">
          <li className="pb-2 flex items-center">
            <img alt="phone" src={phone} />
            <span className="pl-4">9897654326</span>
          </li>
          <li className="pb-2 flex items-center">
            <img alt="mail" src={mail} />
            <span className="pl-4">support@beingtheparent.com</span>
          </li>
          <li className="pb-2 flex items-center">
            <img alt="location" src={location} />
            <span className="pl-4">
              2972 Westheimer Rd. Santa Ana, Illinois 85486{' '}
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-xl">Our Media Channel</p>
        <div className="flex space-x-10">
          <img alt="facebook" src={facebook} />
          <img alt="twitter" src={twitter} />
          <img alt="linkedin" src={linkedin} />
          <img alt="insta" src={insta} />
        </div>
      </div>
    </footer>
  );
};
