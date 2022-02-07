import React, { useState, FormEvent } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { ITodo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  console.log("todo --->", todos);

  const handleAdd = (event: FormEvent<EventTarget>) => {
    event.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), name: todo, isDone: false }]);
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
        <TodoList todos={todos} setTodos={setTodos} />
      </section>
    </div>
  );
};

export default App;
