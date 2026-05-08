// import img from "../assets/ganesh.jpg";
// import { useRef, useEffect } from "react";
// import BackgroundAudio from "./BackgroundAudio";

// export default function HeroSection({ audioEnabled, isMuted }) {
//   const bellRef = useRef(null);
//   const masterVolume = 0.9;

//   const playBell = () => {
//     if (isMuted || !audioEnabled) return;
//     if (!bellRef.current) {
//       bellRef.current = new Audio("/audio/bell.mp3");
//     }
//     if (bellRef.current.paused || bellRef.current.currentTime > 0.2) {
//       bellRef.current.volume = masterVolume;
//       bellRef.current.currentTime = 0;
//       bellRef.current.play().catch(() => {});
//     }
//   };

//   return (
//     <div className="relative w-full h-[600px] md:h-[850px] flex flex-col items-center overflow-hidden bg-gradient-to-b from-yellow-100 to-yellow-400">
//       <BackgroundAudio isEnabled={audioEnabled} volume={masterVolume} isMuted={isMuted} />

//       {/* 🛕 TEMPLE ARCH */}
//       <div className="absolute inset-0 z-20 pointer-events-none p-2 md:p-4">
//         <img src="/designs/temple-arch.jpg" alt="Temple Arch" className="w-full h-full object-fill" />
//       </div>

//       {/* 🎯 DEITY */}
//       <div className="relative z-10 flex flex-col items-center text-center mt-[180px] md:mt-[220px]">
//         <img src={img} alt="Ganesh" className="w-[180px] md:w-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-8" />
//       </div>

//       {/* 🔔 ADJUSTED BELL CLICK ZONES (Moved Down) */}
//       <div className="absolute top-0 left-0 w-full h-full z-[100] pointer-events-none">
//         <style dangerouslySetInnerHTML={{ __html: `
//           .bell-trigger { position: absolute; cursor: pointer; pointer-events: auto; border-radius: 50%; }
//         `}} />
        
//         {/* Center Bell - moved from top-18% to top-25% */}
//         <div onClick={playBell} className="bell-trigger w-[10%] h-[15%] top-[25%] left-[45%]" />
        
//         {/* Left Bell - moved from top-24% to top-32% */}
//         <div onClick={playBell} className="bell-trigger w-[6%] h-[10%] top-[32%] left-[38%]" />
        
//         {/* Right Bell - moved from top-24% to top-32% */}
//         <div onClick={playBell} className="bell-trigger w-[6%] h-[10%] top-[32%] left-[58%]" />
//       </div>
//     </div>
//   );
// }

import img from "../assets/ganesh.jpg";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-orange-100 via-yellow-200 to-amber-500 flex items-center justify-center">

      {/* 🌟 Background Glow */}
      <div className="absolute inset-0 overflow-hidden z-0">

        <div className="absolute top-1/2 left-1/2
          w-[350px] h-[350px]
          sm:w-[500px] sm:h-[500px]
          md:w-[650px] md:h-[650px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-yellow-300/40 blur-[120px]
          animate-divineGlow"
        />

        {/* Floating Particles */}
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="absolute particle"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🛕 Ganesh Container */}
      <div className="relative z-10 flex items-center justify-center px-4">

        {/* ⚡ Animated Divine Border */}
        <div className="divine-border">
          <div className="inner-glow">
            <img
              src={img}
              alt="Lord Ganesh"
              className="
                relative
                w-[88vw]
                sm:w-[65vw]
                md:w-[430px]
                lg:w-[520px]
                xl:w-[580px]
                object-contain
                animate-float
                select-none
              "
            />
          </div>
        </div>
      </div>

      {/* Bottom Fog */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yellow-200/60 to-transparent" />
    </div>
  );
}