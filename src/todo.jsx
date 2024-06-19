import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrashCan,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(""); // Todo to be added
  const [newId, setNewId] = useState(); //id of the Todo being edited
  const [editingTodo, setEditingTodo] = useState(""); // title of the Todo being updated
  // adds new Todo to the list
  const addTodo = () => {
    if (newTodo.trim()) {
      // adds new Todo object to the Todo state with new id
      setTodos([...todos, { id: Date.now(), title: newTodo }]);
      setNewTodo(""); // clears the input field
    }
  };
  // updates the title of an existing list
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        // finds the book with matching id & updates its title
        todo.id === id ? { ...todo, title: editingTodo } : todo
      )
    );
    // resets
    setNewId(null);
    setEditingTodo("");
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main">
      <h1>To-do List</h1>
      <div className="input">
        <input
          type="text"
          value={newTodo}
          // updates the newTodo state
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add" onClick={addTodo}>
          ADD
        </button>
      </div>
      <div className="list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {newId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editingTodo}
                    onChange={(e) => setEditingTodo(e.target.value)}
                  />
                  <button onClick={() => updateTodo(todo.id)}>
                    {" "}
                    <FontAwesomeIcon icon={faRightToBracket} />
                  </button>
                </>
              ) : (
                <>
                  {todo.title}
                  <button
                    onClick={() => {
                      setNewId(todo.id);
                      setEditingTodo(todo.title);
                    }}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className="delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
