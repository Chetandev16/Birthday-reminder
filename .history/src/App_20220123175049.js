import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  
  const var1 = " hello ";
  const[reset , setRest] = useState(var1);
  const  handelReset = () =>{
    setRest([]);
  }
  
  return (
    <main>
      <section className="container">
        <h3>{reset}</h3>
        <List />
        <button
          onClick={handelReset}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
