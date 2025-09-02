
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Portfolio />
        <Services />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;