import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wedding.jpg";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          className="w-full h-full object-cover brightness-[0.65]"
          alt="Toy şəkli"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease }}
          className="uppercase tracking-[0.2em] text-sm mb-4 text-accent-foreground/80"
        >
          Sizi dəvət edirik
        </motion.p>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, ease }}
          className="text-6xl md:text-8xl font-display mb-8 text-primary-foreground"
        >
          Aylin & Murad
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, ease }}
          className="text-lg text-primary-foreground/70 font-body"
        >
          24.09.2025
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
