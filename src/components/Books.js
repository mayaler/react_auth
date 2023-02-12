import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h1> Example of React Map Loop </h1>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>

        {books.map((book, index) => (
          <tbody>
            <tr data-index={index}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
