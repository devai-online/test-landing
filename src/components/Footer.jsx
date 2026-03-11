import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-32 w-full bg-dark/80 rounded-t-[4rem] border-t border-white/5 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 relative z-10 mb-20">
        
        {/* Brand & Status */}
        <div className="flex flex-col gap-6 max-w-sm">
          <h2 className="font-sans font-bold text-3xl text-background">RavenDOS</h2>
          <p className="font-sans text-sm text-background/60 leading-relaxed text-balance">
            A technology innovation firm building intelligent software systems for tomorrow's complex challenges.
          </p>
          <div className="flex items-center gap-3 bg-black/40 border border-white/5 px-4 py-2 rounded-full w-max mt-4">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="font-mono text-xs text-background/80 tracking-widest uppercase">System Operational</span>
          </div>
        </div>

        {/* CTA & Links */}
        <div className="flex flex-col items-start md:items-end gap-10 w-full">
           <div className="bg-primary border border-white/10 p-8 rounded-[2rem] flex flex-col items-start gap-6 lg:w-96">
             <h3 className="font-sans font-semibold text-xl text-background">Ready to scale?</h3>
             <p className="font-sans text-sm text-background/50">Interested in collaborating with RavenDOS on highly capable digital infrastructure?</p>
             <button className="magnetic-btn bg-background text-primary px-6 py-3 rounded-full font-sans font-bold text-sm w-full flex items-center justify-between group">
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
