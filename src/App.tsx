import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'services':
        return <Services setActivePage={setActivePage} />;
      case 'contact':
        return <Contact setActivePage={setActivePage} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <main className="transition-opacity duration-300">
        {renderPage()}
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
