import { useState } from "react";

/*
{
id: 1,
title: "nueva tarea",
done: true
}
*/
let nextId = 0;

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    let newTodos = [...todos];
    if (text !== "") {
      newTodos = [...todos, { id: nextId++, title: text, done: false }];
    }
    setTodos(newTodos);
    setText("");
  }

  return (
    <>
      <section className="container-app">
        <h1 className="title">Todo App</h1>
        <input
          className="input"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button className="button" onClick={handleClick}>
          +
        </button>
        <div className="container-list">
          <ul className="list">
            {todos.map((todo) => {
              return (
                <li className="item" key={todo.id}>
                  <input type="checkbox" />
                  <label>{todo.title}</label>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
