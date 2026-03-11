import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Products from './components/Products';
import Vision from './components/Vision';
import Technology from './components/Technology';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-primary text-background overflow-hidden relative font-sans">
      <Navbar />
      <Hero />
      <Capabilities />
      <Products />
      <Vision />
      <Technology />
      <Footer />
    </main>
  );
}

export default App;
