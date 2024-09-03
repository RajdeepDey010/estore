import React from 'react'
import { useLocation } from 'react-router-dom'
import './_product-details.scss'
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../Redux/Cart/cartSlice';

function ProductDetails() {
  const loc = useLocation()
  const product = loc.state;
  const dispatch = useDispatch()

  const addCart = ()=>{
    dispatch(addCartItem(product))
  }

  return (
    <div className="product-details">
      <div className='row container my-5'>

        <div className="prod-img col-5">
          <img src={require('../../assets/shop/' + product.product_img)} alt={product.product_name} />
        </div>

        <div className="prod-info col-7">
          <h5 className='productName'>
            {product.product_name}
          </h5>

          <div className="product-rating">
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
          </div>
          <hr />
          <div className="product-price">
            MRP: <span className='price'>₹{product.price}</span>
            <p style={{ fontSize: "0.8em" }}>Inclusive of taxes</p>
          </div>

          <div className="product-desc">
            <p>The product description goes here.</p>
          </div>

          <div className='my-4 ' onClick={addCart}>
            <div className="btn btn-warning cart-btn">
              <div className='cart-icon'>
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="cart-text">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails
