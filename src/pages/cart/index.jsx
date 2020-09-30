import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import StoreCartProducts from './StoreCartProducts';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {

    const { cartItems, checkout } = useContext(CartContext);
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div>
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <StoreCartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }

                        { checkout && 
                            <div className="text-center text-success">
                                <h3 className="text-success">Checkout successfull</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;