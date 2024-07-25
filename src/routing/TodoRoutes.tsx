
import { lazy, Suspense } from "react";
import { Route,Routes} from 'react-router-dom';
import Spinner from "../components/Spinner";
//  import ShowTodo from "../pages/ShowTodo";
// import AddTodo from "../pages/AddTodo";
const  ShowTodo=lazy(()=>import("../pages/ShowTodo"))  ;
const  AddTodo=lazy(()=>import("../pages/AddTodo"))  ;

const TodoRoutes = () => {
  return (

    <>
   
    <Suspense fallback={<Spinner/>}>
          <Routes>
<Route path="/" element={<ShowTodo/>} />
<Route path="/addtodo" element={<AddTodo/>} />
</Routes>

          </Suspense>

    
    </>
   
  )
}

export default TodoRoutes