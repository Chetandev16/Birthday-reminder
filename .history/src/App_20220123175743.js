import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {

  const[people , setPeople] = useState(data);
  
   
   
  const  handelReset = () =>{
    setPeople([]);
  }


  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List people={people}/>
        <button
          onClick={handelReset}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
