import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {

  const[reset , setRest] = useState(data);
  const  handelReset = () =>{
    setRest([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{reset}</h3>
        <List />
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
