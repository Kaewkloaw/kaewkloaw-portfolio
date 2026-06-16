"use client";

import { useRef, useState } from "react";

export default function AudioGate() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [entered, setEntered] = useState(false);

  const enterOcean = async () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.25;
    await audioRef.current.play();
    setEntered(true);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/ocean.mp3" type="audio/mpeg" />
      </audio>

      {!entered && (
        <button
          onClick={enterOcean}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#071A2F]/80 text-2xl font-bold text-pink-100 backdrop-blur-xl"
        >
          Enter Ocean 🪼
        </button>
      )}
    </>
  );
}