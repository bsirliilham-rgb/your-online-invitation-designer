import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2025-09-24T18:00:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Gün", value: timeLeft.days },
    { label: "Saat", value: timeLeft.hours },
    { label: "Dəqiqə", value: timeLeft.minutes },
    { label: "Saniyə", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-8"
        >
          Geri sayım
        </motion.p>
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <motion.div
              key={item.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <p className="text-3xl md:text-5xl font-display tabular-nums text-foreground">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
