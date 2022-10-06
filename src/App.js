import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import BasketCard from "./components/UI/BasketCard";
import{ BasketContextWrapper } from "./store/basket-context";
const App = () => {
  return <div className="App">
    <BasketContextWrapper >
 <ProductList></ProductList>
 <BasketCard></BasketCard>
 </BasketContextWrapper>
  </div>;
};

export default App;
