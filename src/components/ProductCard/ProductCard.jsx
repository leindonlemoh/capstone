import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import './ProductCard.scss';

const ProductCard = () => {
    const { onAdd } = useStateContext();
  return (
        <div className='product__card'>
            <Link to='/product/id'>
                <img src='sample1.jpg' alt='sample' style={{width: '100%', opacity: '.94'}} />
            </Link>

            <div className='overlay flex absolute'>
                <button className='add__to__bag flex' type='button' onClick={() => onAdd}>
                    Add To Bag 
                    <i className='bi bi-plus-lg'></i>
                </button>
            </div>

            <div className='product__details flex'>
                <div className='flex' style={{width: '100%', justifyContent: 'space-between'}}>
                    <span className='name'>Product Name</span>
                    <div className='category'>Category</div>
                </div>
                <span className='price'>Product Price</span>
            </div>
        </div>
  );
}

export default ProductCard;