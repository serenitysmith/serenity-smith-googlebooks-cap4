// Importing necessary modules and styles
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./style.css";

// Defining the functional component Community
function Community() {
  // State variables to manage messages, new messages, and editing index
  const [messages, setMessages] = useState([]); // Array to store messages
  const [newMessage, setNewMessage] = useState(""); // String to store new message
  const [editIndex, setEditIndex] = useState(null); // Index to track the message being edited

  // Function to handle sending or updating a message
  const handleSendMessage = () => {
    if (editIndex !== null) {
      // If editing, update the existing message
      const updatedMessages = [...messages];
      updatedMessages[editIndex].text = newMessage;
      setMessages(updatedMessages);
      setEditIndex(null); // Reset edit index after updating
    } else {
      // If not editing, add a new message
      setMessages([
        ...messages,
        { text: newMessage, date: new Date(), replies: [] },
      ]);
    }

    // Clear the input field directly after updating the state
    setNewMessage("");
  };

  // Function to handle editing a message
  const handleEditMessage = (index) => {
    setEditIndex(index);
    setNewMessage(messages[index].text);
  };

  // Function to handle deleting a message
  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    setEditIndex(null); // Reset edit index after deleting
  };

  // Function to handle replying to a message
  const handleReply = (index, replyText) => {
    const updatedMessages = [...messages];
    updatedMessages[index].replies.push({
      text: replyText,
      date: new Date(),
    });
    setMessages(updatedMessages);
  };

  // JSX structure for rendering the component
  return (
    <Container className="main-community-container">
      <h1 className="com">Community</h1>

      <Row className="message-container">
        {/* Mapping through messages to display each one */}
        {messages.map((message, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            {/* Card component for displaying individual messages */}
            <Card className="chat-card" style={{ fontFamily: 'Pacifico' }}>
              <Card.Body>
                <Card.Text className="message-text">{message.text}</Card.Text>
                <Card.Text className="posted-date">
                  Posted on {message.date.toLocaleString()}
                </Card.Text>

                {/* Button container for Edit and Delete buttons */}
                <div className="button-container">
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleEditMessage(index)}
                    className="button"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDeleteMessage(index)}
                    className="button"
                  >
                    Delete
                  </Button>
                </div>

                {/* Mapping through replies to display each one */}
                {message.replies.map((reply, replyIndex) => (
                  <div key={replyIndex} className="reply-container">
                    <div className="reply-text">{`Reply: ${reply.text}`}</div>
                    <div className="posted-date">
                      {`Posted on ${reply.date.toLocaleString()}`}
                    </div>
                  </div>
                ))}

                {/* Input container for replying to a message */}
                <div className="reply-input-container">
                  <Form.Control
                    type="text"
                    placeholder="Reply..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="input-reply"
                  />
                  <Button
                    variant="outline-success"
                    onClick={() => handleReply(index, newMessage)}
                    className="button"
                  >
                    Reply
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Container for a new message input */}
      <div className="new-message-container">
        <Form.Control
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="input-container smaller-input"
        />
        <Button
          variant="info"
          onClick={handleSendMessage}
          className="button"
        >
          {editIndex !== null ? "Update" : "Send"}
        </Button>
      </div>
    </Container>
  );
}

// Exporting the Community component as the default export
export default Community;
