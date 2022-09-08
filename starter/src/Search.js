import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";
const Search = ({onShelfChange}) =>{
    const [value, setValue] = useState("");
    const [books, setBooks] = useState([]);
    const searchForValue = async (val) =>{
        setValue(val.trim());
        const res = await BooksAPI.search(val, 20);
        setBooks(res);
    };
    return <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/"></Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={value}
          onChange={(event)=> searchForValue(event.currentTarget.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {books.length > 0 ? (
            books.map((book) =>
            <Book key={book.id} book={book} onShelfChange={onShelfChange}></Book>
        )) : (
            <></>
        )}
      </ol>
    </div>
  </div>
};

Search.propTypes = {
    onShelfChange: PropTypes.func
}

export default Search;