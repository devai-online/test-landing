import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Capabilities from './components/Capabilities';
import Products from './components/Products';
import Vision from './components/Vision';
import Technology from './components/Technology';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-primary text-background overflow-hidden relative font-sans">
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Hero onContactClick={() => setContactOpen(true)} />

      <Capabilities />
      <Products />
      <Vision />
      <Technology />
      <Partners />
      <Footer onContactClick={() => setContactOpen(true)} />
    </main>
  );
}

export default App;
