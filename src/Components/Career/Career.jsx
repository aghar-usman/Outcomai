import React from 'react'
import Hero from './Hero/Hero';
import Values from './Values/Values';
import Positions from './Position/Position';
import CTA from './CTA/CTA';

export const Careers = () => {
  return (
    <div className="careers-page">
      <section id="hero"><Hero /></section>
      <section id="core-values"><Values /></section>
      <section id="open-positions"><Positions /></section> 
      <section id="cta"><CTA /></section> 
    </div>
  );
};

export default Careers;