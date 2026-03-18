import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const details = [
  { icon: CalendarDays, label: "Tarix", value: "24 Sentyabr, 2025" },
  { icon: Clock, label: "Saat", value: "18:00 — 23:00" },
  { icon: MapPin, label: "Məkan", value: "Buta Palace" },
];

const DetailsSection = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {details.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="space-y-3"
        >
          <item.icon className="w-5 h-5 mx-auto text-accent" />
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
            {item.label}
          </p>
          <p className="text-xl font-display text-foreground">{item.value}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default DetailsSection;
