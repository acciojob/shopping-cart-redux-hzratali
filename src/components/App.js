
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import Products from "./Products";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Checkout from "./Checkout";

const App = () => {
  return (
    <Provider store ={store}>
        <Products />
        <h1>CART</h1>
        <Cart/>
        <h1>WISHLIST</h1>
        <Wishlist/>
        <h1>CHECKOUT</h1>
        <Checkout />
    </Provider>
  )
}

export default App
