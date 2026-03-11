import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ArrowRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactModal({ onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const [state, handleSubmit] = useForm("xeoklqkv");

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
    gsap.fromTo(panelRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' });
  }, []);

  const close = () => {
    gsap.to(panelRef.current, { y: 20, opacity: 0, duration: 0.2, ease: 'power2.in' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: onClose });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) close(); }}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-lg bg-primary border border-white/10 rounded-[2rem] p-10 shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-background/50 hover:text-background hover:bg-white/10 transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {!state.succeeded ? (
          <>
            <h2 className="font-sans font-bold text-2xl text-background mb-1">Get in touch</h2>
            <p className="font-sans text-sm text-background/50 mb-8">
              Tell us about your project and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-background/40">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-background placeholder:text-background/25 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-background/40">Email</label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-background placeholder:text-background/25 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="font-mono text-[10px] uppercase tracking-widest text-background/40">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company or organisation"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-background placeholder:text-background/25 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-background/40">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-background placeholder:text-background/25 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-2 w-full bg-accent hover:bg-accent/90 disabled:opacity-60 text-white font-sans font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200"
              >
                {state.submitting ? 'Sending…' : 'Send Message'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef8354" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-sans font-bold text-2xl text-background">Message sent!</h2>
            <p className="font-sans text-sm text-background/50 max-w-xs">
              Thanks for reaching out. We'll get back to you within 1–2 business days.
            </p>
            <button
              onClick={close}
              className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-background/70 hover:text-background text-sm font-sans font-medium transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
