import { motion } from "framer-motion";
import venueImage from "@/assets/venue-map.jpg";

const VenueSection = () => {
  return (
    <section className="px-6 pb-24">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-card p-8 md:p-16 flex flex-col items-center shadow-card"
      >
        <h2 className="text-3xl font-display mb-8 text-center text-foreground">
          Mərasimin ünvanı
        </h2>
        <div className="w-full h-64 rounded-2xl mb-8 overflow-hidden">
          <img
            src={venueImage}
            className="w-full h-full object-cover"
            alt="Məkan"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://waze.com/ul"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity shadow-lg font-medium"
          >
            Waze ilə get
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-background border border-border rounded-xl hover:bg-muted transition-colors shadow-sm font-medium text-foreground"
          >
            Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
