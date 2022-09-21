import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductCard } from '../../components';
import './Shop.scss';

const Shop = () => {
  return (
    <div className='shop'>

      <section className='shop__banner flex'>
        <span className='big__text'>Fresh from the oven.</span>
        <p className='small__text'>We only use the finest ingredients, and we favour organic, sustainable and local produce.</p>
        <p className='small__text'>The result is heartfelt goodness with quality baked in.</p>
      </section>

      <section className='shop__products'>
        <div className='category__bar flex'>
          <ul className='category__list flex'>
            <NavLink to='/bread' className={({isActive}) => (isActive ? 'activeCategory' : '')}>
              <li className='category__item'>Bread</li>
            </NavLink>
            <NavLink to='/all' className={({isActive}) => (isActive ? 'activeCategory' : 'activeCategory')}>
              <li className='category__item'>All</li>
            </NavLink>
            <NavLink to='/pastry' className={({isActive}) => (isActive ? 'activeCategory' : '')} active={true}>
              <li className='category__item'>Pastry</li>
            </NavLink>
            <NavLink to='/sandwich' className={({isActive}) => (isActive ? 'activeCategory' : '')}>
              <li className='category__item'>Sandwich</li>
            </NavLink>
          </ul>
        </div>

        <div className='products__container grid'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
       
    </div>
  );
}

export default Shop;