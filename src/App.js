import { Route } from "react-router-dom";
import MainHeader from "./Component/MainHeader";
import Product from "./Pages/products";
import Welcome from "./Pages/welcome";

function App() {
  
  return (
    <div>
    <MainHeader />
    <main>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product> </Product>
      </Route>
    </main>
    </div>
  );
}

export default App;
