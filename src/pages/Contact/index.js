import React, { useRef } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelopeOpenText, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Log a message to the console indicating the email would be sent
    console.log("Email would be sent:", form.current);

    // Display an alert indicating that the email has been "sent"
    alert("Message sent! We'll be in touch soon.");

    // Reset the form
    form.current.reset();
  };

  return (
    <div className='contact'>
      <h1 className='py-3'>We'd love to hear from you</h1>
      <div className="container mt-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={8} lg={6}>
            <Form className="ContactForm" ref={form}>
              {/* Your form fields go here */}
              <Form.Group controlId="formLocation">
                <Form.Label>
                  <FontAwesomeIcon icon={faLocationDot} /> Your Location
                </Form.Label>
                <Form.Control type="text" placeholder="Enter your location" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} /> Your Email
                </Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>
                  <FontAwesomeIcon icon={faPhoneFlip} /> Your Phone Number
                </Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={sendEmail}>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;

