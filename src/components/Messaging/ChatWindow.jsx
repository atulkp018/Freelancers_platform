import React, { useState, useEffect } from "react";
import Message from "./Message";
import { db } from "../../services/firebaseConfig";
import { ref, push, onValue } from "firebase/database";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = data
        ? Object.values(data)
        : [];
      setMessages(loadedMessages);
    });
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const messagesRef = ref(db, "messages");
      push(messagesRef, { text: input, sender: "you", timestamp: Date.now() });
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className="flex items-center p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSend}
          className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
