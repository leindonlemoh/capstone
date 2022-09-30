import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
    const { onAdd } = useStateContext();
  return (
        <div className='product__card'>
            <Link to={`/shop/${product.product_id}`}>
                <img src={product.product_image} alt={product.product_name} style={{width: '100%', opacity: '.94'}} />
            </Link>

            <div className='overlay flex absolute'>
                <button className='add__to__bag flex' type='button' onClick={() => onAdd}>
                    Add To Bag 
                    <i className='bi bi-plus-lg'></i>
                </button>
            </div>

            <div className='product__details flex'>
                <div className='flex' style={{width: '100%', justifyContent: 'space-between'}}>
                    <span className='name'>{product.product_name}</span>
                    <div className='category'>{product.product_category}</div>
                </div>
                <span className='price'>{product.product_price}</span>
            </div>
        </div>
  );
}

export default ProductCard;