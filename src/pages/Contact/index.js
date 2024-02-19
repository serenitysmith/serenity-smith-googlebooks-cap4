

import React, { useRef } from 'react';
import { Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelopeOpenText, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    email.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert("Message sent!");
      }, function (error) {
        console.log(error.text);
        alert("Message failed, try again!");
      });
    form.current.reset();
  };

  const rowwidth = { width: '100%', maxWidth: '450px' };

  return (
    <div>
      <h1 className='py-3'>We'd love to hear from you</h1>
      <div className="container mt-5">
        <div className="Row">
          <Form className="ContactForm" ref={form}>
            {/* Your form fields go here */}
            <Form.Group as={Row} controlId="formLocation">
              <FontAwesomeIcon icon={faLocationDot} />
              <Form.Control type="text" placeholder="Your Location" />
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group as={Row} controlId="formPhone">
              <FontAwesomeIcon icon={faPhoneFlip} />
              <Form.Control type="tel" placeholder="Your Phone Number" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={sendEmail}>
              Send Message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
