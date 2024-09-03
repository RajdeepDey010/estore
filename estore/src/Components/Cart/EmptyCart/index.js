import React from 'react'
import './_empty-cart.scss'
import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div className='p-4'>
            <span>Cart Is Empty</span>
            <hr />
            <Link to='/'>
                <div className="btn btn-warning">
                    <span>Continue Shopping</span>
                </div>
            </Link>
        </div>
    )
}

export default EmptyCart
