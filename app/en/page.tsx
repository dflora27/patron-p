import BrandsMarquee from "@/components/sections/BrandsMarquee";
import JournalSection from "@/components/sections/JournalSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import PricingSection from "@/components/sections/PricingSection";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FastBooking from "@/components/conversion/FastBooking";
import AboutUs from "@/components/sections/AboutUs";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BeforeAfter from "@/components/sections/BeforeAfter";
import TeamGallery from "@/components/sections/TeamGallery";
import ParallaxHero from "@/components/hero/ParallaxHero";

export default function EnglishHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <ParallaxHero />
      <div className="w-full">
        <AboutUs />
        <TeamGallery />
        <ServicesGrid />
        <ReviewsSection />
        <InstagramFeed />
        <BeforeAfter />
        <BrandsMarquee />
        <PricingSection />
        <JournalSection />
      </div>
      <FastBooking />
    </main>
  );
}
