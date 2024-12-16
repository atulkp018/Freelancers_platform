import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesComponent } from "./routes";
import { AuthProvider } from "./contexts/AuthProvider";
import { TaskProvider } from "./contexts/TaskProvider";
import { ChatProvider } from "./contexts/ChatProvider";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <TaskProvider>
          <ChatProvider>
            <div className="min-h-screen bg-gray-100 text-gray-800">
              <RoutesComponent />
            </div>
          </ChatProvider>
        </TaskProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
