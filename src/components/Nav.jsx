import { Link } from 'react-router-dom';
import logo from '../assets/svgs/logo.svg';

export const Nav = () => {
  return (
    <div className="text-sm flex w-full justify-around py-6 mx-8">
      <img alt="logo" src={logo} />
      <div className="text-sm flex space-x-10 justify-between items-center">
        <Link to="/brands">Brand pages</Link>
        <p>Solutions</p>
        <p>Utilities</p>
        <p>Success Stories</p>
        <button className="bg-red-400 px-4 py-2 rounded-lg text-red-50">
          Login
        </button>
      </div>
    </div>
  );
};
