import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schools from "./pages/services/schools";
import './App.css'

// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/schools" element={<Schools />} />
          </Routes>
    </Router>
  );
}

export default App;
