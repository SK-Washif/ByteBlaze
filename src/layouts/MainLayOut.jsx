import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import BookMarks from '../pages/BookMarks';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayOut = () => {
  return (
    <div>
      <div className='h-16'>
        <Navbar />
      </div>
        {/* Packet */}
        <div className='min-h-[calc(100vh-116px)]'>
        <Outlet />
        </div>

        <Footer />
      
    </div>
  );
};

export default MainLayOut;