import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [toggleBag, setToggleBag] = useState(false);
  const [accordionIndex, setAccordionIndex] = useState(null);
  const [qty, setQty] = useState(1);
  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalQuantities, setTotalQuantities] = useState(null);

  const toggleAccordion = (i) => {
    if (accordionIndex === i) {
        return setAccordionIndex(null)
    }

    setAccordionIndex(i)
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      
      return prevQty - 1
    });
  }

  const onAdd = (product, quantity) => {
    const checkProductInCart = bagItems.find((item) => item.id === product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedBagItems = bagItems.map((bagProduct) => {
        if (bagProduct.id === product.id) return {
          ...bagProduct, 
          quantity: bagProduct.quantity + quantity
        }
      })

      setBagItems(updatedBagItems);
    } else {
      product.quantity = quantity;

      setBagItems([...bagItems, {...product}]);
    }
  }



  return (
    <Context.Provider
        value={{ 
          toggleBag, 
          setToggleBag, 
          accordionIndex, 
          setAccordionIndex,
          toggleAccordion,
          qty,
          setQty,
          incQty,
          decQty,
          onAdd,
          bagItems,
          setBagItems,
          totalPrice,
          setTotalPrice,
          totalQuantities,
          setTotalQuantities
         }}
    >
        {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

