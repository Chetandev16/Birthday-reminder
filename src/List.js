import React from "react";
import { useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);

  const removeIteam = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  
  const resetAll = () =>{
    setPeople([]);
  }
   
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick = {() => {removeIteam(id)}}>
    
              clear
            </button>
          </div>
        );
      })}
      <button onClick={resetAll}>Clear All</button>
    </>
  );
};

export default List;
