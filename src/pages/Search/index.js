import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const getBooks = async (book) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
    const data = await response.json();
    return data;
  };

  const drawListBook = async () => {
    if (searchTerm.trim() !== "") {
      const data = await getBooks(searchTerm);
      if (data.error) {
        setBooks([<div className='prompt'>ツ Limit exceeded! Try after some time</div>]);
      } else if (data.totalItems === 0) {
        setBooks([<div className='prompt'>ツ No results, try a different term!</div>]);
      } else {
        setBooks(data.items.map((item, index) => (
          
          <div key={index} className='book'>
            <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
            <h3>{item.volumeInfo.title}</h3>
            <p>{item.volumeInfo.authors}</p>
            <p>{item.volumeInfo.publishedDate}</p>
            <p>{item.volumeInfo.description}</p>
          </div>
        )));
      }
    } else {
      setBooks([]);
    }
  };

  useEffect(() => {
    drawListBook();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    drawListBook();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullSearch">
          <Form.Label>Full search</Form.Label>
          <Form.Control type="text" placeholder="Search for a book" name="fullSearch" onChange={handleChange} />
        </Form.Group>
        <hr />
        <Button variant="outline-dark" type="submit">
          Search
        </Button>
      </Form>

      <div className='search'>{books}</div>
    </div>
  );
};

export default Search;
