import { WISHLIST_TO_CART } from "./actionTypes";


const wishlistToCart = (product) => {
    return (
        {
            type: WISHLIST_TO_CART,
            payload: product
        }
    )
}

export default wishlistToCart;