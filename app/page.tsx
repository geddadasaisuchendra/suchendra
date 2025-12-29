import HeroSection from "@/components/hero-section"
import VenueFeatures from "@/components/venue-features"
import ThemesGallery from "@/components/themes-gallery"
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VenueFeatures />
      <ThemesGallery />
      <BookingSection />
      <Footer />
    </main>
  )
}
