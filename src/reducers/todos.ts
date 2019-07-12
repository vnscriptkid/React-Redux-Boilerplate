import { Todo } from '../actions';
import { TodoAction } from '../actions/types';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
