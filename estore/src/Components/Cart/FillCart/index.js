import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delCart, updateCart } from '../../../Redux/Cart/cartSlice'

function FillCart() {
  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const quantityHandle = (e,item,key)=>{
    
    const payload = {
      operation: e.target.innerText,
      key,
      item
    }
    dispatch(updateCart(payload))
  }

  const delHandle = (item)=>{
    dispatch(delCart(item))
  }

  return (
    <div>
      <div className="row my-4">
        <div className="col-8 p-4">
          {
            cart.cartItems.map((item,key) => {
              return (
                <div className='mb-4'>
                  <div className='row'>
                    <div className="col-4">
                      <img src={require('../../../assets/shop/' + item.product_img)} alt={item.product_name} />
                    </div>
                    <div className='col-8 p-3'>
                      <span>{item.product_name}</span>
                      <div>
                        <span>INR {item.price}</span>
                      </div>
                      <div>
                        <i className='fa fa-star text-warning' />
                        <i className='fa fa-star text-warning' />
                        <i className='fa fa-star text-warning' />
                        <i className='fa fa-star text-warning' />
                        <i className='fa fa-star text-warning' />
                      </div>
                      <hr />
                    
                      <div>
                        <div className="btn-group mx-3">
                          <div className='btn btn-outline-dark' onClick={(e) => quantityHandle(e,item,key)}>
                            <span> - </span>
                          </div>
                          <div className='btn'>
                            <span> {item.quantity} </span>
                          </div>
                          <div className='btn btn-outline-dark' onClick={(e) => quantityHandle(e,item,key)}>
                            <span> + </span>
                          </div>
                        </div>
                        <div className='btn btn-outline-danger mx-4' onClick={()=>delHandle(item)}>
                          <span><i className='fa fa-trash mx-2'/> Remove </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              )
            })
          }
        </div>
          
        <div className="col-4 px-4 py-3 my-4 bg-wheat">
          <h2>Summary</h2>
          <div>
            <span>Cart Total : INR {cart.totalPrice}</span>
            <br />
            <span>Total Items : {cart.totalItems}</span>
            <br />
            <span>Shipping : Free</span>
            <hr />
            <span>Total : INR {cart.totalPrice}</span>
            <hr />
          </div>
          <div className='btn btn-outline-dark w-100 mb-4 mt-1'>
            checkout
          </div>
        </div>
      </div>
    </div>
  )
}

export default FillCart
