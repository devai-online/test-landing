import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Brain,
    Cloud,
    Layers,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: Brain,
        title: 'AI Solutions',
        description:
            'Custom AI agents, LLM integration, and intelligent automation tailored to your business needs.',
        tag: 'Machine Intelligence',
    },
    {
        icon: Cloud,
        title: 'DevOps & Cloud',
        description:
            'Full DevOps lifecycle, cloud migration, and infrastructure automation for modern teams.',
        tag: 'Cloud Native',
    },
    {
        title: 'Networking & Security',
        description:
            'Comprehensive network infrastructure and cybersecurity solutions to protect what matters.',
    },
    {
        title: 'Web Development',
        description:
            'Modern, responsive websites and web applications built for performance and conversion.',
    },
    {
        title: 'Dashboards & Analytics',
        description:
            'Interactive dashboards and data visualisation solutions that turn raw data into insight.',
    },
    {
        icon: Layers,
        title: 'AI Full-Stack Development',
        description:
            'End-to-end AI application development with seamless full-stack integration.',
        tag: 'End-to-End',
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.svc-header',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 78%',
                    },
                }
            );

            gsap.fromTo(
                '.svc-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.svc-grid',
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10"
        >
            {/* Header */}
            <div className="svc-header mb-16">
                <h2 className="font-sans font-bold text-sm tracking-widest text-accent uppercase mb-4">
                    What We Do
                </h2>
                <p className="font-drama italic text-3xl md:text-5xl text-primary max-w-3xl leading-tight">
                    We architect intelligent solutions that{' '}
                    <span className="text-accent">scale businesses</span> and secure
                    infrastructure.
                </p>
                <p className="mt-6 text-base md:text-lg text-primary/55 max-w-2xl leading-relaxed font-sans">
                    From cutting-edge AI integration to cybersecurity and cloud-native
                    infrastructure — we deliver what modern businesses need to thrive.
                </p>
            </div>

            {/* Grid */}
            <div className="svc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc, i) => {
                    const Icon = svc.icon;
                    return (
                        <div
                            key={i}
                            className="svc-card group relative bg-white border border-primary/8 rounded-2xl p-8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-default overflow-hidden"
                        >
                            {/* Hover accent glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                style={{
                                    background:
                                        'radial-gradient(ellipse at 20% 20%, rgba(239,131,84,0.07) 0%, transparent 60%)',
                                }}
                            />

                            {/* Icon + Tag (only when present) */}
                            {(svc.icon || svc.tag) && (
                                <div className="relative z-10 flex items-center justify-between mb-6">
                                    {svc.icon && (
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                                            <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                                        </div>
                                    )}
                                    {svc.tag && (
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-primary/40 bg-primary/5 px-3 py-1 rounded-full border border-primary/8">
                                            {svc.tag}
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* Text */}
                            <div className="relative z-10">
                                <h3 className="font-sans font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                                    {svc.title}
                                </h3>
                                <p className="font-sans text-sm text-primary/55 leading-relaxed">
                                    {svc.description}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent/60 to-transparent transition-all duration-500 rounded-b-2xl" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
