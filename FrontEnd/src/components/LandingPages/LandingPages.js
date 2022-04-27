import React from 'react';
import Header from './Header/Header';
import HomeSlider from './HomeSlider/HomeSlider';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';

function LandingPages() {
  return (
    <>
      <Header />
      <HomeSlider />
      <Outlet />
      <Footer />
    </>
  );
}

export default LandingPages;
