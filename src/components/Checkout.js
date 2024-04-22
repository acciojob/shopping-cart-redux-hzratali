import React from "react";

import { useSelector } from "react-redux";

const Checkout = () => {
    const cartItems = useSelector(state => state.cart);
    console.log(cartItems);
    let total =  0;
    cartItems.forEach(element => {
        total+=(element.price*element.quantity);
    });
    console.log(total);
    return (
        <div>
            Total:{total.toFixed(2)};
        </div>
    )
}

export default Checkout