import React from 'react'

export default function List({item}) {
  const {name, age, image} = item;
  return (
    <div className='birthdayCard'>
      <div>
        <img src={image} alt="photo" />
      </div>
      <div>
        <h4 className="title">{ name }</h4>
        <p className="age">{age} years</p>
      </div>
    </div>
  )
}
