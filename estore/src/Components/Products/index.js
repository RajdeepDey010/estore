import React, { useEffect } from 'react'
import './_products.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Redux/Product/action';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';

function Products() {
  const productData = useSelector(state => state.productReducer.products);
  const cartData = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  function addToCart(item) {
    const payload = {...item, quantity: 1};
    dispatch(addCartItem(payload)); //we invoke the action method created inside the reducer of cartSlice.
  }

  //console.log(cartData)

  return (
    <div className='products-container'>
      {
        productData.map((productItem, key) => {
          return (
            <div className='mx-5 p-3 col-lg-3 col-md-6 product-card'>
              <div className='product-image-container'>
                <Link
                  to="/productdetails"
                  state={productItem}
                >
                  <img src={require('../../assets/shop/' + productItem.product_img)} alt={productItem.product_name} />
                </Link>
              </div>
              <div className='product-info'>
                <h5>
                  <Link to="/productdetails" state={productItem}>
                    {productItem.product_name}
                  </Link>
                </h5>
                <br />
                <p className='product-price'>₹{productItem.price}</p>
                <div className="product-rating">
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                </div>
              </div>
              <div className="my-3 cart-container" onClick={() => addToCart(productItem)}>
                <div className="cart-btn">
                  <div className="cart-icon">
                    <i className="mx-4 fa fa-shopping-cart" />
                  </div>
                  <div className="cart-text">
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products
