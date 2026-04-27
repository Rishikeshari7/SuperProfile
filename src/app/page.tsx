import AnnouncementBar from "@/components/AnnouncementBar";
import CreatorWorkflows from "@/components/CreatorWorkflows";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import FeaturedIn from "@/components/FeaturedIn";
import Footer from "@/components/Footer";
import GrowthTools from "@/components/GrowthTools";
import HeroBanner from "@/components/HeroBanner";
import Integrations from "@/components/Integrations";
import MetaBadge from "@/components/MetaBadge";
import MonetizationTools from "@/components/MonetizationTools";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroBanner />
      <FeaturedIn />
      <MetaBadge />
      <GrowthTools />
      <MonetizationTools />
      <CreatorWorkflows />
      <Integrations />
      <Testimonials />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
  );
}
