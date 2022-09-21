import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [toggleBag, setToggleBag] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <Context.Provider
        value={{ 
          toggleBag, 
          setToggleBag,        
          toggleMenu, 
          setToggleMenu,        
         }}
    >
        {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

