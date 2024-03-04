// Importing necessary modules from react-bootstrap and React
import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';

// Defining the functional component Search
const Search = () => {
  // State to manage the search term and the list of books
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  // Function to fetch books based on the search term
  const getBooks = async (book) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
    const data = await response.json();
    return data;
  };

  // Function to draw the list of books based on the fetched data
  const drawListBook = async () => {
    if (searchTerm.trim() !== "") {
      const data = await getBooks(searchTerm);
      if (data.error) {
        // Display an error message if there's a limit exceeded
        setBooks([<div key="error" className='prompt'>ツ Limit exceeded! Try after some time</div>]);
      } else if (data.totalItems === 0) {
        // Display a message if no results are found
        setBooks([<div key="no-results" className='prompt'>ツ No results, try a different term!</div>]);
      } else {
        // Set the list of books based on the fetched data
        setBooks(data.items.map((item, index) => (
          <Col key={index} xs={24} sm={20} md={7} lg={2}>
            {/* Card component for displaying each book */}
            <Card className='book-item'>
              {/* Image for the book cover */}
              <Card.Img
                variant='top'
                src={item.volumeInfo.imageLinks?.thumbnail || 'placeholder_image_url'}
                alt={item.volumeInfo.title}
              />
              <Card.Body>
                {/* Title of the book */}
                <Card.Title>{item.volumeInfo.title}</Card.Title>
                {/* Author information */}
                <Card.Text>
                  <strong>Author:</strong> {item.volumeInfo.authors && item.volumeInfo.authors.join(', ')}
                </Card.Text>
                {/* Published date of the book */}
                <Card.Text>
                  <strong>Publish Date:</strong> {item.volumeInfo.publishedDate || 'N/A'}
                </Card.Text>
                {/* Button to view more information about the book */}
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
      // Clear the list of books if the search term is empty
      setBooks([]);
    }
  };

  // useEffect to trigger drawing the list of books when the search term changes
  useEffect(() => {
    drawListBook();
  }, [searchTerm]);

  // Function to handle changes in the search input
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    drawListBook();
  };

  // JSX structure for rendering the component
  return (
    <div>
      {/* Form for user input and submission */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='fullSearch'>
          <Form.Label>Full search</Form.Label>
          {/* Input field for the search term */}
          <Form.Control type='text' placeholder='Search for a book' name='fullSearch' onChange={handleChange} />
        </Form.Group>
        <hr />
        {/* Button to submit the form */}
        <Button variant='outline-dark' type='submit'>
          Search
        </Button>
      </Form>

      {/* Row for displaying the list of books */}
      <Row className='search'>{books}</Row>
    </div>
  );
};

// Exporting the Search component as the default export
export default Search;
