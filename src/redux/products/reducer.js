import { ADDPRODUCT, DECREASE_QUANTITY, DECREMENT_PRODUCT, INCREMENT_PRODUCT } from "./actionTypes";

const initialState = {
    product: [],
}

const reducer = (state = initialState, action) => {
    const selectedProduct = state.product.find((product) => product.id === action.payload)
    console.log(selectedProduct)
    console.log(action.payload)
    switch (action.type) {
        case ADDPRODUCT:
            return {
                ...state,
                product: [...state.product, action.payload]
            }

        case DECREASE_QUANTITY:
            // console.log(selectedProduct.quantities)
            console.log(selectedProduct)
            // && selectedProduct.quantities > 1
            if (selectedProduct) {
                selectedProduct.quantities = selectedProduct.quantities - 1
                return {
                    ...state,
                    product: [...state.product]
                }
            }
            return state;

        case DECREMENT_PRODUCT:
            if (selectedProduct) {
                selectedProduct.quantities = selectedProduct.quantities - 1
                return {
                    ...state,
                    product: [...state.product]
                }
            }
            return state;

        case INCREMENT_PRODUCT:
            if (selectedProduct) {
                selectedProduct.quantities = selectedProduct.quantities + 1  
                return {
                    ...state,
                    product: [...state.product]
                }
            }

            return state;

        default:
            return state
    }
}

export default reducer;