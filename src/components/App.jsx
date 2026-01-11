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

  function handleDeleteClick(todoId) {
    let newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function handleCheckChange(e, todoId) {
    let newTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: e.target.checked };
      } else {
        return todo;
      }
    });
    setTodos(newTodo);
  }

  return (
    <>
      <section className="container-app">
        <h1 className="title">Todo App</h1>
        <div className="container-data">
          <input
            className="input"
            type="text"
            value={text}
            onChange={handleChange}
          />
          <button className="button" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="container-list">
          <ul className="list">
            {todos.map((todo) => {
              return (
                <li
                  className={`item ${todo.done ? "item-done" : ""}`}
                  key={todo.id}
                >
                  <input
                    className="check"
                    type="checkbox"
                    checked={todo.done}
                    onChange={(e) => handleCheckChange(e, todo.id)}
                  />

                  <label className="label">
                    {todo.done ? <del>{todo.title}</del> : todo.title}
                  </label>

                  <div className="container-buttons">
                    <button className="btn-editar">
                      <ion-icon name="create-outline" size="small"></ion-icon>
                    </button>
                    <button
                      className="btn-eliminar"
                      onClick={() => handleDeleteClick(todo.id)}
                    >
                      <ion-icon name="trash-outline" size="small"></ion-icon>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
