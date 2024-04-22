import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBackToProducts } from "../actions/productsActionCreator";
import { itemQuantityDecrease, itemQuantityIncrease, moveToWishlist, removeFromCart } from "../actions/cartActionsCreator";

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    function decreaseHandler(item){
        dispatch(itemQuantityDecrease(item));
        if(item.quantity==0){
        item.quantity = 1;
        dispatch(addBackToProducts(item));
        }
    }
   
    return (
        <div>
            {
                cartItems.map((item) => {
                    return (
                        
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.quantity}</p>
                            <button onClick={() => dispatch(itemQuantityIncrease(item))}>increase</button>
                            <button onClick={() => decreaseHandler(item)}>decrease</button>
                            <button onClick={() => dispatch(moveToWishlist(item))}>move</button>
                            <button onClick={() => dispatch(removeFromCart(item))}>remove</button>
                        </div>


                    );
                })}
        </div>
    );
}

export default Cart;