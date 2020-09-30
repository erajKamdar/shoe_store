import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../contexts/ProductsContext'
import { CartContext } from '../../contexts/CartContext';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const ProductDetails = () => {

  const { productId } = useParams()
  const [product, setProduct] = useState('')
  const { products } = useContext(ProductsContext)
  const { addProduct, increase, cartItems } = useContext(CartContext)

  const isInCart = product => {

    return cartItems.find(item => item.id === product.id)
  }


  useEffect(() => {
    const selectedProduct = products.find(item => item.slug === productId);
    setProduct(selectedProduct);
  }, [products, productId]);

  return (<div style={{textAlign: "center", color: "darkmagenta"}}> 
    <Header />
      <h2 style={{ margin: "50px", color: "darkmagenta"}}>Product details page</h2>
      
    { product &&
    <div>
          <div className="card card-body col-sm-12">
            <h2 style={{ color: "darkmagenta"}}>{product.name}</h2>
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
            src={product.photo} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left">${(product.price)}</h3>

            <div className="text-right">
            <button className="btn btn-secondary btn-sm">
            <Link className="nav-link" to="/">Back to Products</Link>
            </button>
                {
                  !isInCart(product) &&
                  <button onClick={() => addProduct(product)}
                    className="btn btn-info">Add to cart</button>
                }
                   
                {
                  isInCart(product) &&
                  <button onClick={() => increase(product)}
                    className="btn btn-primary">Add more</button>
                }

            </div>
          </div>
          </div>
            }
  </div>)
}

export default ProductDetails; 