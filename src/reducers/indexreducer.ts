import { ActionTypes, ITodo } from "../model";

const TodoReducer = (state: ITodo[], action: ActionTypes) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), name: action.payload, isDone: false },
      ];

    case "done":
      return state?.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    case "remove":
      return state?.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default TodoReducer;
