import React, { FormEvent } from "react";
import "./input.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent<EventTarget>) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a task"
        className="input_box"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button className="input_submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
