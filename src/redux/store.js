import {createStore,combineReducers} from "redux";
import cartReducer from "./reducers/cartReducer";
import wishListReducer from "./reducers/wishListReducer"
import productsReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    product: productsReducer,
    cart: cartReducer,
    wishList: wishListReducer
})

const store = createStore(rootReducer);
export default store;