import { ADD_TO_CART, ADD_BACK_TO_PRODUCTS } from "./actionTypes";


export const addToCart = (product) => {
    return (
        {
          type: ADD_TO_CART,
          payload: product
        }
    )
}

export const addBackToProducts = (product) => {
    return(
      {
        type: ADD_BACK_TO_PRODUCTS,
        payload: product
      }
    )
}



