function App() {
  const name = "Kenny"
  const x = false
    return (
    <div className="container">
      <h1> Hello World</h1>
        <h2>Hi {name}</h2>
        <h3>{x ? "it's true" : "it's false"}</h3>

    </div>
  );
}

export default App;
