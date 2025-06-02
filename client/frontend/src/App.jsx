import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schools from "./pages/services/Schools";
import './App.css'
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import StudyDestination from "./pages/explore/StudyDestination";
import Students from "./pages/services/Students";
import RecruitmentPartners from "./pages/services/RecruitmentPartners";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

// import Contact from "./pages/Contact";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/international-students" element={<Students />} />
          <Route path="/recruitment-partners" element={<RecruitmentPartners />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/international-students/signup" element={<SignupPage userType="student" />} />
          <Route path="/recruitment-partners/signup" element={<SignupPage userType="recruiter" />} />
          <Route path="/partner-institutions/signup" element={<SignupPage userType="institution" />} />
          <Route path="/explore/destinations/:country" element={<StudyDestination />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
