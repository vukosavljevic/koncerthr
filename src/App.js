import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import React  from 'react';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollingMenu from './components/InfiniteScroll';

function App() {  
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Gallery />
      <ScrollingMenu />
      <Services />
      <Contact />
       <Footer />
    </div>
  );
}

export default App;
