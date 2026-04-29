import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.9;
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/audio/om_gan_ganpatay.mp3" type="audio/mpeg" />
      </audio>

      {/* BUTTON */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-5 right-5 z-50 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        {playing ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
}