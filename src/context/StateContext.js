import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [toggleBag, setToggleBag] = useState(false);
  const [accordionIndex, setAccordionIndex] = useState(null);

  const toggleAccordion = (i) => {
    if (accordionIndex === i) {
        return setAccordionIndex(null)
    }

    setAccordionIndex(i)
  };


  return (
    <Context.Provider
        value={{ 
          toggleBag, 
          setToggleBag, 
          accordionIndex, 
          setAccordionIndex,
          toggleAccordion  
         }}
    >
        {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

