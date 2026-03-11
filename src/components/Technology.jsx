import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "RavenDOS built our entire web presence from scratch and delivered beyond our expectations. Their attention to detail and technical execution gave WebRocket the digital foundation we needed to grow.",
    name: "Sunil Pachigolla",
    role: "CEO",
    company: "WebRocket",
    initials: "SP",
  },
  {
    quote: "Managing diagnostic data across our centres was a constant challenge. RavenDOS stepped in and built a system that streamlined everything — our operations are significantly more efficient now.",
    name: "Seetha Soumya",
    role: "Director",
    company: "Diagnostic Wale",
    initials: "SS",
  },
  {
    quote: "RavenDOS helped us modernise our internal systems and brought a level of professionalism we hadn't experienced before. They understood our requirements and delivered exactly what we needed.",
    name: "Sathyanarayana Raju",
    role: "Director",
    company: "Sai ChitFunds",
    initials: "SR",
  },
];

export default function Technology() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-header',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 78%' },
        }
      );
      gsap.fromTo(
        '.testimonial-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.18, ease: 'power2.out',
          scrollTrigger: { trigger: '.testimonial-grid', start: 'top 80%' },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="technology"
      ref={containerRef}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10"
    >
      {/* Header */}
      <div className="testimonial-header mb-16">
        <h2 className="font-sans font-bold text-sm tracking-widest text-accent uppercase mb-4">
          Testimonials
        </h2>
        <p className="font-drama italic text-3xl md:text-5xl text-background max-w-3xl leading-tight">
          Trusted by teams who{' '}
          <span className="text-accent">demand results.</span>
        </p>
      </div>

      {/* Grid */}
      <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card group relative bg-white border border-primary/8 rounded-2xl p-8 flex flex-col justify-between hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at 20% 20%, rgba(239,131,84,0.07) 0%, transparent 60%)',
              }}
            />

            {/* Quote mark */}
            <div className="relative z-10 font-serif text-6xl leading-none text-accent/20 mb-4 select-none">"</div>

            {/* Quote text */}
            <p className="relative z-10 font-sans text-sm text-primary/70 leading-relaxed flex-1 mb-8">
              {t.quote}
            </p>

            {/* Client */}
            <div className="relative z-10 flex items-center gap-3 pt-6 border-t border-primary/8">
              <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-[10px] font-bold text-accent">{t.initials}</span>
              </div>
              <div>
                <div className="font-sans font-semibold text-sm text-primary">{t.name}</div>
                <div className="font-sans text-xs text-primary/45">{t.role} · {t.company}</div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent/60 to-transparent transition-all duration-500 rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
