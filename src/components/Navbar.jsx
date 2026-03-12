import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../../assets/RavenDOS final-01.png';

export default function Navbar({ onContactClick }) {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.4)',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6 pointer-events-none">
      <div
        ref={navRef}
        className="pointer-events-auto flex items-center justify-between px-8 py-3.5 w-full max-w-6xl transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.4)',
        }}
      >
        {/* Logo */}
        <img src={logo} alt="RavenDOS" className="h-8 w-auto object-contain" />

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center text-sm font-sans font-medium">
          <a href="#capabilities" className="text-primary/70 hover:text-primary transition-colors duration-200">
            Capabilities
          </a>
          <a href="#products" className="text-primary/70 hover:text-primary transition-colors duration-200">
            Products
          </a>
          <a href="#vision" className="text-primary/70 hover:text-primary transition-colors duration-200">
            Vision
          </a>
          <a href="#technology" className="text-primary/70 hover:text-primary transition-colors duration-200">
            Technology
          </a>
        </div>

        {/* CTA Button */}
        <button onClick={onContactClick} className="px-5 py-2.5 rounded-xl font-sans font-semibold text-sm bg-primary text-white hover:bg-primary/90 transition-all duration-200">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
