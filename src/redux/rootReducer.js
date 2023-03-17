import { combineReducers } from "redux";
import productReducer from '../redux/products/reducer'
import cartReducer from '../redux/carts/reducer1'

const rootReducer = combineReducers({
    products: productReducer,
    carts: cartReducer
})

export default rootReducer;