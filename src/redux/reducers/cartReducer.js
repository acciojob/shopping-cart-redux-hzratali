import { ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT } from "../actions/actionsType";

const initialState = []


const cartReducer = (state = initialState, action) => {

     switch(action.type){
        case ADD_TO_CART:
            return [...state,action.payload]

        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.payload)

        case CHECKOUT:
            return []
        
        default:
            return state
     }
}

export default cartReducer;