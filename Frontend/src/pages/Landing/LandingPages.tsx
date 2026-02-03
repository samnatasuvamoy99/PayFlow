import React, { useEffect, useState, useRef } from 'react';
import landingPic from '../../assets/Landing_pic.png';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';




export const LandingPage: React.FC = () => {
        const navigate = useNavigate();

  const mousePos = useRef({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);


    const followMouse = () => {
      setCursorPos((prev) => {

        const dx = mousePos.current.x - prev.x;
        const dy = mousePos.current.y - prev.y;
        return {
          x: prev.x + dx * 0.20,
          y: prev.y + dy * 0.20,
        };
      });
      requestAnimationFrame(followMouse);
    };

    const animationId = requestAnimationFrame(followMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black cursor-none overflow-x-hidden">


      <div
        className="fixed w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s'
        }}
      />

    
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/50 border-b border-gray-800">
        <div className="text-2xl font-bold tracking-tighter uppercase italic">PayFlow</div>
        <nav className="space-x-8 flex items-center">
          <a className="hover:text-gray-400 transition text-md shadow-2xl shadow-slate-50 uppercase tracking-widest">
            <Link className="pointer underline pl-1  text-white-500 cursor-pointer" to="/signup">
              Home
            </Link>


          </a>
          <button  onClick={
            ()=>navigate("/signin")
          }className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition uppercase text-xs">
            Login
          </button>
        </nav>
      </header>


      <section className="min-h-screen flex flex-col md:flex-row items-center pt-24 px-8">
        <div className="w-full md:w-1/2 overflow-hidden py-20">
          <div className="animate-pulse mb-4 text-gray-500 uppercase tracking-widest text-sm font-bold">Secure Payment Service</div>
          <h1 className="text-7xl md:text-9xl font-black leading-none mb-6">
            SEND. <br />
            <span className="text-gray-500">RECEIVE.</span> <br />
            REPEAT.
          </h1>
          <p className="max-w-md text-gray-400 text-lg border-l-2 border-white pl-4">
            The next generation of peer-to-peer payments. Built for speed, designed for clarity.
          </p>
        </div>


        <div className="w-full md:w-1/2 flex justify-center items-center relative py-20">
          
          <div className="absolute w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>

          <img
            src={landingPic}
            alt="3D Mobile Payment"
            // 
            className="
          w-[420px]
          max-w-full
          
          select-none
          pointer-events-none
         relative animate-float drop-shadow-2xl
        "
          />
        </div>


      </section>



      <section className="py-40 bg-zinc-900 border-y border-gray-800 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="text-8xl font-black text-white px-8 tracking-tighter">
              FAST • SECURE • GLOBAL • LIMITLESS • EFFORTLESS
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-0 mt-20">
          {['INSTANT SETTLEMENT', 'END-TO-END ENCRYPTION', 'GLOBAL ACCESSIBILITY'].map((feature, idx) => (
            <div key={idx} className="p-16 border border-gray-800 hover:bg-white hover:text-black transition-all duration-500 group">
              <span className="text-xs font-bold text-gray-500 group-hover:text-gray-700 mb-4 block">0{idx + 1}</span>
              <h3 className="text-3xl font-black mb-4 leading-tight">{feature}</h3>
              <p className="text-gray-400 group-hover:text-black transition-colors">
                Redefining how capital moves across borders with zero latency.
              </p>
            </div>
          ))}
        </div>
      </section>



      <footer className="bg-black pt-28 pb-10 px-8 border-t border-gray-900 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24">
           

            <div className="mb-12 md:mb-0">
              <h2 className="text-5xl font-black mb-6 tracking-tighter italic">PAYFLOW.</h2>
              <p className="text-gray-500 max-w-sm leading-relaxed border-l border-gray-800 pl-6">
                The new standard in digital currency movement.
                Built for developers, designed for everyone.
              </p>
            </div>

        
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24">
              <div className="flex flex-col space-y-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-40">Product</span>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">Payments</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">Security</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">API</a>
              </div>

              <div className="flex flex-col space-y-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-40">Resources</span>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">Docs</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">Support</a>
              </div>

              <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-40">Legal</span>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 text-sm">Terms of Service</a>
              </div>
            </div>
          </div>

     
          <div className="pt-10 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="text-gray-600 text-[11px] font-bold tracking-widest uppercase">
                © 2026 PAYFLOW PLATFORM — STABLE RELEASE
              </div>
              <div className="flex items-center gap-3 px-4 py-1.5 bg-zinc-900/50 rounded-full border border-gray-800">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.1em] text-gray-300">LIVE SERVER NODES</span>
              </div>
            </div>

            <div className="flex gap-10">
              <a href="#" className="group relative">
                <span className="text-xs font-black text-white hover:text-gray-400 transition-colors uppercase">X.com</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="https://github.com/samnatasuvamoy99/PayFlow" className="group relative pointer-events-auto">
                <span className="text-xs font-black text-white hover:text-gray-400 transition-colors uppercase">Github</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase cursor-none"
              >
                [ Back to Top ]
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

