import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
  const containerRef = useRef(null);

  const cards = [
    {
      step: '01',
      title: 'Artificial Intelligence',
      desc: 'Deploying advanced deep learning models and agentic networks.',
      animType: 'geometric'
    },
    {
      step: '02',
      title: 'Scalable Infrastructure',
      desc: 'Cloud-native backend architectures designed for massive concurrency.',
      animType: 'laser'
    },
    {
      step: '03',
      title: 'Modern Platforms',
      desc: 'Seamless orchestration between edge systems and central processing.',
      animType: 'waveform'
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray('.tech-card');

      // Stacking logic
      cardEls.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top top+=80`,
          endTrigger: containerRef.current,
          end: `bottom bottom`,
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: 
            i < cardEls.length - 1 
            ? gsap.timeline()
               .to(card, { scale: 0.9, opacity: 0.3, filter: 'blur(10px)', duration: 1 })
            : undefined
        });
      });

      // Local SVG Animations
      // 1. Geometric
      gsap.to('.anim-geo', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
      // 2. Laser
      gsap.fromTo('.anim-laser', { y: 0 }, { y: 150, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      // 3. Waveform
      gsap.to('.anim-wave', { strokeDashoffset: 0, duration: 2, repeat: -1, ease: 'linear' });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" ref={containerRef} className="py-24 px-4 w-full relative">
      <div className="max-w-4xl mx-auto relative pt-10">
        <h2 className="text-center font-sans font-bold text-sm tracking-widest text-accent uppercase mb-20">Technology Focus</h2>
        
        {cards.map((data, i) => (
          <div key={i} className="tech-card w-full h-[60vh] md:h-[50vh] bg-dark rounded-[3rem] border border-white/5 mb-8 p-8 md:p-12 flex flex-col md:flex-row shadow-2xl overflow-hidden relative" style={{ zIndex: i }}>
             
             {/* Content */}
             <div className="flex-1 flex flex-col justify-center relative z-10 w-full">
                <div className="font-mono text-5xl font-bold text-white/5 mb-6">{data.step}</div>
                <h3 className="font-sans font-bold text-3xl text-background mb-4">{data.title}</h3>
                <p className="font-sans text-background/60 text-lg max-w-sm">{data.desc}</p>
             </div>

             {/* Animation Visualizer */}
             <div className="flex-1 right-box relative h-full flex items-center justify-center border-l-0 md:border-l border-white/5 opacity-50">
               {data.animType === 'geometric' && (
                 <svg className="anim-geo w-64 h-64 opacity-30" viewBox="0 0 100 100" fill="none" stroke="#E63B2E" strokeWidth="0.5">
                   <circle cx="50" cy="50" r="40" strokeLinedash="4 4" />
                   <circle cx="50" cy="50" r="30" />
                   <polygon points="50,15 85,75 15,75" />
                   <polygon points="50,85 15,25 85,25" />
                 </svg>
               )}
               {data.animType === 'laser' && (
                 <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-8">
                   <div className="grid grid-cols-5 gap-4 w-full opacity-20">
                     {Array.from({ length: 25 }).map((_, idx) => (
                       <div key={idx} className="h-4 bg-white/40 rounded-sm"></div>
                     ))}
                   </div>
                   <div className="anim-laser absolute top-10 w-full h-0.5 bg-accent blur-[1px] shadow-[0_0_10px_#E63B2E]"></div>
                 </div>
               )}
               {data.animType === 'waveform' && (
                 <svg className="w-full h-32 opacity-80" viewBox="0 0 200 40" fill="none">
                    <path 
                      className="anim-wave" 
                      d="M 0 20 L 40 20 L 50 5 L 60 35 L 70 10 L 80 30 L 90 20 L 200 20" 
                      stroke="#E63B2E" 
                      strokeWidth="1.5"
                      strokeDasharray="400"
                      strokeDashoffset="400"
                    />
                 </svg>
               )}
             </div>
          </div>
        ))}

        {/* Padding box to allow standard scroll past pins */}
        <div className="h-[20vh]"></div>
      </div>
    </section>
  );
}
