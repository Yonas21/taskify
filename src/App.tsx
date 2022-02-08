import React, { useState, FormEvent, useReducer } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { ITodo } from "./model";
import TodoReducer from "./reducers/indexreducer";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [state, dispatch] = useReducer(TodoReducer, []);

  console.log("todo --->", todos);

  const handleAdd = (event: FormEvent<EventTarget>) => {
    event.preventDefault();

    if (todo) {
      dispatch({ type: "add", payload: todo });
      setTodo("");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Taskify</p>
      </header>
      <section className="input_section">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </section>

      <section className="display_section">
        <TodoList todos={state} setTodos={setTodos} />
      </section>
    </div>
  );
};

export default App;
