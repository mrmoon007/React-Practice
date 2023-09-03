import React from 'react'
import withCounter from './HOC/withCounter'

 function InputCounter(props) {
    const {count, handleCount} = props;
  return (
    <div>
      <input type="text" onChange={handleCount} name="" id="" placeholder='enter text' /> Onchange { count} times.
    </div>
  )
}

export default withCounter(InputCounter);
