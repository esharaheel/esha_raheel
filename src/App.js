import "./style/styles.css";
import Header from "./Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/esha_raheel" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/contact_me" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
