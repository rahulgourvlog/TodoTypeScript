import axios from "axios";
import {
    ADD_TODO,
  DELETE_TODO,
  FETCH_TODO_FAILURE,
  FETCH_TODO_LOADING,
  FETCH_TODO_SUCCESS,
} from "./actionTypes";
import { Dispatch } from "redux";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodoLoadingAction {
    type: typeof FETCH_TODO_LOADING;
  }
  
  interface FetchTodoSuccessAction {
    type: typeof FETCH_TODO_SUCCESS;
    payload: Todo[];
  }
  
  interface FetchTodoFailureAction {
    type: typeof FETCH_TODO_FAILURE;
    payload: string;
  }
  
  interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
  }
  
  interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: number;
  }
  
  type TodoActionTypes =
    | FetchTodoLoadingAction
    | FetchTodoSuccessAction
    | FetchTodoFailureAction
    | AddTodoAction
    | DeleteTodoAction;


export const fetchTodo = () => {
  return async (dispatch: Dispatch<TodoActionTypes>) => {
    dispatch({ type: FETCH_TODO_LOADING });
    try {
      const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
      console.log(response.data, "res");
      dispatch({ type: FETCH_TODO_SUCCESS, payload: response.data});
    } catch (err) {
        const errorMessage = (err as Error).message;
      dispatch({ type: FETCH_TODO_FAILURE, payload: errorMessage });
    }
  };
};

export const addTodo = (todo: Todo) => {
console.log(todo,"actionfile")
    return (
        (dispatch: Dispatch<TodoActionTypes>)=>{
            
            dispatch({type:ADD_TODO,payload:todo})
        }
    )
   
};



export const deleteTodo=(id:number)=>{
    return (
        (dispatch: Dispatch<TodoActionTypes>)=>{
            dispatch({type:DELETE_TODO,payload:id})
        }
    )
}