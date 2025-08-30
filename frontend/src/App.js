import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Reviews from "./pages/Reviews";
// import Blog from "./pages/Blog";
import Architecture from "./pages/services/Architecture";
import Hospitality from "./pages/services/Hospitality";
import Interior from "./pages/services/Interior";
import Land from "./pages/services/Land";
import Mep from "./pages/services/Mep";
import Road from "./pages/services/Road";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
            <Route path="/reviews" element={<Reviews />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
  <Route path="/services/road" element={<Road />} />
        <Route path="/services/architecture" element={<Architecture />} />
        <Route path="/services/land" element={<Land />} />
        <Route path="/services/hospitality" element={<Hospitality />} />
        <Route path="/services/interior" element={<Interior />} />
        <Route path="/services/mep" element={<Mep />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
