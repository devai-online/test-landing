import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(text1Ref.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      gsap.fromTo(text2Ref.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
          }
        }
      );

      // Parallax text subtle move
      gsap.to(".vision-bg", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="relative py-32 md:py-48 w-full overflow-hidden flex items-center justify-center">
      {/* Texture Background */}
      <div className="absolute inset-0 z-0 bg-primary">
        <div 
          className="vision-bg absolute inset-0 opacity-10 scale-110"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary opacity-90"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <div ref={text1Ref} className="mb-8 font-sans text-xl md:text-2xl text-background/60 tracking-wider">
          Most technology follows existing constraints.
        </div>
        <div ref={text2Ref} className="font-drama italic text-4xl md:text-6xl lg:text-7xl text-background leading-tight text-balance">
          We build <span className="text-accent">intelligent systems</span> that redefine how the world interacts with data and code.
        </div>
      </div>
    </section>
  );
}
