import { Route } from "react-router-dom";
import Product from "./Pages/products";
import Welcome from "./Pages/welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product> </Product>
      </Route>
      
    </div>
  );
}

export default App;
