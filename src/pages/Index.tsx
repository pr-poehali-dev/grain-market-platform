import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import ActiveLots from "@/components/ActiveLots";
import AuctionsSection from "@/components/AuctionsSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-golos">
      <Navbar />
      <TickerBar />
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <ActiveLots />
      <AuctionsSection />
      <AnalyticsSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
