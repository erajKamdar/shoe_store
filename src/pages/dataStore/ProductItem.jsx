import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
            <img style={{display: "block", borderRadius: "30", boxShadow : "2px 3px 5px 2px lightgrey" , margin: "0 auto 10px", maxHeight: "200px", justifyContent: "space-around" }} className="img-fluid" 
            src={product.photo} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left"> $ {product.price}</h3>
            
            <div className="text-right">
                <Link to={`product/${product.slug}`} className="btn btn-link btn-sm mr-2">Details</Link>

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-info btn-sm">Add to cart</button>
                }   
                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline btn-primary btn-sm">Add more</button>
                }
 
                             
            </div>
        </div>
     );
}
 
export default ProductItem;