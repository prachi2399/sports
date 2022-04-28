import React from 'react';
import Header from './Header';
import HomeSlider from '../LandingPages/HomeSlider/HomeSlider';
import Footer from '../LandingPages/Footer/Footer';
import { Outlet } from 'react-router';

function DashBoard() {
  return (
    <>
      <Header/>
      <HomeSlider />
      <Outlet />
      <Footer />
    </>
  );
}

export default DashBoard;
