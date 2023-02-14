import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://nodejs-mongodb-react-auth-app.herokuapp.com/find",
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        // assign the message in our result to the message we initialized above
        setBooks(result.data);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  return (
    <div className='container'>
      {/* <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead> */}

      {books.map((book, index) => (
        <div className='card'>
          <img src={book.imageUrl} alt={book.title} className='card-img' />
          <div className='card-content'>
            <h2 className='card-title'>{book.title}</h2>
            <p className='card-text'>{book.description}</p>
            <a href={book.link} className='card-btn'>
              {book.buttonText}
            </a>
          </div>
        </div>
        //   <tbody>
        //     <tr data-index={index}>
        //       <td>{book._id}</td>
        //       <td>{book.title}</td>
        //       <td>{book.author}</td>
        //     </tr>
        //   </tbody>
      ))}
      {/* </table> */}
    </div>
  );
}
