import {  DECREMENT_CART_QUANTITY, DELETE_PRODUCT, INCREASE_QUANTITY, INCREMENT_CART_QUANTITY } from "./actionType";

export const increaseQuantity = (product) => {
    return {
        type: INCREASE_QUANTITY,
        payload: product
    }
}
export const incrementCartQuantity = (productId) => {
    return {
        type: INCREMENT_CART_QUANTITY,
        payload: productId
    }
}
export const decrementCartQuantity = (productId) => {
    return {
        type: DECREMENT_CART_QUANTITY,
        payload: productId
    }
}
export const deleteProduct = (productId) => {
    return {
        type: DELETE_PRODUCT,
        payload: productId
    }
}
