import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import StoreCartItem from './StoreCartItem';

const StoreCartProducts = () => {

    const { cartItems, itemCount, clearCart, handleCheckout, total } = useContext(CartContext);

    return ( 
        <div>
            <div className="card card-body border-0">
                {
                    cartItems.map(product =>  
                        <StoreCartItem key={product.id} product={product}/>)
                }
            </div>

            {
                        cartItems.length > 0 && 
                        <div className="text-center col-sm-10 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right"> $ {total}</h3>
                                <hr className="my-4"/>
                                <div>
                                    <button type="button" className="btn btn-outline-primary mb-2 Active" onClick={handleCheckout}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
        </div>

     );
}
 
export default StoreCartProducts;