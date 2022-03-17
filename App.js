
import './App.css';
import Navigation from '../src/components/Navigation/Navigation'
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import Contact from '../src/components/Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Information from './components/Info/Information';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="content-wrapper">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Information />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className='p-5'>
           
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
