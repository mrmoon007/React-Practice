// import React, { useState } from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter =(props)=> {
  // const [count, setCount] = useState(0);
  // const handleCounter =()=>{
  //     setCount(count+1);
  // }
  const { count, handleCount } = props;
  return (
    <div>
      <button onClick={handleCount}>Clicked {count} times.</button>
    </div>
  );
}

export default withCounter(ClickCounter);
