import { ArrowUpRight } from 'lucide-react';
import logo from '../../assets/RavenDOS final-02.png';

export default function Footer({ onContactClick }) {
  return (
    <footer className="mt-32 w-full bg-dark/80 rounded-t-[4rem] border-t border-white/5 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 relative z-10 mb-20">
        
        {/* Brand & Status */}
        <div className="flex flex-col gap-6 max-w-sm">
          <div>
            <img src={logo} alt="RavenDOS" className="h-20 w-auto object-contain" />
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              {[
                {
                  label: 'LinkedIn',
                  href: '#',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: 'X',
                  href: '#',
                  svg: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
                {
                  label: 'GitHub',
                  href: '#',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  ),
                },
                {
                  label: 'Instagram',
                  href: '#',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-background/50 hover:text-background hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <p className="font-sans text-sm text-background/60 leading-relaxed text-balance">
            A technology innovation firm building intelligent software systems for tomorrow's complex challenges.
          </p>

          <div>
            <p className="font-sans font-bold text-sm text-background/70 mb-1">RavenDOS Business Ventures LLP</p>
            <p className="font-sans text-xs text-background/40 leading-relaxed">
              E/38, G2, 17-1-380, Santosh Nagar Main Rd,<br />
              Central Excise Colony, Saidabad,<br />
              Hyderabad, Telangana 500059, India.
            </p>
            <div className="flex flex-col gap-1.5 mt-2">
              <a href="mailto:hello@ravendos.com" className="font-sans text-xs text-background/50 hover:text-accent transition-colors duration-200 flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hello@ravendos.com
              </a>
              <a href="tel:+919000334021" className="font-sans text-xs text-background/50 hover:text-accent transition-colors duration-200 flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 9000334021
              </a>
            </div>
          </div>
        </div>

        {/* CTA & Links */}
        <div className="flex flex-col items-start md:items-end gap-10 w-full">
           <div className="bg-primary border border-white/10 p-8 rounded-[2rem] flex flex-col items-start gap-6 lg:w-96">
             <h3 className="font-sans font-semibold text-xl text-background">Ready to scale?</h3>
             <p className="font-sans text-sm text-background/50">Interested in collaborating with RavenDOS on highly capable digital infrastructure?</p>
             <button onClick={onContactClick} className="magnetic-btn bg-background text-primary px-6 py-3 rounded-full font-sans font-bold text-sm w-full flex items-center justify-between group">
               Contact Partner Program
               <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
           </div>

           <div className="flex gap-12 font-sans font-medium text-sm text-background/40">
             <div className="flex flex-col gap-4">
               <a href="#" className="hover:text-background transition-colors">Products</a>
               <a href="#" className="hover:text-background transition-colors">Infrastructure</a>
               <a href="#" className="hover:text-background transition-colors">Case Studies</a>
             </div>
             <div className="flex flex-col gap-4">
               <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-background transition-colors">Twitter // X</a>
               <a href="#" className="hover:text-background transition-colors">GitHub</a>
             </div>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-background/30 font-sans text-xs pt-8 border-t border-white/5">
        <span>© {new Date().getFullYear()} RavenDOS. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-background/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-background/60 transition-colors">Terms</a>
        </div>
      </div>

    </footer>
  );
}
