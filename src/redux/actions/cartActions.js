import { ADD_TO_CART,REMOVE_FROM_CART, CHECKOUT } from "./actionsType.js";


export const add_to_cart = (product) => {
      
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export const remove_from_cart = (product_id) => {
      
    return{
        type: REMOVE_FROM_CART,
        payload: product_id
    }
}

export const checkout = () => {
      
    return{
        type: CHECKOUT
    }
}
