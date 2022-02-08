export interface ITodo {
  id: number;
  name: string;
  isDone: boolean;
}

export type ActionTypes =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };
