import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Solution from './Solutions/Solution';
import Outcomes from './Outcomes/Outcomes';
import Proof from './Proof/Proof';
import Cta from './Cta/CTA';

export const Home = () => {
  return (
    <div className="home-container">
      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="solution"><Solution /></section>
      <section id="outcomes"><Outcomes /></section>
      <section id="proof"><Proof /></section>
      <section id="cta"><CTA /></section>
    </div>
  );
};

export default Home;
