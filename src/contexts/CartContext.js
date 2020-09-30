import React, { createContext, useReducer } from 'react';
import { CartReducer } from './CartReducer';

const initialState = {
    cartItems: [],
    itemCount: 0,
    total: 0,
    checkout: false
}

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', state);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;