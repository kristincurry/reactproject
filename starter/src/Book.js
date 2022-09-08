import PropTypes from "prop-types";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import BookCover from "./BookCover";

const Book = ({book, onShelfChange}) =>{
    const onChangeSelf = (event) =>{
        onShelfChange(event, book);
    };
    return<li>
        <div className="book">
            <div className="book-top">
                <Link to={`/details/${book.id}`}>
                    <BookCover url={book.imageLinks.thumbnail}></BookCover>
                </Link>
                <Menu val={book.shelf} onShelfChange={onChangeSelf}></Menu>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{
                book.authors.map((author, index)=>
                    <span key={author}>{author + (index < book.authors.length - 1 ? ", " : "")}</span>
                )
            }</div>
        </div>
    </li>
};

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;