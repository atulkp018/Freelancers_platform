import { database } from './firebaseConfig';
import { ref, push, onValue } from 'firebase/database';

export const sendMessage = async (messageData) => {
  const messagesRef = ref(database, 'messages');
  await push(messagesRef, messageData);
};

export const getMessages = (callback) => {
  const messagesRef = ref(database, 'messages');
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const messages = data ? Object.values(data) : [];
    callback(messages);
  });
};
