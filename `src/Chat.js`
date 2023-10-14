import React, { useState } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the backend API to run the Python script and get the response
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    setResponse(data.response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      <div>{response}</div>
    </div>
  );
};

export default Chat;
