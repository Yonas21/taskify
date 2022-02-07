import React from "react";
import { ITodo } from "../model";
import Todo from "./Todo";
import "./input.css";

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((item, id) => (
        <Todo todo={item} key={id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
