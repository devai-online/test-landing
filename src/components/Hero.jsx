import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight } from 'lucide-react';

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
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 },
        0.2
      )
      .fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.6
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.8
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-[100dvh] overflow-hidden flex items-end padding-b pb-[15vh]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80"
          alt="Dark Architecture"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end">
        <div className="max-w-4xl">
          <h1 className="flex flex-col gap-2">
            <span ref={title1Ref} className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-background tracking-tighter uppercase">
              Engineering Intelligent Systems
            </span>
            <span ref={title2Ref} className="font-drama italic text-5xl md:text-7xl lg:text-8xl text-accent tracking-tight leading-none mt-2">
              For the Future.
            </span>
          </h1>

          <p ref={subtextRef} className="mt-8 text-lg md:text-xl font-sans text-background/80 max-w-2xl text-balance leading-relaxed">
            RavenDOS builds AI-powered platforms and scalable software infrastructure designed to solve real-world problems.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="magnetic-btn bg-accent text-primary px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-2 group">
              Explore Our Products
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="magnetic-btn bg-transparent border border-accent/30 text-background px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide hover:bg-accent/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
