import React from 'react';
import Hero from '../../components/Hero/Hero';
import GettingStarted from '../../components/GettingStarted/GettingStarted';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <GettingStarted />
    </div>
  );
};

export default Home;