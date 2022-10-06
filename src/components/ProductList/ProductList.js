import style from "./ProductList.module.css";
import DATA from "../../data.json";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = () => {



  const productList = DATA.map((product) => (
    <ProductListItem
      id={product.id}
      key={product.id}
      name={product.name}
      price={product.price}
      quantity={product.quantity}
      total={product.total}
      discountPercentage={product.discountPercentage}
      discountedPrice={product.discountedPrice}
      
    />
  ));

  return <div className={style.productlist}>
    {productList}
  </div>;
};

export default ProductList;
