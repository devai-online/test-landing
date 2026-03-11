import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".cap-card", 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-sm tracking-widest text-accent uppercase mb-4">What RavenDOS Does</h2>
        <p className="font-drama italic text-3xl md:text-5xl text-background max-w-2xl leading-tight">
          Product-driven solutions for complex challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorProtocol />
      </div>
    </section>
  );
}

function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: "Advanced Algorithms", value: "Core Eng" },
    { id: 2, label: "Data Systems", value: "Analytics" },
    { id: 3, label: "Intelligent Platforms", value: "AI Ops" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cap-card bg-dark/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[400px]">
      <div>
        <h3 className="font-sans font-bold text-xl text-background mb-2">AI Systems</h3>
        <p className="font-sans text-sm text-background/60 leading-relaxed">
          Building intelligent platforms powered by advanced algorithms and structured data systems.
        </p>
      </div>
      
      <div className="relative h-40 w-full mt-8 flex items-center justify-center">
        {cards.map((card, idx) => {
          const isTop = idx === 0;
          const scale = 1 - idx * 0.05;
          const yOffset = idx * 15;
          const zIndex = 10 - idx;
          const opacity = 1 - idx * 0.2;

          return (
            <div 
              key={card.id}
              className="absolute w-[80%] bg-dark border border-accent/20 rounded-xl p-4 flex justify-between items-center transition-all duration-700 shadow-2xl"
              style={{
                transform: `translateY(${yOffset}px) scale(${scale})`,
                zIndex,
                opacity,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <span className="font-sans font-semibold text-xs text-background">{card.label}</span>
              <span className="font-mono text-[10px] text-accent font-bold px-2 py-1 bg-accent/10 rounded-md uppercase tracking-wider">{card.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TelemetryTypewriter() {
  const [text, setText] = useState("");
  const fullText = "Designing and launching scalable digital products built for high performance and modern architecture.";
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(idx));
        setIdx(idx + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setText("");
        setIdx(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }
  }, [idx, fullText]);

  return (
    <div className="cap-card bg-dark/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[400px]">
       <div>
        <div className="flex items-center gap-2 mb-4">
           <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
           <span className="font-mono text-[10px] uppercase text-accent tracking-widest font-bold">Live Telemetry</span>
        </div>
        <h3 className="font-sans font-bold text-xl text-background mb-2">Product Engineering</h3>
      </div>
      
      <div className="mt-8 bg-black/40 border border-white/5 rounded-xl p-6 h-40 font-mono text-sm text-background/80 leading-relaxed relative">
        {text}<span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
      </div>
    </div>
  );
}

function CursorProtocol() {
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set(".custom-cursor", { x: 0, y: 0, scale: 1, opacity: 0 })
        .to(".custom-cursor", { opacity: 1, duration: 0.3 })
        .to(".custom-cursor", { x: 120, y: 40, duration: 1, ease: 'power2.inOut' })
        .to(".custom-cursor", { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".day-cell-active", { backgroundColor: '#E63B2E', color: '#050505', duration: 0.2 }, "-=0.1")
        .to(".custom-cursor", { x: 220, y: 110, duration: 0.8, ease: 'power2.inOut' }, "+=0.3")
        .to(".custom-cursor", { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".save-btn-active", { backgroundColor: '#E63B2E', borderColor: '#E63B2E', color: '#050505', duration: 0.2 }, "-=0.1")
        .to(".custom-cursor", { opacity: 0, duration: 0.3 }, "+=0.5")
        .to([".day-cell-active", ".save-btn-active"], { clearProps: "all", duration: 0.1 });

    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="cap-card bg-dark/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[400px]" ref={gridRef}>
      <div>
        <h3 className="font-sans font-bold text-xl text-background mb-2">Automation & Infrastructure</h3>
        <p className="font-sans text-sm text-background/60 leading-relaxed">
          Creating robust systems that power modern digital platforms and automate workflows.
        </p>
      </div>
      
      <div className="mt-8 relative h-40 bg-black/20 rounded-xl border border-white/5 p-4 select-none">
        <div className="grid grid-cols-7 gap-1 mb-6">
          {['S','M','T','W','T','F','S'].map((day, i) => (
             <div key={i} className={`h-8 rounded bg-white/5 text-[10px] font-mono flex items-center justify-center text-white/40 ${i === 3 ? 'day-cell-active' : ''}`}>
               {day}
             </div>
          ))}
        </div>
        
        <div className="flex justify-end pr-2">
           <div className="save-btn-active border border-white/20 rounded-full px-4 py-1 text-[10px] font-mono uppercase tracking-wider text-white/50">
             Deploy
           </div>
        </div>

        {/* SVG Cursor */}
        <div className="custom-cursor absolute top-0 left-0 w-6 h-6 z-20 pointer-events-none drop-shadow-xl">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21V20.8C5.5 21.43 6.24 21.78 6.73 21.36L11.58 17.3C11.75 17.15 11.96 17.08 12.18 17.08H18.5C19.13 17.08 19.5 16.34 19.11 15.86L6.11 2.86C5.64 2.39 4.88 2.62 5.5 3.21Z" fill="white"/>
            <path d="M5.5 3.21V20.8C5.5 21.43 6.24 21.78 6.73 21.36L11.58 17.3C11.75 17.15 11.96 17.08 12.18 17.08H18.5C19.13 17.08 19.5 16.34 19.11 15.86L6.11 2.86C5.64 2.39 4.88 2.62 5.5 3.21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dark"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
