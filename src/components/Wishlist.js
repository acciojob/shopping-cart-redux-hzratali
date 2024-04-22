import React from "react";
import { useDispatch, useSelector } from "react-redux";
import wishlistToCart from "../actions/wishlistActionsCreator";

const Wishlist = () => {
  const wishList = useSelector(state => state.wishList);
  const dispatch = useDispatch();
  
  return (
    <>
      {
      wishList.map((item) => <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.quantity}</p>
        <button onClick={() => dispatch(wishlistToCart(item))}>Add to Cart</button>
      </div>)
      }
    </>
  )
}

export default Wishlist;