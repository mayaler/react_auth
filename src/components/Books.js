import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://auth-backend-one.vercel.app/find",
    };

    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setBooks(result);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  return (
    <div className='container'>
      <h1> Example of React Map Loop </h1>

      {books.map((book) => (
        <li>{book.title}</li>
      ))}
    </div>
  );
}
