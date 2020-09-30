import React from 'react';
import Layout from '../../components/Layout'
import ProductsList from './ProductsList';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1 style={{color:"darkmagenta"}}>Your Store</h1>
                </div>
                <br />
                <ProductsList/>
            </div>
        </Layout>
     );
}
 
export default Store;