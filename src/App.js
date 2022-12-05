import Header from "./Components/Layout/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react';
import Home from "./Components/Pages/Home";
import Food from "./Components/Pages/Food";
import Desserts from "./Components/Pages/Desserts";
import Drinks from "./Components/Pages/Drinks";
import FoodProvider from "./Contexts/FoodContext";
import Footer from "./Components/Layout/Footer";
import Cart from "./Components/Pages/Cart";
import CartProvider from "./Contexts/CartContext";
import OrderedItems from "./Components/Pages/OrderedItems";
import toast, { Toaster } from 'react-hot-toast';
import CategoriesProvider, { CategoriesContext } from "./Contexts/CategoriesContext";

function App() {

  return (
    <div className="App">

      <Router>
        <CartProvider>
          <FoodProvider>
            <CategoriesProvider>
              <Header />
              <Toaster />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Food" element={<Food />}></Route>
                <Route path="/desserts" element={<Desserts />}></Route>
                <Route path="/drinks" element={<Drinks />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
                <Route path="/OrderedItems" element={<OrderedItems />}></Route>
              </Routes>
              <Footer />
            </CategoriesProvider>
          </FoodProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
