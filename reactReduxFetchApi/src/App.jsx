import { useState } from "react";
import DataShow from "./components/DataShow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Fetch Data With Redux</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <DataShow />
      </div>
    </>
  );
}

export default App;
