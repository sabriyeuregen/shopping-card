import style from "./ProductList.module.css";
import Button from "../Button/Button";
const ProductListItem = (props) => {
  return (
    <div className={style.productlistitem}>
      <div className={style.title}>{props.title}</div>
      <div className={style.price}>{props.price}</div>
      <div className={style.quantity}>{props.quantity}</div>
      <div className={style.total}>{props.total}</div>
      <div className={style.discountPercentage}>{props.discountPercentage}</div>
      <div className={style.discountedPrice}>{props.discountedPrice}</div>
      <div className={style.button}>{props.addToUI} </div>
    </div>
  );
};

export default ProductListItem;
