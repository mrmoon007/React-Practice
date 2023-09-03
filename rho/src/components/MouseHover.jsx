import React from 'react'
import withCounter from './HOC/withCounter'

 function MouseHover(props) {
    const {count, handleCount} = props;
  return (
    <div>
      <h3 onMouseOver={handleCount}>Mouse hovered {count} times.</h3>
    </div>
  )
}

export default withCounter(MouseHover);
