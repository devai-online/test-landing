import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(5, 5, 5, 0.8)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(230, 59, 46, 0.2)',
          duration: 0.3,
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0)',
          duration: 0.3,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between px-8 py-3 rounded-[2rem] w-[90%] max-w-6xl bg-transparent transition-colors duration-300">
        <div className="text-xl font-sans font-bold text-background tracking-tight">
          RavenDOS
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-sans font-semibold text-background/80 tracking-wide">
          <a href="#capabilities" className="hover:text-accent transition-colors hover-lift">Capabilities</a>
          <a href="#products" className="hover:text-accent transition-colors hover-lift">Products</a>
          <a href="#vision" className="hover:text-accent transition-colors hover-lift">Vision</a>
          <a href="#technology" className="hover:text-accent transition-colors hover-lift">Technology</a>
        </div>
        <button className="magnetic-btn bg-accent text-primary px-6 py-2.5 rounded-full font-sans font-semibold text-sm hover:brightness-110 flex items-center justify-center overflow-hidden relative group">
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-10">Contact Us</span>
          <span className="absolute inset-0 flex items-center justify-center z-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 text-primary">Contact Us</span>
        </button>
      </div>
    </nav>
  );
}
