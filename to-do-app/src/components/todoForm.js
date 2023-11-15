import React from "react";
import { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // below line automatically will move to the input and stay on focus for us to type no need to click on it
  const inputRef = useRef(null);
  // focus without () will give illegal error
  useEffect(() => inputRef.current.focus());

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput(""); //empty the input after
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const inputRegular=<><input
          type="text"
          placeholder="add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
    <button className="todo-button">add todo</button></>
  
  const inputUpdate=<><input
          type="text"
          placeholder="add a todo"
          value={input}
          name="text"
          className="todo-input edit"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">update</button></>
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? inputUpdate : inputRegular}
      </form>
    </div>
  );
}

export default TodoForm;
