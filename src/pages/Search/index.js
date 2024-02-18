import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './style.css';
import BookList from '../../components/BookList'
function BookList (props) {

  
  <div className="book-list">
    {props.books && ((props.books.totalItems > 0)
      ?
      (<Row xs={1} md={4} className="book-list">
        {props.books.items.map((item, index) => {
          return (
            <Col key={index}>
              <BookList item={item} />
            </Col>)
}) }
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  
  

           
          </Row>): <div className="prompt">No results, try a different term!</div>)}
          
         </div>}   
        
  async function getBooks(book) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
    const data = await response.json();
    return data;
  }

  const extractThumbnail = ({ imageLinks }) => {
    const DEFAULT_THUMBNAIL = "icons/logo.svg";
    if (!imageLinks || !imageLinks.thumbnail) {
      return DEFAULT_THUMBNAIL;
    }
    return imageLinks.thumbnail.replace("http://", "https://");
  };

  const drawBookList = (bookData) => {
    return bookData.items.map(({ volumeInfo }) => (
      <div className="App-search-book-list" key={volumeInfo.title}>
        <a href={volumeInfo.previewLink} target='_blank' rel="noopener noreferrer">
          <img className='thumbnail' src={extractThumbnail(volumeInfo)} alt='cover' />
        </a>
        <div className="App-search-book-list">
          <h3 className='book-title'>
            <a href={volumeInfo.previewLink} target='_blank' rel="noopener noreferrer">
              {volumeInfo.title}
            </a>
          </h3>
          <div className='App-search-book-list'>{volumeInfo.authors}</div>
          <div className='App-search-book-list'>{volumeInfo.categories || "Others"}</div>
        </div>
      </div>
    ));
  };

  const drawListBook = async () => {
    if (searchTerm.trim() !== "") {
      const data = await getBooks(searchTerm);
      if (data.error) {
        setBooks([<div className='prompt'>ツ Limit exceeded! Try after some time</div>]);
      } else if (data.totalItems === 0) {
        setBooks([<div className='prompt'>ツ No results, try a different term!</div>]);
      } else {
        setBooks(drawBookList(data));
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

      <input
        type='text'
        id='search-box'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search books...'
      />
      <div className='search'>{books}</div>
    </div>
  );
};

export default Search;
