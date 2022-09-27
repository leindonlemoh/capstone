import React from "react";
import "./Product.scss";
import { useStateContext } from "../../context/StateContext";

const Product = () => {
    const { incQty, decQty, qty, onAdd} = useStateContext();

    return (
        <div className='product'>
            <div className='product__container grid'>
                <div className='image__container grid'>
                    <img src='/sample1.jpg' alt='sample' />
                </div>

                <div className='info__container flex'>
                    <div>
                        <div className='name'>Product Name</div>
                        <div className='price'>Price</div>
                        <div className='category'>Category</div>
                        <div className='description'>
                            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Dolores!
                        </div>
                    </div>

                    <div
                        className='flex'
                        style={{ flexDirection: "column", gap: ".5rem" }}
                    >
                        <div className='qty__btn flex'>
                            <button
                                type='button'
                                className='minus__btn'
                                onClick={decQty}
                            >
                                <i className='bi bi-dash-lg'></i>
                            </button>
                            {qty}
                            <button
                                type='button'
                                className='plus__btn'
                                onClick={incQty}
                            >
                                <i className='bi bi-plus-lg'></i>
                            </button>
                        </div>

                        <button className='add__to__bag flex' type='button' onClick={() => onAdd}>
                            Add To Bag
                            <i className='bi bi-plus-lg'></i>
                        </button>
                    </div>

                    <div>
                        <ul className='other__info'>
                            <li className='info__item flex'>
                                Ingredients <i className='bi bi-plus-lg'></i>
                            </li>
                            <li className='info__item flex'>
                                Allergen <i className='bi bi-plus-lg'></i>
                            </li>
                            <li className='info__item flex'>
                                Origin <i className='bi bi-plus-lg'></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
