import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (todo.trim() !== "") {
              setTodos([
                ...todos,
                { id: Date.now() + Math.random(), text: todo, status: false },
              ]);
              setTodo(""); // clear input after adding
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>

      <div className="todos">
        {todos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  type="checkbox"
                  checked={obj.status}
                  onChange={(e) => {
                    setTodos(
                      todos.map((obj2) =>
                        obj2.id === obj.id
                          ? { ...obj2, status: e.target.checked }
                          : obj2
                      )
                    );
                  }}
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}

        {/* Show checked todos below */}
        {todos.map((obj) =>
          obj.status ? <h1 key={obj.id}>{obj.text}</h1> : null
        )}
      </div>
    </div>
  );
}

export default App;
