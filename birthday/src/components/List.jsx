import React from 'react'
import img from '/img/person-1.jpeg'

export default function List() {
  return (
    <div className='birthdayCard'>
      <div>
        <img src={img} alt="photo" />
      </div>
      <div>
        <h4 className="title">Mr Moon</h4>
        <p className="age">29 years</p>
      </div>
    </div>
  )
}
