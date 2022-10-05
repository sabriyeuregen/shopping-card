import style from "./ProductList.module.css";
import DATA from "../../data.json";
import ProductListItem from "../ProductListItem/ProductListItem";
import { useBasket } from "../../store/BasketContext";

const ProductList = () => {

  const {addToUI}=useBasket()

  const productList = DATA.map((product) => (
    <ProductListItem
      key={product.id}
      title={product.title}
      price={product.price}
      quantity={product.quantity}
      total={product.total}
      discountPercentage={product.discountPercentage}
      discountedPrice={product.discountedPrice}
      addToUI={<button onClick={()=>addToUI()}>ADD TO UI</button>}
    />
  ));

  return <div className={style.productlist}>
    {productList}
  </div>;
};

export default ProductList;
