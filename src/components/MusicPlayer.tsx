import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL = "https://cdn.pixabay.com/audio/2024/11/29/audio_39a230ed43.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary/80 backdrop-blur-md text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
      aria-label={isPlaying ? "Musiqini dayandır" : "Musiqini çal"}
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </motion.button>
  );
};

export default MusicPlayer;
