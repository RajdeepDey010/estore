import React from 'react'
import './_side-nav.scss'
import { useSelector } from 'react-redux'
import accordionSlice from '../../Redux/Accordion/accordionSlice'

function SideNav() {
  const accordionData = useSelector(accordionSlice.getInitialState);

  return (
    <div className='side-nav'>
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
        {
          accordionData.map((data,key) => {
            return (
              <div className="accordion-item individual-category">
                <div className="accordion-header">
                  <button className="accordion-button" data-bs-target={"#collapse" + key} data-bs-toggle="collapse">
                    <div className="category-title">
                      <a href="#">{data.category}</a>
                    </div>
                  </button>
                </div>
                <div className="accordion-collapse collapse show" id={"collapse" + key}>
                  <div className="accordion-body">
                    <ul>
                      {
                        data.items.map((item)=>{
                          return(
                            <li className="sub-items"><a href="#">{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SideNav
