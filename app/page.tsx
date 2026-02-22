import { DashboardPreviewSection } from "@/components/home/dashboard-preview-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "react-day-picker";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DashboardPreviewSection />
      <Footer />
    </main>
  )
}
