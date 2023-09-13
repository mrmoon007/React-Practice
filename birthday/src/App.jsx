import { useState } from "react";
import List from "./components/List";
import listData from './data/list'

function App() {
  const [list, setList] = useState(listData);
  return (
    <main>
      <section>
        <div className="container">
          <h3>5 Birthdays Today</h3>
          {
            list && list.map((item)=>{
              return <List item={item} key={item.id} />
            })
          }
          <button onClick={()=> setList([])}>Clear all</button>
        </div>
      </section>
    </main>
  );
}

export default App;
