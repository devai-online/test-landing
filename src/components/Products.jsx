import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, LayoutDashboard, Brain, FileCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".product-content",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={containerRef} className="pt-8 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
      <div className="product-content mb-8 text-center">
        <h2 className="font-sans font-bold text-lg tracking-widest text-accent uppercase">Products</h2>
      </div>
      <div className="product-content glass-panel p-1 border border-white/5 rounded-[3rem] bg-dark/20 backdrop-blur-xl relative overflow-hidden">
        
        {/* Subtle noise over the card */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80")' }}></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[2.8rem]">
          {/* Content side */}
          <div className="p-12 md:p-16 flex flex-col justify-center bg-primary/95">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-background mb-6">IntiGrade</h2>
            <p className="font-sans text-background/70 text-lg leading-relaxed mb-8 max-w-lg">
              AI-powered academic evaluation and grading platform designed to modernize assessment systems and improve educational analytics.
            </p>
            
            <div className="flex flex-col gap-4 mb-10 w-full max-w-sm">
              <div className="flex items-center gap-3 text-sm font-sans text-background/60">
                <Brain className="w-5 h-5 text-accent" /> Advanced Assessment Algorithms
              </div>
              <div className="flex items-center gap-3 text-sm font-sans text-background/60">
                <LayoutDashboard className="w-5 h-5 text-accent" /> Modern Feedback Dashboards
              </div>
              <div className="flex items-center gap-3 text-sm font-sans text-background/60">
                 <FileCheck className="w-5 h-5 text-accent" /> Automated Rubric Matching
              </div>
            </div>

            <div>
              <a
                href="https://intigrade.in"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn border border-white/10 bg-white/5 hover:bg-white/10 text-background px-8 py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide flex items-center gap-2 transition-colors"
              >
                Learn More
                <ChevronRight className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>

          {/* Mock UI side */}
          <div className="bg-dark/60 p-8 md:p-12 relative flex items-center justify-center overflow-hidden">
             
             {/* Decorative glows */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>

             {/* UI Mockup Container */}
             <div className="w-full h-full min-h-[400px] bg-primary border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative z-10 transform rotate-1 scale-105 transition-transform hover:rotate-0 hover:scale-100 duration-700">
                
                {/* Mock Header */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-black/40">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  <div className="mx-auto font-mono text-[10px] text-white/30 truncate">intigrade-dashboard.app</div>
                </div>

                {/* Mock Content */}
                <div className="p-6 flex-1 flex flex-col gap-4 bg-gradient-to-br from-primary to-dark/50">
                  <div className="font-sans font-bold text-lg text-background/90 uppercase mb-2">Student Performance</div>
                  
                  {/* Mock Chart */}
                  <div className="h-32 border border-white/5 rounded-xl bg-black/20 flex items-end px-4 gap-2 pb-2">
                     {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                       <div key={i} className="flex-1 bg-accent/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="p-4 border border-white/5 rounded-xl bg-black/20">
                      <div className="text-[10px] font-mono text-white/40 mb-1">EVALUATED</div>
                      <div className="text-xl font-sans font-bold text-background">2,451</div>
                    </div>
                    <div className="p-4 border border-white/5 rounded-xl bg-black/20">
                      <div className="text-[10px] font-mono text-white/40 mb-1">ACCURACY</div>
                      <div className="text-xl font-sans font-bold text-accent">99.8%</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
