import PropTypes from "prop-types";
import Book from "./Book";
const List = ({books, title, onShelfChange}) =>{
    return <div>
        {!title ? 
            (<></>) 
            : 
            (<h2 className="bookshelf-title">{title}</h2>)
        }     
        <div className="bookshelf-books">
            <ol className="books-grid">
            {books.map((book) =>
                <Book key={book.id} book={book} onShelfChange={onShelfChange}></Book>
            )}
            </ol>
        </div>    
        
    </div>
};
List.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string
};
export default List;