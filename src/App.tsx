
import { BrowserRouter } from "react-router-dom";
import BackgroundTheme from "./components/BackgroundTheme";

//import TopHeader from "./components/TopHeader";
import TodoRoutes from "./routing/TodoRoutes";

import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <BackgroundTheme>
        <BrowserRouter>
          <div className="p-4">
            <TopHeader />

            <TodoRoutes />
          </div>
        </BrowserRouter>
      </BackgroundTheme>
    </>
  );
}

export default App;
