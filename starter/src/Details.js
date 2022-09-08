import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import BookCover from "./BookCover";

const Details = () =>{
    const {id} = useParams();
    const [book, setBook] = useState({});
    const [bookLoaded, setLoaded] = useState(false);
    const [showFullDesc, setShowFullDesc] = useState(false);

    useEffect(()=>{
        const getBook = async () =>{
            const res = await BooksAPI.get(id);
            setBook(res);
            setLoaded(true);
        };
        getBook();
    }, [id]);

    let date = new Date(book.publishedDate);
    return (bookLoaded && (
        <div>
        <div>            
            <Link className="close-details" to="/"></Link>
        </div>
        <div style={{padding:25}}>
            <BookCover url={book.imageLinks.thumbnail}></BookCover>
            <h2>{book.title}</h2>
            <h5>{book.authors.map((auth)=><span key={auth}>{auth}</span>)}</h5>
            <div>
                <i>
                    {showFullDesc ? 
                        (
                            <div>
                                {book.description}
                                <br/>
                                <span className="more-less-btn" onClick={() => setShowFullDesc(false)}>less</span>
                            </div>
                        ) 
                        :                    
                        (
                            <div>{
                                book.description.substring(0, 100)}
                                ...<span className="more-less-btn" onClick={() => setShowFullDesc(true)}>more</span>
                            </div>
                        )
                    }
                    
                </i>
            </div>
            <span>
                <ul style={{listStyleType:"none", paddingLeft:0}}>
                    {book.subtitle && book.subtitle !== "" ? 
                        <li><b>Subtitle: </b>{book.subtitle}</li> 
                        : 
                        <span></span>
                    }
                    <li>
                        <b>Published: </b>{date.toLocaleString('default', {month: 'long', day:'numeric', year:'numeric'})}
                    </li>
                    <li>
                        <b>Publisher: </b>{book.publisher}
                    </li>
                    <li>
                        <b>Pages: </b>{book.pageCount}                        
                    </li>
                    <li>
                        <b>Categories: </b>
                        <ul>
                            {book.categories.map((c)=><li key={c}>{c}</li>)}
                        </ul>
                    </li>
                    <li>
                        <a href={book.infoLink} target="_blank" rel="noreferrer">
                             Purchase it here...
                        </a>
                    </li>
                </ul>
            </span>
        </div>
    </div>
    ))
};

export default Details;