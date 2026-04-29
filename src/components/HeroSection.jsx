
import img from "../assets/ganesh.jpg";
import { useRef } from "react";

export default function HeroSection() {
  const bellRef = useRef(null);

  const playBell = () => {
    if (!bellRef.current) {
      bellRef.current = new Audio("/audio/bell.mp3");
      bellRef.current.volume = 1;
    }
    bellRef.current.currentTime = 0;
    bellRef.current.play().catch(() => {});
  };

  return (
  <div className="relative w-full h-[600px] md:h-[850px] bg-[#fdf8e1] flex flex-col items-center overflow-hidden bg-gradient-to-b from-yellow-100 to-yellow-400 image-border">
      
      {/* 🛕 ARCH IMAGE */}
      <div className="absolute inset-0 z-20 pointer-events-none p-2 md:p-4">
        <img
          src="/designs/temple-arch.jpg"
          alt="Temple Arch"
          className="w-full h-full object-fill"
        />
      </div>

      {/* 🎯 DEITY & TEXT CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[180px] md:mt-[220px]">
        <img
          src={img}
          alt="Ganesh"
          className="w-[180px] md:w-[450px] lg:w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-8 mt-20"
        />
        
     
      </div>

      {/* 🔔 CALIBRATED BELL HIT ZONES */}
      <div className="absolute top-0 left-0 w-full h-full z-[100] pointer-events-none">
        
        <style dangerouslySetInnerHTML={{ __html: `
          .bell-trigger {
            position: absolute;
            cursor: pointer;
            pointer-events: auto;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          /* Subtle feedback when hovering over the bell area */
          .bell-trigger:hover { background-color: rgba(255, 215, 0, 0.1); }
        `}} />

        {/* Outer Bells (Left & Right) - Shifted down to ~37% */}
        <div onClick={playBell} className="bell-trigger w-[5%] h-[9%] top-[37.5%] left-[23%]" />
        <div onClick={playBell} className="bell-trigger w-[5%] h-[9%] top-[37.5%] left-[73%]" />
        
        {/* Mid Bells - Shifted down to ~30% */}
        <div onClick={playBell} className="bell-trigger w-[5%] h-[9%] top-[30.5%] left-[29.2%]" />
        <div onClick={playBell} className="bell-trigger w-[5%] h-[9%] top-[30.5%] left-[67.2%]" />

        {/* Inner Bells - Shifted down to ~24% */}
        <div onClick={playBell} className="bell-trigger w-[5%] h-[9%] top-[24%] left-[39.3%]" />
        <div onClick={playBell} className="bell-trigger w-[5%] h-[9%] top-[24%] left-[57.3%]" />

        {/* CENTER BIG BELL - Shifted down to ~19% */}
        <div onClick={playBell} className="bell-trigger w-[7.5%] h-[12%] top-[19.5%] left-[46.5%]" />
      </div>

      {/* ✨ LIGHTING EFFECT */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-300/10 blur-[120px] rounded-full z-0"></div>
    </div>
  );
}