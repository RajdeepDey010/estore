import React from 'react'
import { useSelector } from 'react-redux'

function FillCart() {
  const cart = useSelector(state => state.cartReducer)

  const quantityHandler = (e,item,key)=>{
    if(e.target.innerText==="+"){
      console.log("+1")
    }
    else if(e.target.innerText==="-"){
      console.log("-1")
    }
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
                          <div className='btn btn-outline-dark' onClick={(e) => quantityHandler(e,item,key)}>
                            <span> - </span>
                          </div>
                          <div className='btn'>
                            <span> {item.quantity} </span>
                          </div>
                          <div className='btn btn-outline-dark' onClick={(e) => quantityHandler(e,item,key)}>
                            <span> + </span>
                          </div>
                        </div>
                        <div className='btn btn-outline-danger mx-4'>
                          <span><i className='fa fa-trash mx-2'/> Remove </span>
                        </div>
                      </div>
                    </div>
                  </div>
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
