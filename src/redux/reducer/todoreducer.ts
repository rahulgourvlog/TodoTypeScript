import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO_FAILURE,
  FETCH_TODO_LOADING,
  FETCH_TODO_SUCCESS,
} from "../actionTypes";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: boolean;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: false,
};

export const todoreducer = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case FETCH_TODO_LOADING:
      return { ...state, loading: true, error: false };
    case FETCH_TODO_SUCCESS:
      return { ...state, loading: false, error: false, todos: action.payload };
    case FETCH_TODO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    default:
      return state;
  }
};
