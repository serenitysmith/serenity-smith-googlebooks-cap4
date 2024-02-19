import React, { useState } from "react";

function Community() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSendMessage = () => {
    if (editIndex !== null) {
      // If editing, update the existing message
      const updatedMessages = [...messages];
      updatedMessages[editIndex].text = newMessage;
      setMessages(updatedMessages);
      setEditIndex(null); // Clear the edit state
    } else {
      // If not editing, add a new message
      setMessages([
        ...messages,
        { text: newMessage, date: new Date(), replies: [] },
      ]);
    }

    // Clear the input field
    setNewMessage("");
  };

  const handleEditMessage = (index) => {
    // Set the editing state and populate the input field
    setEditIndex(index);
    setNewMessage(messages[index].text);
  };

  const handleDeleteMessage = (index) => {
    // Delete the message at the specified index
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    setEditIndex(null); // Clear the edit state
  };

  const handleReply = (index, replyText) => {
    // Add a reply to the message at the specified index
    const updatedMessages = [...messages];
    updatedMessages[index].replies.push({
      text: replyText,
      date: new Date(),
    });
    setMessages(updatedMessages);
  };

  return (
    <div className="main-comunity-div">
      <h1 className="com">Community</h1>
     
      {/* Display community discussions */}
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index}>
            <div className="message-text">{message.text}</div>
            <div className="posted-date">{`Posted on ${message.date.toLocaleString()}`}</div>

            {/* Edit and Delete buttons */}
            <button onClick={() => handleEditMessage(index)} className="button">
              Edit
            </button>
            <button
              onClick={() => handleDeleteMessage(index)}
              className="button"
            >
              Delete
            </button>

            {/* Display replies */}
            {message.replies.map((reply, replyIndex) => (
              <div key={replyIndex}>
                <div>{`Reply: ${reply.text}`}</div>
                <div>{`Posted on ${reply.date.toLocaleString()}`}</div>
              </div>
            ))}

            {/* Reply input and message  field */}
            <div >
              <input
                className="  input-reply "
                type="text"
                placeholder="Reply..."
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                onClick={() => handleReply(index, newMessage)}
                className="button"
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input field for new messages */}
      <div>
        <input
          className="input-container"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="button">
          {editIndex !== null ? "Update" : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Community;