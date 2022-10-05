import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import BasketCard from "./components/UI/BasketCard";
const App = () => {
  return <div className="App">
 <ProductList></ProductList>
 <BasketCard></BasketCard>
 
  </div>;
};

export default App;
