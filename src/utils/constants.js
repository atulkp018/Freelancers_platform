export const AWS_REGION = process.env.VITE_AWS_REGION || "us-east-1";

export const FIREBASE_CONFIG = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

export const APP_ROUTES = {
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PROJECT_DETAILS: "/project/:id",
};

export const NOTIFICATION_TYPES = {
  MESSAGE: "message",
  ALERT: "alert",
  REMINDER: "reminder",
};

export const AWS_S3_BUCKET_NAME = process.env.VITE_AWS_S3_BUCKET_NAME;
