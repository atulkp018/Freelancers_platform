import React, { useState } from 'react';
import ChatWindow from '../components/Chat/ChatWindow';
import Notifications from '../components/Chat/Notifications';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = { sender: 'you', text };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleNewMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
    setNotifications((prev) => [...prev, 'New message']);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-4">Chat Page</h1>
      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
      <Notifications notifications={notifications} onClear={clearNotifications} />
    </div>
  );
};

export default ChatPage;
