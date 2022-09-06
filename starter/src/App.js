import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import Search from "./Search";

const App = ()=> {
  return <div className="app">
      <BrowserRouter>
        <Routes>
          <Route 
          exact
          path="/"
          element={<Bookshelf></Bookshelf>}
          />
          <Route
            exact
            path="/search"
            element={<Search></Search>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  ;
};

export default App;
