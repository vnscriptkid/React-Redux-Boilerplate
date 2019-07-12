import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from './reducers/index';
import { Todo, fetchTodos, deleteTodo } from './actions/index';

interface AppProps {
  todos: Todo[];
  fetchTodos(): void;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  loading: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }

  handleDeleteClick = (todoId: number) => {
    this.props.deleteTodo(todoId);
  };

  renderTodos = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id}>
        <h3>{todo.title}</h3>
        <button onClick={() => this.handleDeleteClick(todo.id)}>
          Delete Todo
        </button>
      </div>
    ));
  };

  handleFetchClick = (): void => {
    this.setState({ loading: true });
    this.props.fetchTodos();
  };

  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <div>Hello guys!</div>
        <div>
          <button onClick={this.handleFetchClick}>Fetch Todos</button>
        </div>
        <div>{this.renderTodos()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos
  };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
