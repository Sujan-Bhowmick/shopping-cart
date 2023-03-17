import { ADDPRODUCT, DECREASE_QUANTITY, DECREMENT_PRODUCT, INCREMENT_PRODUCT } from "./actionTypes"

export const addProduct = (formData) => {
    return{
        type: ADDPRODUCT,
        payload: formData
        
    }
}
export const decreaseQuantity = (productId) => {
    return {
        type: DECREASE_QUANTITY,
        payload: productId
    }
}
export const incrementProduct = (productId) => {
    return {
        type: INCREMENT_PRODUCT,
        payload: productId
    }
}
export const decrementProduct = (productId) => {
    return {
        type: DECREMENT_PRODUCT,
        payload: productId
    }
}
