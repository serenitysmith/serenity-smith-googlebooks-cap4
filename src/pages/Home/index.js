// Importing necessary modules and styles
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

// Defining the functional component Home
const Home = () => {
  // JSX structure for rendering the component
  return (
    <div className="App-Home">
      {/* Container component for layout structure */}
      <Container className="App-home-container">
        {/* Row component for organizing content in a horizontal row */}
        <Row>
          {/* Col component for organizing content in a vertical column */}
          <Col>
            <div className="App-home-text">
              {/* Heading for the home page */}
              <h1>Your personal book library</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Exporting the Home component as the default export
export default Home;

