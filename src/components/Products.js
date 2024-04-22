import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../actions/productsActionCreator";
// import wishlistToCart from "../actions/wishlistActionsCreator";
// import { itemQuantityDecrease, itemQuantityIncrease, moveToWishlist, removeFromCart } from "../actions/cartActionsCreator";

const Products = () => {
  const products = useSelector(state => state.productList);
  const dispatch = useDispatch();
  
  return (
    <>
      {
      products.map((item) => <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.quantity}</p>
        <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
      </div>)
      }
    </>
  )
}

export default Products;