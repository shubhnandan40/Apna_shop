import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import FAQ from './pages/Faq';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Products from './pages/Product';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/clothing' element={<Clothing/>} /> */}
          <Route path='/products' element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div> 
      <Footer />
    </>
  );
}

export default App;
