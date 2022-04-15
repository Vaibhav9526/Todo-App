import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

// by Vaibhav Sharma🔥
//GitHub @Vaibhav9526

const Todo = () => {
  //useState-->
  const [Item, setItem] = useState();
  const [listOfItem, setlistOfItem] = useState([]);

  //Onchange Function-->
  const ItemChng = (e) => {
    setItem(e.target.value);
  };

  //Adding ToDo
  const AddItem = () => {
    if (!Item) {
      alert("Input Should Not Be Empty");
    } else {
      setlistOfItem([...listOfItem, Item]);
      setItem("");
    }
  };

  //Removing ToDos-->
  const removeTodo = (index) => {
    const newTodos = [...listOfItem];
    newTodos.splice(index, 1);
    setlistOfItem(newTodos);
  };

  return (
    <>
      <div className="Main">
        <div className="container">
          <h1> To Do List </h1>
          <br />
          <input
            type="text"
            onChange={ItemChng}
            placeholder="✍️ Enter Your ToDo"
            value={Item}
            maxLength="20"
          />
          <button onClick={AddItem} title="Add ToDo" className="AddToDo">
            <AddIcon />
          </button>

          <ol>
            {listOfItem.map((val, index) => {
              return (
                <div className="MyTodos" key={index}>
                  <li>
                    {val}
                    <i
                      className="fa fa-trash"
                      title="Delete Todo"
                      id="trash"
                      aria-hidden="true"
                      onClick={() => removeTodo(index)}
                    />
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
      <h2>🔥 Created By Vaibhav 🔥</h2>
    </>
  );
};

export default Todo;
