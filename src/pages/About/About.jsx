import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <section className='about__image grid'>
        <img src='about2.jpg' alt='about' />
      </section>

      <section>
        <h4>Our Story</h4>

        <div className='about__grid grid'>
          <div>
            <p>It started by simply sharing handmade baked goods – with family, friends and neighbours just over the fence. Today we’re baking and delivering baked goods to our fellow humans.</p>
          </div>

          <div>
            <p>It started by simply sharing sourdough loaves – with family, friends and neighbours just over the fence. Today we’re baking and delivering sourdough and baked goods to our fellow northerners in Preston and Thornbury.</p>
            <p>We love working with high-quality ingredients from the earth. We love the craft. We love our community.</p>
            <p>We also don’t think premium-quality bakery products should cost the earth. That’s why we’re doing everything we can to minimise our environmental impact, from our packaging to our processes.</p>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;