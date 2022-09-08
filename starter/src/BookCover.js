import PropTypes from "prop-types";

const BookCover = ({url}) =>{
    return <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: 'url("'+ url +'")',
                }}>
            </div>
};

BookCover.propTypes = {
    url: PropTypes.string.isRequired
};

export default BookCover;