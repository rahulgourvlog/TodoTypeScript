
import { Link, useLocation } from "react-router-dom"
import Button from "./Button"

const TopHeader = () => {
  const location = useLocation();
  return (
    <>
    <div className="flex flex-col sm:flex-row justify-between   mb-4">
          <div className="text-4xl">Todo App</div>
          {location.pathname !== "/addtodo" && (
         <Link to="/addtodo" className="mt-4 sm:mt-0">
         <Button >+ AddTodo</Button>
         </Link>)
}
</div>
    </>
  )
}

export default TopHeader
