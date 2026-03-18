import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import CountdownSection from "@/components/CountdownSection";
import VenueSection from "@/components/VenueSection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      <HeroSection />
      <DetailsSection />
      <CountdownSection />
      <VenueSection />
      <RsvpSection />
      <FooterSection />
    </div>
  );
};

export default Index;
