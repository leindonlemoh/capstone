import React from 'react';
import { Bag } from '../';
import { Link, NavLink} from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import './Header.scss';

const Header = () => {
  const { toggleBag, setToggleBag } = useStateContext();
  return (
    <div className='header fixed'>
      <div className='header__container flex'>

        <div className='logo__container grid'>            
          <Link to='/'>
            <h1>Making Dough</h1> 
          </Link>                            
        </div>

        <nav>
            <ul className='nav__list flex'>
                <NavLink to='shop' className={({isActive}) => (isActive ? 'activeNav' : '')}>
                    <li className='nav__item'>Shop</li>
                </NavLink>
                <NavLink to='about' className={({isActive}) => (isActive ? 'activeNav' : '')}>
                    <li className='nav__item'>About</li>
                </NavLink>
                <NavLink to='account/login' className={({isActive}) => (isActive ? 'activeNav' : '')}>
                    <li className='nav__item'>Account</li>
                </NavLink>

                <button 
                  type='button'
                  className='bag__btn'
                  onClick={() => setToggleBag(true)}
                >
                  Bag &#40;<span className='bag__qty'>0</span>&#41;
                </button>
            </ul>
        </nav>

      </div>

      {toggleBag && <Bag />}
    </div>
  );
}

export default Header;