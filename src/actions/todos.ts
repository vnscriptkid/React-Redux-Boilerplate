import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/posts';

export interface Todo {
  id: number;
  title: string;
  body: string;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const deleteTodo = (todoId: number): DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: todoId
});
