import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import List from "./List";

const Bookshelf = () =>{
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
        const res = await BooksAPI.update(book, shelf);
    };

    const onShelfChange = (event, book) =>{
        var newShelf = event.currentTarget.value;
        updateBook(book, newShelf);
        getAllBooks();
    };

    return <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div className="bookshelf">
                <List title="Currently Reading" books={currentlyReading} onShelfChange={onShelfChange}></List>
                <List title="Want To Read" books={wantToRead} onShelfChange={onShelfChange}></List>
                <List title="Read" books={read} onShelfChange={onShelfChange}></List>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
    </div>
};

export default Bookshelf;