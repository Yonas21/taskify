import React, { ChangeEvent, FormEvent, useState } from "react";
import { ITodo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}
const Todo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState<string>(todo.name);

  const handleDone = (id: number) => {
    setTodos(
      todos?.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos?.filter((item) => item.id !== id));
  };

  const handleEdit = (event: FormEvent, id: number) => {
    event.preventDefault();
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, name: editTodo } : todo
      )
    );
    setEdit(false);
  };
  return (
    <div className="todo">
      {edit ? (
        <form onSubmit={(e) => handleEdit(e, todo.id)}>
          <input
            value={editTodo}
            onChange={(event: any) => setEditTodo(event.target.value)}
            className="edit_todo"
          />
        </form>
      ) : (
        <p className={todo.isDone ? `todo-task-done` : `todo-task`}>
          {todo.name}
        </p>
      )}
      <div className="icon_group">
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default Todo;
