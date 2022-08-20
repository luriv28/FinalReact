import "./App.css";
import NavBarMenu from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "../src/Context/CartContext";
import Cart from "./components/Cart";
import Forms from './components/Forms'
function App() {
  return (
    <Provider>
      <BrowserRouter className="App">
        <NavBarMenu />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="WELCOME TO OUR WORLD" />}
          />
          <Route
            exact
            path="/categories/:category"
            element={<ItemListContainer greeting="WELCOME TO OUR WORLD" />}
          />
          <Route
            exact
            path="/item/:id"
            element={<ItemDetailContainer />}
          ></Route>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/form" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
