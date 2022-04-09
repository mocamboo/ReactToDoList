import React, { useState } from "react";

function App() {
  const [Item, setItem] = useState("");
  const [itemArray, setArray] = useState([]);
  function handleChange(event) {
    var newItem = event.target.value;
    setItem(newItem);
  }
  function handleSubmit() {
    setArray((prev) => {
      return [...prev, Item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <div className="form">
        <input name="item" onChange={handleChange} value={Item} type="text" />
        <button>
          <span onClick={handleSubmit}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
