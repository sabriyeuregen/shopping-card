import React, { useState } from "react";

const BasketContext = React.createContext({
  name: "",
  addToUI: () => {}, //default değer asıl kullanılan providerdaki value kısmı
  
});



export const BasketContextWrapper = (props) => {
  const [items, setItems] = useState([]);

   const addToUI=(name,price)=>{
       setItems((prevState)=>[...prevState,{name,price}])
   }


  return (
    <BasketContext.Provider
      value={{
        items,
        addToUI
        
       
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
