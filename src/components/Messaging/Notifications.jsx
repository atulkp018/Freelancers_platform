import React, { useEffect, useState } from "react";
import { messaging } from "../../services/firebaseConfig";
import { onMessage } from "firebase/messaging";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      setNotifications((prev) => [...prev, payload.notification]);
    });
    return () => unsubscribe();
  }, []);

  const onClear = () => {
    setNotifications([]);
  };

  if (!notifications.length) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
      <p className="text-sm font-medium">{notifications.length} new message(s)</p>
      <button
        onClick={onClear}
        className="mt-2 px-3 py-1 bg-blue-700 rounded hover:bg-blue-800"
      >
        Clear
      </button>
    </div>
  );
};

export default Notifications;
