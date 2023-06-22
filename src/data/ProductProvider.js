import {useReducer} from "react";
// import ProductReducer, {initialState} from "../reducers/ProductReducer";
import ProductsContext from "./ProductsContext";
import productReducer, {initialState} from "../reducers/ProductReducer";

const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    return (
        <ProductsContext.Provider value={[state, dispatch]}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;