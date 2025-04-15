// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import PlatformPreview from "./components/PlatformPreview";
import Timeline from "./components/Timeline";
import CoreFeatures from "./components/CoreFeatures";
import CallToAction from "./components/CallToAction";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MessageView from "./pages/MessageView";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <div className="bg-[#0a0a0a] text-white">
                <Hero />
                <PlatformPreview />
                <Timeline />
                <CoreFeatures />
                <CallToAction />
              </div>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/message"
            element={
              <PrivateRoute>
                <MessageView />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
