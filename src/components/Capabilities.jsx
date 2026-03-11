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
        <StaticCard
          title="Networking & Security"
          description="Comprehensive network infrastructure and cybersecurity solutions to protect your digital perimeter."
          visual={
            <div className="mt-8 rounded-xl bg-black/20 border border-white/5 p-4 flex flex-col gap-3">
              {[
                { label: 'Firewall', value: 'Active' },
                { label: 'Threats Blocked', value: '2,847' },
                { label: 'Encryption', value: 'AES-256' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/40">{item.label}</span>
                  <span className="font-mono text-[10px] text-accent font-bold">{item.value}</span>
                </div>
              ))}
              <div className="border-t border-white/5 pt-3 flex items-center gap-2">
                {/* Sophos */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/8">
                  <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#0065BD"/>
                    <path d="M10 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <circle cx="16" cy="11" r="2.5" fill="white"/>
                  </svg>
                  <span className="font-mono text-[9px] text-white/50 font-semibold">Sophos</span>
                </div>
                {/* FortiGate */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/8">
                  <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#EE3124"/>
                    <path d="M8 8h16v4H8zM8 14h10v4H8zM8 20h13v4H8z" fill="white"/>
                  </svg>
                  <span className="font-mono text-[9px] text-white/50 font-semibold">FortiGate</span>
                </div>
                {/* Cisco */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/8">
                  <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#1BA0D7"/>
                    <rect x="4" y="13" width="4" height="6" rx="1" fill="white"/>
                    <rect x="10" y="10" width="4" height="12" rx="1" fill="white"/>
                    <rect x="16" y="7" width="4" height="18" rx="1" fill="white"/>
                    <rect x="22" y="10" width="4" height="12" rx="1" fill="white"/>
                  </svg>
                  <span className="font-mono text-[9px] text-white/50 font-semibold">Cisco</span>
                </div>
              </div>
            </div>
          }
        />
        <StaticCard
          title="Dashboards & Analytics"
          description="Interactive dashboards and data visualization solutions that turn raw data into actionable insight."
          visual={
            <div className="mt-8 h-24 rounded-xl bg-black/20 border border-white/5 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-4 pt-3 pb-1">
                <span className="font-mono text-[10px] text-white/40">Monthly Growth</span>
                <span className="font-mono text-[10px] text-accent font-bold">+34.2%</span>
              </div>
              <div className="flex items-end justify-center px-4 pb-3 gap-1.5 flex-1">
                {[30, 50, 40, 70, 55, 85, 65].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-accent/40" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          }
        />
        <StaticCard
          title="Web Development"
          description="Modern, responsive websites and web applications built for performance and conversion."
          visual={
            <div className="mt-8 h-24 rounded-xl bg-black/20 border border-white/5 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-black/20">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              </div>
              <div className="px-4 py-2 font-mono text-[9px] leading-relaxed">
                <span className="text-accent/70">{'<div '}</span>
                <span className="text-white/40">class=</span>
                <span className="text-green-400/60">"hero"</span>
                <span className="text-accent/70">{'>'}</span>
                <br />
                <span className="text-white/30 pl-3">{'<h1>'}</span>
                <span className="text-white/60">Your Brand</span>
                <span className="text-white/30">{'</h1>'}</span>
                <br />
                <span className="text-white/30 pl-3">{'<p>'}</span>
                <span className="text-white/50">Built for performance.</span>
                <span className="text-white/30">{'</p>'}</span>
              </div>
            </div>
          }
        />
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
  const lines = [
    "$ init product-roadmap --scope=full-stack",
    "> Architecting scalable microservices...",
    "> CI/CD pipelines configured ✓",
    "> API contracts validated ✓",
    "> Performance benchmarks: 99ms p95",
    "> Shipping v2.4.1 to production...",
    "✓ Build successful. Zero downtime.",
  ];
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    if (lineIdx >= lines.length) {
      const reset = setTimeout(() => {
        setDisplayed([]);
        setCurrentLine("");
        setLineIdx(0);
        setCharIdx(0);
      }, 3000);
      return () => clearTimeout(reset);
    }
    const line = lines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setCurrentLine(prev => prev + line.charAt(charIdx));
        setCharIdx(c => c + 1);
      }, 38);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed(prev => [...prev, currentLine]);
        setCurrentLine("");
        setCharIdx(0);
        setLineIdx(l => l + 1);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx]);

  return (
    <div className="cap-card bg-dark/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[400px]">
      <div>
        <h3 className="font-sans font-bold text-xl text-background mb-2">Product Engineering</h3>
        <p className="font-sans text-sm text-background/50 leading-relaxed">
          End-to-end product builds — from architecture to deployment.
        </p>
      </div>

      <div className="mt-6 bg-black/40 border border-white/5 rounded-xl p-5 h-48 font-mono text-xs text-background/70 leading-relaxed relative overflow-hidden flex flex-col justify-end">
        <div className="flex flex-col gap-1">
          {displayed.map((l, i) => (
            <span key={i} className={l.startsWith("✓") ? "text-accent/80" : "text-background/50"}>{l}</span>
          ))}
          {lineIdx < lines.length && (
            <span className={currentLine.startsWith("✓") ? "text-accent" : "text-background/80"}>
              {currentLine}<span className="inline-block w-1.5 h-3 bg-accent ml-0.5 animate-pulse align-middle" />
            </span>
          )}
        </div>
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
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
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
            <path d="M5.5 3.21V20.8C5.5 21.43 6.24 21.78 6.73 21.36L11.58 17.3C11.75 17.15 11.96 17.08 12.18 17.08H18.5C19.13 17.08 19.5 16.34 19.11 15.86L6.11 2.86C5.64 2.39 4.88 2.62 5.5 3.21Z" fill="white" />
            <path d="M5.5 3.21V20.8C5.5 21.43 6.24 21.78 6.73 21.36L11.58 17.3C11.75 17.15 11.96 17.08 12.18 17.08H18.5C19.13 17.08 19.5 16.34 19.11 15.86L6.11 2.86C5.64 2.39 4.88 2.62 5.5 3.21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dark" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StaticCard({ title, tag, description, icon, visual }) {
  return (
    <div className="cap-card bg-dark/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[400px] group hover:border-accent/20 transition-colors duration-300">
      {/* Top */}
      <div>
        {(icon || tag) && (
          <div className="flex items-center justify-between mb-4">
            {icon && <span className="text-3xl select-none">{icon}</span>}
            {tag && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60 bg-accent/10 px-3 py-1 rounded-full border border-accent/10">
                {tag}
              </span>
            )}
          </div>
        )}
        <h3 className="font-sans font-bold text-xl text-background mb-3 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="font-sans text-sm text-background/60 leading-relaxed">
          {description}
        </p>
      </div>

      {visual}
    </div>
  );
}
