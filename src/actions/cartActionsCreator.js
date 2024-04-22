import { ITEM_QUANTITY_INCREASE, ITEM_QUANTITY_DECREASE, REMOVE_FROM_CART, MOVE_TO_WISHLIST } from "./actionTypes";

export const itemQuantityIncrease = (cartItem) => {
    return ({
        type: ITEM_QUANTITY_INCREASE,
        payload: cartItem
    })
} 

export const itemQuantityDecrease = (cartItem) => {
    return (
        {
            type: ITEM_QUANTITY_DECREASE,
            payload: cartItem
        }
    )
} 

export const moveToWishlist = (cartItem) => {
    return (
        {
            type: MOVE_TO_WISHLIST,
            payload: cartItem
        }
    )
}

export const removeFromCart = (cartItem) => {
    return (
        {
            type: REMOVE_FROM_CART,
            payload: cartItem
        }
    )
}

