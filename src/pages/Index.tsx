import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import InvitationMessage from "@/components/InvitationMessage";
import DetailsSection from "@/components/DetailsSection";
import CountdownSection from "@/components/CountdownSection";
import VenueSection from "@/components/VenueSection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";
import EnvelopeOverlay from "@/components/EnvelopeOverlay";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && <EnvelopeOverlay onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-background text-foreground font-body antialiased"
        >
          <MusicPlayer />
          <HeroSection />
          <InvitationMessage />
          <DetailsSection />
          <CountdownSection />
          <VenueSection />
          <RsvpSection />
          <FooterSection />
        </motion.div>
      )}
    </>
  );
};

export default Index;
