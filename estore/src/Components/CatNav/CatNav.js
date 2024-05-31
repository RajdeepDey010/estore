import React, { useEffect } from 'react'
import './_cat-nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redux/Category/actions';

function CatNav() {
  const category = useSelector(state => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className='cat-nav-container container'>
      <ul>
        {
          category.map((items) => {
            if (items.parent_category_id == null) {

              return (
                <li className='list-items'><a href="#">{items.category}</a></li>
              )
              
            }
          })
        }
      </ul>
    </div>
  )
}

export default CatNav
