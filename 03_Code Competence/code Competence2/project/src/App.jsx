// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
