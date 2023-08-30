import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {increment} from './sevices/actions/counterAction'

function App() {
  const count = useSelector((state)=> state.count );
  const dispatch = useDispatch()


  return (
    <>
      <div>
        
      </div>
      <h1>React Redux Counter</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App
