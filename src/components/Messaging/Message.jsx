import React from "react";
import clsx from "clsx";

const Message = ({ message }) => {
  const isSender = message.sender === "you";

  return (
    <div
      className={clsx(
        "flex",
        isSender ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={clsx(
          "px-4 py-2 rounded-lg max-w-sm text-sm",
          isSender ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        )}
      >
        {message.text}
      </div>
    </div>
  );
};

export default Message;
