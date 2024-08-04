

import './csspage/Header.css';
import './csspage/Home.css';
import './App.css';
import './csspage/Footer.css';
import './csspage/Hardwood.css';
import './csspage/Contact.css';

import Header from './componant/Header';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Hardwood from './pages/Hardwood';
import Vinyl from './pages/Vinyl';
import Laminate from './pages/Laminate';
import Footer from './componant/Footer';
import Carpet from './pages/Carpet';
import Tiles from './pages/Tiles';
import Contact from './pages/Contact';





function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Carpet" element={<Carpet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Hardwood" element={<Hardwood />} />
          <Route path="/" element={<Home />} />
          <Route path="/Laminate" element={<Laminate />} />
          <Route path="/Tiles" element={<Tiles />} />
          <Route path="/Vinyl" element={<Vinyl />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
