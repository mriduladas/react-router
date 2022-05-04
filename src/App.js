import { Route } from "react-router-dom";
import Product from "./Pages/products";
import Welcome from "./Pages/welcome";

function App() {

  const paths = ["/welcome1","/welcome"]
  return (
    <div>
      {
        paths.map((path) => 

        <Route path={path} key={path}>
          <Welcome path={path} />
        </Route>)
        
      }

      <Route path="/product">
        <Product> </Product>
      </Route>
      
    </div>
  );
}

export default App;
