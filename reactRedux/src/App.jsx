import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {decrement, increment, incrementByValue, reset} from './sevices/actions/counterAction'

function App() {
  const count = useSelector((state)=> state.count );
  const dispatch = useDispatch()


  return (
    <>
      <div>
        
      </div>
      <h1>React Redux Counter</h1>
      <div className="card">
        <h3>  count is {count} </h3>
        <button onClick={() => dispatch(increment())}>
         increment
        </button>
        <button onClick={() => dispatch(decrement())}>
         decrement
        </button>
        <button onClick={() => dispatch(reset())}>
         reset
        </button>
        <button onClick={() => dispatch(incrementByValue(5))}>
         increment by 5
        </button>
        
      </div>
    </>
  )
}

export default App
