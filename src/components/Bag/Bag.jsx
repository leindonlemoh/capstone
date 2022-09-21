import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import './Bag.scss';

const Bag = () => {
    const { setToggleBag } = useStateContext();
  return (
    <div className='bag grid fixed'>
       <div className='backdrop'></div>

       <div className='bag__container flex'>
            <div className='bag__heading flex'>
              Your Bag
              <button type='button' className='close__button' onClick={() => setToggleBag(false)}>
                <i className='bi bi-x-lg'></i>
              </button>
            </div>

            <Link to='/shop'>
              <button type='button' className='return__btn grid'>
                Return to Shop
              </button>
            </Link>
       </div>
    </div>
  );
}

export default Bag;