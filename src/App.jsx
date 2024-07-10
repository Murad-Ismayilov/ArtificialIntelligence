import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './containers/Home';
import About from './containers/About';
import Services from './containers/Services';
import Blog from './containers/Blog';
import Contact from './containers/Contact';


import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
