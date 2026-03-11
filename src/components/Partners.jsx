import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aaDesigner from '../../assets/aa-designer-logo.png';
import aarambh from '../../assets/aarambh.png';
import diagnosticwale from '../../assets/diagnosticwale-logo.png';
import intigrade from '../../assets/intigrade.png';
import kwikit from '../../assets/kwikit.png';
import picklout from '../../assets/picklout-logo.png';
import webrocket from '../../assets/webrocket.png';

gsap.registerPlugin(ScrollTrigger);

const partners = [
    { name: 'AA Designer',    logo: aaDesigner },
    { name: 'Aarambh',        logo: aarambh },
    { name: 'DiagnosticWale', logo: diagnosticwale },
    { name: 'IntiGrade',      logo: intigrade },
    { name: 'KwikIT',         logo: kwikit },
    { name: 'PicklOut',       logo: picklout },
    { name: 'WebRocket',      logo: webrocket },
];

// Duplicate list for seamless loop
const tickerItems = [...partners, ...partners];

export default function Partners() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.partners-header',
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const rafId = requestAnimationFrame(() => {
            const totalWidth = track.scrollWidth / 2;

            tweenRef.current = gsap.to(track, {
                x: -totalWidth,
                duration: 30,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
                },
            });
        });

        return () => {
            cancelAnimationFrame(rafId);
            tweenRef.current?.kill();
        };
    }, []);

    const pauseTicker = () => tweenRef.current?.pause();
    const resumeTicker = () => tweenRef.current?.resume();

    return (
        <section
            id="partners"
            ref={sectionRef}
            className="py-20 w-full overflow-hidden"
            style={{ backgroundColor: '#f8f8f9' }}
        >
            {/* Header */}
            <div className="partners-header px-6 md:px-12 max-w-7xl mx-auto mb-12 text-center">
                <p className="font-sans font-bold text-sm tracking-widest text-accent uppercase mb-3">
                    Partners & Ecosystem
                </p>
                <h2 className="font-drama italic text-3xl md:text-4xl text-primary">
                    Trusted by companies pushing the frontier
                </h2>
            </div>

            {/* Ticker */}
            <div
                className="relative w-full select-none"
                onMouseEnter={pauseTicker}
                onMouseLeave={resumeTicker}
            >
                {/* Fade edges */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #f8f8f9 0%, transparent 100%)' }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, #f8f8f9 0%, transparent 100%)' }}
                />

                {/* Scrolling Track */}
                <div className="overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex items-center gap-4"
                        style={{ willChange: 'transform', whiteSpace: 'nowrap' }}
                    >
                        {tickerItems.map((partner, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center gap-3 flex-shrink-0 bg-white border border-primary/8 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all duration-200 group cursor-default"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-7 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                                />
                                <p className="font-sans font-semibold text-sm text-primary group-hover:text-accent transition-colors duration-200 leading-none">
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
