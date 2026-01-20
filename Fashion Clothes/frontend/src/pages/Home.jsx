import React from 'react';
import Navbar from '../components/Home/Navbar';
import HeroSection from '../components/Home/HeroSection';
import Logos from '../components/Home/Logos';
import WomenCollection from '../components/Home/WomenCollection';
import MenCollection from '../components/Home/MenCollection';
import Accessoies from '../components/Home/Accessoies';
import FooterSection from '../components/Home/FooterSection';

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <Logos />
      <WomenCollection />
      <MenCollection/>
      <Accessoies />
      <FooterSection />
    </div>
  );
}

export default Home;
