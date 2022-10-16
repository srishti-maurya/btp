import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Brands } from '../pages/Brands';
import { Home } from '../pages/Home';

export function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
