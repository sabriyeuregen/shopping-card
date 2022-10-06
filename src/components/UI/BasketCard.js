import React, { useContext } from "react";
import BasketContext from "../../store/basket-context";
const BasketCard = () => {
  const {items} = useContext(BasketContext);

 
  
 

  return (
    <div>
     
     {
      items.map((item)=>(
        <div>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
        
      ))
     }
     
      
    </div>
  );
};

export default BasketCard;
