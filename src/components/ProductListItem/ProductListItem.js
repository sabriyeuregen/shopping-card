import style from "./ProductListItem.module.css";
import { useContext } from "react";
import BasketContext from "../../store/basket-context";
const ProductListItem = (props) => {

   const ctx=useContext(BasketContext)


  return (
    <div onClick={()=>ctx.addToUI(props.name,props.price)} className={style.productlistitem}>
      <div className={style.name}>{props.name}</div>
      <div className={style.price}>{props.price}</div>
      <div className={style.quantity}>{props.quantity}</div>
      <div className={style.total}>{props.total}</div>
      <div className={style.discountPercentage}>{props.discountPercentage}</div>
      <div className={style.discountedPrice}>{props.discountedPrice}</div>
      <div className={style.button}>{props.addToUI}</div>
    </div>
  );
};

export default ProductListItem;
