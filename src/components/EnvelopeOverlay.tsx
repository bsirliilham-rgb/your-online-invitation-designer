import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface EnvelopeOverlayProps {
  onOpen: () => void;
}

const EnvelopeOverlay = ({ onOpen }: EnvelopeOverlayProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          key="envelope-closed"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground cursor-pointer"
          onClick={handleClick}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Envelope body */}
          <div className="relative w-72 h-48 md:w-96 md:h-64">
            {/* Back of envelope */}
            <motion.div
              className="absolute inset-0 bg-card rounded-2xl shadow-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Letter inside */}
            <motion.div
              className="absolute left-4 right-4 top-2 bottom-4 bg-background rounded-xl flex items-center justify-center"
              initial={{ y: 0 }}
              animate={isOpening ? { y: -120 } : { y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-center px-4">
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
                  Dəvətnamə
                </p>
                <p className="text-xl md:text-2xl font-display text-foreground">
                  Aylin & Murad
                </p>
                <p className="text-sm text-muted-foreground mt-1">24.09.2025</p>
              </div>
            </motion.div>

            {/* Flap (triangle) */}
            <motion.div
              className="absolute -top-[1px] left-0 right-0 origin-top"
              initial={{ rotateX: 0 }}
              animate={isOpening ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <svg viewBox="0 0 384 128" className="w-full drop-shadow-sm">
                <path
                  d="M0,0 L192,128 L384,0 Z"
                  fill="hsl(240, 5%, 96%)"
                  stroke="hsl(0, 0%, 90%)"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            {/* Seal */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: isOpening ? 0 : 1 }}
              transition={{ delay: isOpening ? 0 : 1, duration: 0.4 }}
            >
              <Heart className="w-4 h-4 text-accent-foreground" />
            </motion.div>
          </div>

          {/* Hint text */}
          <motion.p
            className="mt-12 text-primary-foreground/50 text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1.2, duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Açmaq üçün toxunun
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          key="envelope-opening"
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground"
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Flying letter */}
          <motion.div
            className="bg-background rounded-xl p-8 shadow-card text-center"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: -300, scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
              Dəvətnamə
            </p>
            <p className="text-2xl font-display text-foreground">Aylin & Murad</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeOverlay;
