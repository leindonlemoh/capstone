import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__grid grid'>

        <div className='flex' style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>

          <div className='logo__container grid'>            
            <Link to='/'>
              <h1>Making Dough</h1> 
            </Link>                            
          </div>


          <div className='flex' style={{flexDirection: 'column'}}>
            <span className='big__text'>Let's Keep in Touch</span>
            <span className='small__text'>Sign-up for 10% off your first online order</span>

            <div className='flex'>
              <input type="email" name="email" id="email" className='input' placeholder='Email' />
              <button type='button' className='submit__btn'><i className="bi bi-arrow-return-left"></i></button>
            </div>

          </div>

        </div>

        <div className='flex' style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <div className='long__text'>
            <p>It started by simply sharing handmade baked goods with family, friends and neighbours just over the fence. Today we are baking and delivering baked goods to our fellow humans out there.</p>
          </div>

          <div className='flex' style={{width: '100%', gap: '10rem'}}>
            <ul className='footer__list'>
              <Link to='faq'>
                <li>FAQ</li>
              </Link>
              <Link to='about'>
                <li>About Us</li>
              </Link>
              <Link to='faq'>
                <li>Deliveries</li>
              </Link>
              <Link to='workshop'>
                <li>Workshop</li>
              </Link>
            </ul>

            <ul className='footer__list'>
              <a href="https://instagram.com" rel="noopener noreferrer"><li>Instagram</li></a>
              <a href="https://facebook.com" rel="noopener noreferrer"><li>Facebook</li></a>
              <a href="https://twiiter.com" rel="noopener noreferrer"><li>Twitter</li></a>
            </ul>

            <ul className='footer__list'>
              <Link to='account'>
                <li>Account</li>
              </Link>
              <Link to='faq'>
                <li>Privacy</li>
              </Link>
              <Link to='faq'>
                <li>Terms</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;