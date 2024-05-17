import React from 'react'
import './_products.scss'
import { useSelector } from 'react-redux'
import productSlice from '../../Redux/Product/productSlice'

function Products() {
    const productData = useSelector(productSlice.getInitialState);

    return (
        <div className='products-container'>
            {
                productData.map((items, key) => {
                    return (
                        <div className='mx-5 p-3 col-lg-3 col-md-6 product-card'>
                            <div className='product-image-container'>
                                <img src={require('../../assets/shop/' + items.img)} alt={items.pName} />
                            </div>
                            <div className='product-info'>
                                <h5><a href="#">{items.pName}</a></h5>
                                <br />
                                <p className='product-price'>₹{items.price}</p>
                                <div className="product-rating">
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
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
