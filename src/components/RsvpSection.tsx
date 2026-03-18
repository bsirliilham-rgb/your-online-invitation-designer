import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const RsvpSection = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("yes");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Zəhmət olmasa adınızı daxil edin.");
      return;
    }
    setSubmitted(true);
    toast.success("Təşəkkür edirik! Cavabınız qeydə alındı.");
  };

  return (
    <section className="py-24 bg-primary px-6">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="text-4xl font-display mb-4 text-primary-foreground">
          İştirak təsdiqi
        </h2>
        <p className="text-primary-foreground/50 mb-12 font-body">
          Zəhmət olmasa, sentyabrın 10-na qədər iştirakınızı təsdiqləyin.
        </p>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-12"
          >
            <p className="text-2xl font-display text-primary-foreground">
              Təşəkkür edirik! 💐
            </p>
            <p className="text-primary-foreground/50 mt-2">
              Cavabınız qeydə alındı.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız və Soyadınız"
              className="w-full p-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary-foreground placeholder:text-primary-foreground/30"
            />
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full p-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary-foreground"
            >
              <option value="yes">İştirak edirəm</option>
              <option value="no">İştirak edə bilmirəm</option>
            </select>
            <button
              type="submit"
              className="w-full py-4 bg-accent text-accent-foreground rounded-xl font-bold hover:brightness-110 transition-all"
            >
              Göndər
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default RsvpSection;
