"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Phone, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#2b1094,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#ec4899,transparent_50%)]" />
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-purple-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <div className="font-serif brand-highlight text-3xl">Sweet Memories</div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+919959340959"
              className="hidden sm:flex items-center gap-2 text-sm text-purple-900 hover:text-purple-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9959366666</span>
            </a>
            <a
              href="https://www.instagram.com/sweetmemories_gm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-purple-900 hover:text-purple-600 transition-colors text-base"
            >
              <Instagram className="w-7 h-7" />
              <span className="hidden sm:inline">Follow Us</span>
            </a>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs sm:text-sm px-3 sm:px-4"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-700">
              Penugonda's Premier Rooftop Venue
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance text-purple-950">
              Let's Celebrate Your Party With <span className="brand-highlight">Sweet Memories</span>
            </h1>

            <p className="text-lg sm:text-xl text-purple-800 max-w-xl leading-relaxed">
              Experience unforgettable celebrations at our exclusive rooftop space. Perfect ambiance, elegant themes,
              and customized balloon décor for birthdays, anniversaries, and special gatherings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-base sm:text-lg h-auto px-6"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Celebration
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-700 hover:bg-purple-50 bg-transparent py-6 text-base sm:text-lg h-auto px-8"
                onClick={() => window.open("https://wa.me/+919959340959", "_blank")}
              >
                WhatsApp Us
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 border-t border-purple-200">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-900">500+</div>
                <div className="text-sm text-purple-700">Happy Celebrations</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-900">₹499+</div>
                <div className="text-sm text-purple-700">Affordable Packages</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-900">50-100</div>
                <div className="text-sm text-purple-700">Guest Capacity</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/screenshot-202025-12-27-20105155.png"
                    alt="Rooftop party setup with fairy lights"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/screenshot-202025-12-27-20105215.png"
                    alt="Birthday celebration with cake"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/screenshot-202025-12-27-20105059.png"
                    alt="Birthday decoration with HBD letters"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/screenshot-202025-12-27-20105120.png"
                    alt="Anniversary celebration setup"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-pink-300/30 to-yellow-400/30 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
        <div className="inline-flex items-start sm:items-center gap-2 px-4 py-3 bg-white border border-purple-200 rounded-full shadow-lg max-w-full">
          <MapPin className="w-4 h-4 text-purple-600 mt-0.5 sm:mt-0 flex-shrink-0" />
          <span className="text-sm text-purple-900 break-words">
            29-77, Prakasham Street, Near SBI Bank, Penugonda, West Godavari
          </span>
        </div>
      </div>
    </section>
  )
}
