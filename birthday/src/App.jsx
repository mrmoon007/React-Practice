import List from "./components/List";

function App() {
  return (
    <main>
      <section>
        <div className="container">
          <h3>5 Birthdays Today</h3>
          <List />
          <button>Clear all</button>
        </div>
      </section>
    </main>
  );
}

export default App;
