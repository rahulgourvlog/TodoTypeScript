
import { BrowserRouter, Link } from "react-router-dom";
import BackgroundTheme from "./components/BackgroundTheme";


//import TopHeader from "./components/TopHeader";
import TodoRoutes from "./routing/TodoRoutes"
import Button from "./components/Button";
function App() {
  return (
    <>
      <BackgroundTheme>
       <BrowserRouter>
       <div className="p-4">
       <div className="flex flex-col sm:flex-row justify-between   mb-4">
          <div className="text-4xl">Todo App</div>
         <Link to="/addtodo" className="mt-4 sm:mt-0">
         <Button >+ AddTodo</Button>
         </Link>
          </div>
         <TodoRoutes/>
       
        </div>
       </BrowserRouter>
       
        
      </BackgroundTheme>
    </>
  );
}

export default App;
