
import Navbar from './navbar';
//import Home from './Home';
import Hero from './Hero';
import Gallery from './Gallery';
import ContactBanner from './Contact';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Aboutme';
//import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
  
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<ContactBanner />} />
  <Route path="/aboutme" element={<AboutMe/>} />
</Routes>
        </div>
        <Hero />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
