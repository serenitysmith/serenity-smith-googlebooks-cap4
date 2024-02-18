import { Container, Row, Col } from "react-bootstrap";



import "./style.css";

const Home = () => {
  return (
    <div className="App-Home">
      <Container className="App-home-container">
        <Row>
          <Col>
            <div className="App-home-text">
             
              <h1>Your personal book library</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
