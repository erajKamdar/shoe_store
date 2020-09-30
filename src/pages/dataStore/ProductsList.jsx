import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsList.module.css';

const ProductsList = () => {
    const { products } = useContext(ProductsContext)

    return ( 
        <div className={styles.container}>
            <div className={styles.product}>
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
     );
}

export default ProductsList;