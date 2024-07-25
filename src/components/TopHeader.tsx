
import { Link, useLocation } from "react-router-dom"
import Button from "./Button"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TopHeader = () => {
  const location = useLocation();
  const { todos } = useSelector(
    (state: RootState) => state.todos
  );
  return (
    <>
    {todos.length>0 && 
    <div className="flex flex-col sm:flex-row justify-between   mb-4">
          <div className="text-4xl">Todo App</div>
          {location.pathname !== "/addtodo" && (
         <Link to="/addtodo" className="mt-4 sm:mt-0">
         <Button >+ AddTodo</Button>
         </Link>)

}
</div>}
    </>
  )
}

export default TopHeader
