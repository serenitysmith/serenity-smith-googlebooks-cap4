import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';

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
        setBooks([<div key="error" className='prompt'>ツ Limit exceeded! Try after some time</div>]);
      } else if (data.totalItems === 0) {
        setBooks([<div key="no-results" className='prompt'>ツ No results, try a different term!</div>]);
      } else {
        setBooks(data.items.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className='book-item'>
              <Card.Img
                variant='top'
                src={item.volumeInfo.imageLinks?.thumbnail || 'placeholder_image_url'}
                alt={item.volumeInfo.title}
              />
              <Card.Body>
                <Card.Title>{item.volumeInfo.title}</Card.Title>
                <Card.Text>
                  <strong>Author:</strong> {item.volumeInfo.authors && item.volumeInfo.authors.join(', ')}
                </Card.Text>
                <Card.Text>
                  <strong>Publish Date:</strong> {item.volumeInfo.publishedDate || 'N/A'}
                </Card.Text>
                <Button variant='dark' href={item.volumeInfo.infoLink} target='_blank' rel='noopener noreferrer'>
                  More Info
                </Button>
                {/* Add your "Add to Cart" or similar button here */}
              </Card.Body>
            </Card>
          </Col>
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
        <Form.Group controlId='fullSearch'>
          <Form.Label>Full search</Form.Label>
          <Form.Control type='text' placeholder='Search for a book' name='fullSearch' onChange={handleChange} />
        </Form.Group>
        <hr />
        <Button variant='outline-dark' type='submit'>
          Search
        </Button>
      </Form>

      <Row className='search'>{books}</Row>
    </div>
  );
};

export default Search;
