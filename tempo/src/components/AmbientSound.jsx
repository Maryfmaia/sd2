import { useState } from "react";

function AmbientSound() {
  const [audio] = useState(new Audio("/assets/AmbientSound.mp3")); // Caminho do áudio
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((e) => console.error("Erro ao tocar o som:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
    >
      {isPlaying ? "⏸️ Pausar Som" : "▶️ Tocar Som"}
    </button>
  );
}

export default AmbientSound;

