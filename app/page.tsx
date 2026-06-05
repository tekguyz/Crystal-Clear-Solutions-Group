import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { AreaMatrixSection } from "@/components/sections/AreaMatrixSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <BookingWizard />
        <ReviewsSection />
        <AreaMatrixSection />
      </main>
      <Footer />
    </div>
  );
}
