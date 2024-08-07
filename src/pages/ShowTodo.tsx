import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { deleteTodo, fetchTodo, toggleTodos } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const ShowTodo: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(fetchTodo());
    }
  }, []);
  console.log(todos, "todos");

  const toggleTodo=(id:number)=>{
    dispatch(toggleTodos(id))
  }
  
  const handleDeleteTodo = (Id: number) => {
    dispatch(deleteTodo(Id));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <div>
        <h2 className="text-2xl mb-4">Todo List</h2>
        {loading && <Spinner/>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="pl-5">
          {/* {todos.filter((todo:Todo)=>todo.id==5000)} */}
          {currentTodos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="ml-2 mb-2 list-none hover:bg-blue-400 cursor-pointer"
            >
              <span>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="mr-2 cursor-pointer"
                  onChange={()=>{toggleTodo(todo.id)}}
                  title={todo.completed ? "task completed" : "task pending"}
                />
                {todo.title}
              </span>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-red-500 cursor-pointer pl-1"
                onClick={() => handleDeleteTodo(todo.id)}
                title="delete task"
              />
            </li>
          ))}
        </div>
      </div>
      <div>
        <Pagination
          todosPerPage={todosPerPage}
          totalTodos={todos.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ShowTodo;
