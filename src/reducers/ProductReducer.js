// import { getTotalQuantity } from "./helpers";

import {
    SET_PRODUCTS,
    ADD_PRODUCT_TO_CART,
    UPDATE_QUANTITY,
} from "../actions/productAction"

export const initialState = {
    products: [],
    myCart: {},
    error: false,
    quantity: 0,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_PRODUCT_TO_CART":

            const updatedCart = {
                ...state.myCart,
                [action.payload.id]: action.payload,
            };
            console.log(updatedCart);
            return {
                ...state,
                myCart: updatedCart,
            };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                quantity: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;