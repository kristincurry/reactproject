import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import Search from "./Search";
import Details from "./Details";

const App = ()=> {
  const currentlyReadingShelfName = "currentlyReading";
  const wantToReadShelfName = "wantToRead";
  const readShelfName = "read";

  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(()=>{        
      getAllBooks();
  }, []);

  const getAllBooks = async () =>{
      const res = await BooksAPI.getAll();
      setCurrentlyReading(res.filter((book)=> book.shelf === currentlyReadingShelfName));
      setWantToRead(res.filter((book)=> book.shelf === wantToReadShelfName));
      setRead(res.filter((book)=> book.shelf === readShelfName));
  };

  const updateBook = async (book, shelf) =>{
      await BooksAPI.update(book, shelf);
  };

  const onShelfChange = async (event, book) =>{
      var newShelf = event.currentTarget.value;
      await updateBook(book, newShelf);
      await getAllBooks();
  };
  return <div className="app">
      <BrowserRouter>
        <Routes>
          <Route 
          exact
          path="/"
          element={<Bookshelf onShelfChange={onShelfChange} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read}></Bookshelf>}
          />
          <Route
            exact
            path="/search"
            element={<Search onShelfChange={onShelfChange}></Search>}
          />
          <Route
            path="/details/:id"
            element={<Details></Details>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  ;
};

export default App;
