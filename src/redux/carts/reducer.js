import { ADDTOCART } from "./actionType";

const initialState = {
    cart: [],
}

const reducer = (state = initialState, action) =>{

    const selectedProduct = state.cart.find((product,id) => product.id === action.payload.id)
   
    console.log(selectedProduct)
    switch (action.type) {
        case ADDTOCART:
          if(selectedProduct ){
            // console.log(selectedProduct.id)
            const newProduct = state.cart.filter((product) => product.id !== selectedProduct.id)
           
            console.log(newProduct)
            selectedProduct.quantity = selectedProduct.quantity + 1;
            return {
                ...state,
                // cart: [{...selectedProduct}]
                cart: [...newProduct, selectedProduct]
            }
          }
            return{
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }

            default:
                return state;
    }
}

export default reducer;