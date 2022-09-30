import React from "react";
import "./Product.scss";
import { useStateContext } from "../../context/StateContext";

const Product = (props) => {

    const { incQty, decQty, qty, onAdd} = useStateContext();



    return (
        <div className='product'>
            <div className='product__container grid'>
                
                <div className='image__container grid'>
                    <img src={props.product_image} alt={props.product_name} />
                </div>

                <div className='info__container flex'>
                    <div>
                        <div className='name'>{props.product_name}</div>
                        <div className='price'>{props.product_price}</div>
                        <div className='category'>{props.product_category}</div>
                        <div className='description'>
                            {props.product_description}
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
                </div>
            </div>
        </div>
    );
};

export default Product;
