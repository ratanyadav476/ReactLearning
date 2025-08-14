import React, { useState } from 'react'

function Card({ id, name, job, image, text, removeTour }) {
  const [readmore, setReadmore] = useState(false)

  const description = readmore ? text : `${text.substring(0, 200)}...`

  const readmoreHandler = () => {
    setReadmore(!readmore)
  }

  return (
    <div className="tour-info">
      <div className='Card'>
        <img src={image} alt="" className='image' />
       <div className="ture-information">
         <div className='tour-details'>
          <h4 className='tour-name'>{name}</h4>
          <h4 className='tour-post'>{job}</h4>
        </div>
        <div className='description'>
          {description}
          <span className='read-more' onClick={readmoreHandler}>
            {readmore ? " Show Less" : " Read More"}
          </span>
        </div>
       </div>
      <button className='btn-red' onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  )
}

export default Card

