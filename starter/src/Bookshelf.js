import { Link } from "react-router-dom";
import List from "./List";
import PropTypes from "prop-types";

const Bookshelf = ({onShelfChange, currentlyReading, wantToRead, read}) =>{
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

Bookshelf.propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    currentlyReading: PropTypes.array,
    wantToRead: PropTypes.array,
    read: PropTypes.array
}

export default Bookshelf;