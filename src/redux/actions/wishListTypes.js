import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionTypes";

export const add_to_wishlist = (product) => {

    return{
        type: ADD_TO_WISHLIST,
        payload: product
    }
}


export const remove_from_wishlist = (product_id) => {

    return{
        type: REMOVE_FROM_WISHLIST,
        payload: product_id
    }
}