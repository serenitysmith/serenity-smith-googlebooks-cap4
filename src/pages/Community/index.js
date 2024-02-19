
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./style.css";

function Community() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSendMessage = () => {
    if (editIndex !== null) {
      const updatedMessages = [...messages];
      updatedMessages[editIndex].text = newMessage;
      setMessages(updatedMessages);
      setEditIndex(null);
    } else {
      setMessages([
        ...messages,
        { text: newMessage, date: new Date(), replies: [] },
      ]);
    }

    // Clear the input field directly after updating the state
    setNewMessage("");
  };

  const handleEditMessage = (index) => {
    setEditIndex(index);
    setNewMessage(messages[index].text);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    setEditIndex(null);
  };

  const handleReply = (index, replyText) => {
    const updatedMessages = [...messages];
    updatedMessages[index].replies.push({
      text: replyText,
      date: new Date(),
    });
    setMessages(updatedMessages);
  };

  return (
    <Container className="main-community-container">
      <h1 className="com">Community</h1>

      <Row className="message-container">
        {messages.map((message, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="chat-card" style={{ fontFamily: 'Pacifico' }}>
              <Card.Body>
                <Card.Text className="message-text">{message.text}</Card.Text>
                <Card.Text className="posted-date">
                  Posted on {message.date.toLocaleString()}
                </Card.Text>

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

                {message.replies.map((reply, replyIndex) => (
                  <div key={replyIndex} className="reply-container">
                    <div className="reply-text">{`Reply: ${reply.text}`}</div>
                    <div className="posted-date">
                      {`Posted on ${reply.date.toLocaleString()}`}
                    </div>
                  </div>
                ))}

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

export default Community;

