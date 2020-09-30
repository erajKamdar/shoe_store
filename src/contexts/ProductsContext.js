import React, { createContext, useState } from 'react';
import { dummyProducts } from '../services/localData';

export const ProductsContext = createContext(dummyProducts)

const ProductsContextProvider = ({children}) => {

    const [products] = useState(dummyProducts);

    return ( 
        <ProductsContext.Provider value={{
            products: products
        }} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;