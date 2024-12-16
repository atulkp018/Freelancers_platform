import { messaging } from './firebaseConfig';
import { getToken, onMessage } from 'firebase/messaging';

export const requestPermissionAndGetToken = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
    if (token) {
      console.log('FCM Token:', token);
      // Send token to your backend for notification management
    }
  } catch (err) {
    console.error('Unable to get permission for notifications:', err);
  }
};

export const listenForNotifications = () => {
  onMessage(messaging, (payload) => {
    console.log('Notification received:', payload);
    // Display notification UI or alert
  });
};
