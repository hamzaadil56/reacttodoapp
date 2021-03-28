import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // const [todosObject, setProperty] = useState({});
  // const [todos, setTodos] = useState({ todosList: [] });
  const [todos, setTodos] = useState({ items: [], value: "" });
  const [editInputValue, setEditValue] = useState("");

  let addItem = () => {
    // let obj = { itemValue: inputValue };
    // todos.todosList.push(obj);
    // setTodos(todos);
    let item = { itemValue: todos.value, id: new Date().getTime().toString() };
    setTodos({ ...todos, items: [...todos.items, item] });
  };
  // console.log(todos);

  const deleteAll = () => {
    setTodos({ items: [], value: "" });
  };
  const deleteItem = (id) => {
    let newTodos = todos.items.filter((v) => v.id !== id);
    setTodos({ items: newTodos });
  };

  const editItem = (v) => {
    v.edit = true;
    let editedItems = todos.items;
    setTodos({ ...todos, items: editedItems, value: "" });
  };
  const handleChange = (v, e) => {
    v.itemValue = e.target.value;
    let updatedItems = todos.items;
    setTodos({ ...todos, items: updatedItems });
  };

  const updateItem = (v) => {
    v.edit = false;
    let finalItems = todos.items;

    setTodos({ ...todos, items: finalItems });
  };
  // let { items, value } = todos;
  return (
    <div className="parent-div">
      <div className="todo-app">
        <h1>Todo App</h1>
        <div className="inputDiv">
          <input
            value={todos.value}
            type="text"
            placeholder="Enter"
            onChange={(e) => setTodos({ ...todos, value: e.target.value })}
          />
          <button
            type="button"
            className="btn btn-success m-1"
            onClick={addItem}
          >
            Add Item
          </button>
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={deleteAll}
          >
            Delete All
          </button>
        </div>
        <div className="items">
          {todos.items.map((v) => {
            return (
              <div key={v.id} className="item">
                {v.edit === true ? (
                  <input
                    value={v.itemValue}
                    type="text"
                    onChange={(e) => {
                      handleChange(v, e);
                    }}
                  />
                ) : (
                  v.itemValue
                )}
                <button
                  type="button"
                  className="btn btn-primary m-1"
                  disabled={v.edit === true ? true : false}
                  onClick={() => {
                    editItem(v);
                  }}
                >
                  Edit Item
                </button>
                <button
                  type="button"
                  className="btn btn-warning m-1"
                  disabled={v.edit === true ? true : false}
                  onClick={() => {
                    deleteItem(v.id);
                  }}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-light m-1"
                  disabled={v.edit === true ? false : true}
                  onClick={() => updateItem(v)}
                >
                  Update
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
