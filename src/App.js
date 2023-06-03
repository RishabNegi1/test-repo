import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import Timeline from './Components/Timeline';
import Gall from './Components/Gall';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Banner/>
      <Routes>
      <Route path='/gal' element={<Gall/>} />
      </Routes>
      <Gallery/>
      <Timeline/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
