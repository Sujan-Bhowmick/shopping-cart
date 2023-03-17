
import { DECREMENT_CART_QUANTITY, DELETE_PRODUCT, INCREASE_QUANTITY, INCREMENT_CART_QUANTITY } from "./actionType";

const initialState = {
    cart: []
}

const reducer1 = (state = initialState, action) => {
    // const selectedProduct = state.cart.find((product) => product.id === action.payload.id)
    const incrementProduct = state.cart.find(product => product.id === action.payload)
    switch (action.type) {
        case INCREASE_QUANTITY:
            const selectedProduct = state.cart.find(product => product.id === action.payload.id)
            console.log(selectedProduct)

            if (selectedProduct) {
                const newProduct = state.cart.filter(product => product.id !== selectedProduct.id)
                console.log(newProduct)
                selectedProduct.quantity = selectedProduct.quantity + 1
                selectedProduct.quantities = selectedProduct.quantities - 1
                return {
                    ...state,
                    cart: [...newProduct, selectedProduct]
                }
            }
            else
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }

        case INCREMENT_CART_QUANTITY:
            console.log(action.payload)

            console.log(incrementProduct)
            if (incrementProduct.quantity <= incrementProduct.quantities) {
                incrementProduct.quantity = incrementProduct.quantity + 1
                incrementProduct.quantities = incrementProduct.quantities - 1
                const newProduct = state.cart.filter(product => product.id !== incrementProduct.id)
                console.log(newProduct)
                return {
                    ...state,
                    cart: [...newProduct, incrementProduct]
                }
            }
            return {
                ...state
            }
        case DECREMENT_CART_QUANTITY:
            // incrementProduct.quantity > 1
            if (incrementProduct.quantity > 1) {
                incrementProduct.quantity = incrementProduct.quantity - 1
                incrementProduct.quantities = incrementProduct.quantities + 1
                const newProduct = state.cart.filter(product => product.id !== incrementProduct.id)
                console.log(newProduct)
                return {
                    ...state,
                    cart: [...newProduct, incrementProduct]
                }
            }
            return {
                ...state
            }

           
          
        default:
            return state;
    }
}

export default reducer1