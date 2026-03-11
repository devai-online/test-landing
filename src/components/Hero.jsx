import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight } from 'lucide-react';

// Interactive Gradient Orbs Background
function InteractiveBackground() {
  const containerRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Gentle float for secondary orbs
    gsap.to(orb2Ref.current, {
      y: '+=30',
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(orb3Ref.current, {
      y: '-=25',
      x: '+=20',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Main orange orb follows mouse directly across the hero
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Orange orb follows mouse with smooth lag
      gsap.to(orb1Ref.current, {
        left: x - 300,
        top: y - 300,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: true,
      });

      // Other orbs react subtly in opposite directions
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(orb2Ref.current, {
        x: mx * -50,
        y: my * -30,
        duration: 2,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      gsap.to(orb3Ref.current, {
        x: mx * 40,
        y: my * 25,
        duration: 2.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Orb 1 - Main orange, follows mouse */}
      <div
        ref={orb1Ref}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,131,84,0.55) 0%, rgba(239,131,84,0.3) 25%, rgba(239,131,84,0.1) 50%, transparent 70%)',
          filter: 'blur(50px)',
          willChange: 'left, top',
          pointerEvents: 'none',
        }}
      />

      {/* Orb 2 - Blue-gray, top right */}
      <div
        ref={orb2Ref}
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,93,117,0.35) 0%, rgba(79,93,117,0.15) 30%, rgba(79,93,117,0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />

      {/* Orb 3 - Peach, bottom */}
      <div
        ref={orb3Ref}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '25%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,131,84,0.3) 0%, rgba(255,170,128,0.15) 30%, transparent 60%)',
          filter: 'blur(55px)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [title1Ref.current, title2Ref.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        0.4
      )
      .fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.8
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20" style={{ backgroundColor: '#ffffff' }}>
      {/* Interactive Gradient Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <InteractiveBackground />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center">
          {/* Headlines */}
          <h1 className="flex flex-col gap-2">
            <span ref={title1Ref} className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight leading-[1.1]">
              RavenDOS
              <span className="block font-sans font-normal text-sm tracking-normal mt-1" style={{ color: '#000000' }}>(Formerly DevAI)</span>
            </span>
            <span
              ref={title2Ref}
              className="font-drama italic text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.2]"
              style={{
                background: 'linear-gradient(135deg, #ef8354 0%, #ffaa80 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Intelligence, Architected
            </span>
          </h1>

          {/* Subtitle */}
          <p ref={subtextRef} className="mt-6 text-lg md:text-xl text-primary/60 max-w-2xl leading-relaxed">
            Building AI-powered platforms and scalable software infrastructure designed to solve real-world problems.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 rounded-xl font-sans font-semibold text-base bg-accent text-white hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl font-sans font-semibold text-base bg-transparent border-2 border-primary/10 text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
