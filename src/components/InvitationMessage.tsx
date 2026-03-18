import { motion } from "framer-motion";

const InvitationMessage = () => {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          Hörmətli qonağımız
        </p>
        <h2 className="text-3xl md:text-4xl font-display text-foreground text-balance leading-relaxed">
          Həyatımızın ən xoşbəxt gününü bizimlə bölüşməyinizi arzu edirik
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-[1px] bg-accent mx-auto"
        />
        <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Sevgimizin taçlandığı bu xüsusi gündə sizin iştirakınız bizim üçün ən dəyərli hədiyyədir.
          Ailələrimizin birləşdiyi bu bayramda sizinlə birlikdə olmağı səbirsizliklə gözləyirik.
        </p>
      </motion.div>
    </section>
  );
};

export default InvitationMessage;
