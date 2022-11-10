import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";
import UpdateProduct from "./UpdateProduct";
export default function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "550px" }}>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<CreateProduct />}></Route>
                <Route
                  exact
                  path="/ProductList"
                  element={<ProductList />}
                ></Route>
                <Route
                  exact
                  path="/UpdateProduct"
                  element={<UpdateProduct />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
