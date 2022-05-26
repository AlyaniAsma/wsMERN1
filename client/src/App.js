import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import ProductList from "./Components/ProductList";
import Home from "./Components/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getallproduct } from "./ReduxJs/actions/productActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproduct());
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
