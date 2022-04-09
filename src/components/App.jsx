import React, { useState } from "react";
import ToDOitem from "./ToDoitem";
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
  function deleteItem(id) {
    setArray((prev) => {
      return prev.filter((item, index) => {
        return index != id;
      });
    });
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
          {itemArray.map((todoItem, index) => {
            return (
              <ToDOitem
                key={index}
                onChecked={deleteItem}
                id={index}
                text={todoItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
