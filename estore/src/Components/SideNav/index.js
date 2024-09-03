import React, { useEffect, useState } from 'react'
import './_side-nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redux/Category/actions';
import { filterPrice, filterProducts } from '../../Redux/Product/productSlice';

function SideNav() {
  const accordionData = useSelector(state => state.categoryReducer.categories);
  const fetchProductData = useSelector(state => state.productReducer);

  const [products, setProducts] = useState();//to store the products from database and update it as per user filter.
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(3000);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, []);

  useEffect(() => {
    setProducts(fetchProductData.products);
  }, [fetchProductData.status]);

  const filterData = (userFilterProd) => {
    const payload = { userFilterProd, products };
    dispatch(filterProducts(payload));
  }

  const setPriceRange = (e, priceVal) => {
    if(priceVal === "min"){
      setMinPrice(e.target.value);
    }
    else if(priceVal === "max"){
      setMaxPrice(e.target.value);
    }
  }

  const filterPriceData = () => {
    const payload = {products,minPrice,maxPrice};
    dispatch(filterPrice(payload));
  }

  return (
    <div className='side-nav'>
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion my-3">
        {
          accordionData.map((accordionCategory, key) => {
            if (accordionCategory.parent_category_id === null) {
              return (
                <div className="accordion-item individual-category">
                  <div className="accordion-header">
                    <button className="accordion-button" data-bs-target={"#collapse" + key} data-bs-toggle="collapse">
                      <div className="category-title">
                        <a href="#">{accordionCategory.category}</a>
                      </div>
                    </button>
                  </div>
                  <div className="accordion-collapse collapse show" id={"collapse" + key}>
                    <div className="accordion-body">
                      <ul>
                        {
                          accordionData.map((sub_category) => {
                            if (accordionCategory.id === sub_category.parent_category_id) {
                              return (
                                <li className="sub-items">
                                  <a href="#" onClick={() => filterData(sub_category)}>{sub_category.category}</a>
                                </li>
                              );
                            }
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>

      <div className="price-filter-container">
        <div className="section-title">
          <h3>Filter By Price</h3>
        </div>

        <div className="min-range">
          <label for="minPrice" class="form-label">Min : {minPrice}</label>
          <input
            type="range"
            className='form-range'
            min="10"
            max="30"
            step="10"
            id="minPrice"
            onChange={(e)=>setPriceRange(e,"min")}
          />
        </div>

        <div className="max-range">
          <label for="maxPrice" class="form-label">Max : {maxPrice}</label>
          <input
            type="range"
            className='form-range'
            min="30"
            max="3000"
            step="50"
            id="maxPrice"
            onChange={(e)=>setPriceRange(e,"max")}
          />
        </div>

        <button type="button" class="btn btn-outline-dark my-3" onClick={filterPriceData}> Apply Filter </button>
      </div>
    </div>
  )
}

export default SideNav
