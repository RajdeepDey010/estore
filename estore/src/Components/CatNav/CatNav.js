import React from 'react'
import './_cat-nav.scss'
import categorySlice from '../../Redux/Category/categorySlice'
import { useSelector } from 'react-redux'
function CatNav() {
  const category = useSelector(categorySlice.getInitialState);

  return (
    <div className='cat-nav-container container'>
      <ul>
        {
          category.map((items) => {
            return (
              <li className='list-items'><a href="#">{items}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CatNav
