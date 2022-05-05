import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainHeader from "./Component/MainHeader";
import ProductDetail from "./Pages/ProductDetail";
import Product from "./Pages/products";
import Welcome from "./Pages/welcome";

function App() {
  
  return (
    <div>
    <MainHeader />
    <main>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product" exact>
          <Product> </Product>
        </Route>
        <Route path="/product/:productId">
          <ProductDetail> </ProductDetail>
        </Route>
      </Switch>
    </main>
    </div>
  );
}

export default App;
