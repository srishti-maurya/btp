import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Brands = () => {
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    try {
      const brands = await axios.get(
        'https://brandNames.srishtimaurya2.repl.co/brands'
      );
      setBrands(brands.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="m-4">
      <Link to="/" className="text-red-400 uppercase">
        Back to Home
      </Link>
      <div className="flex flex-wrap">
        {brands.map((brand) => (
          <div className="bg-red-100 m-8 w-1/6 p-4 rounded-lg shadow-md">
            <p className="text-xl">{brand.name}</p>
            <p className="text-sm text-slate-600">{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
