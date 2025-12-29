"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

const packages = [
  {
    name: "Silver Package",
    price: "₹499",
    timing: "Before 5 PM",
    image: "/images/screenshot-202025-12-27-20105229.png",
    features: ["Any one theme (per hr)", "For 2 people", "Extra person ₹100"],
    popular: false,
  },
  {
    name: "Gold Package",
    price: "₹1,499",
    timing: "Before 5 PM",
    image: "/images/screenshot-202025-12-27-20105215.png",
    features: [
      "Welcome Drink",
      "Birthday Cake",
      "Snacks",
      "4 themes",
      "For 4 people",
      "4 Photo points",
      "Music System",
    ],
    popular: true,
  },
  {
    name: "Diamond Package",
    price: "₹1,999",
    timing: "Before 5 PM",
    image: "/images/screenshot-202025-12-27-20105120.png",
    features: [
      "Welcome Drink",
      "Birthday Cake",
      "Snacks",
      "5 themes with Balloon Decor",
      "For 4 people",
      "4 Photo points",
      "Music System",
    ],
    popular: false,
  },
  {
    name: "Premium Package",
    price: "₹2,499",
    timing: "Morning 10-5",
    image: "/images/screenshot-202025-12-27-20105140.png",
    features: [
      "Rooftop Access",
      "Music System",
      "4 Photo Points",
      "5 themes with Balloon Decor",
      "2min Video Clip",
      "40 Photos",
      "Max 10 persons",
    ],
    popular: false,
  },
  {
    name: "Candlelight Dinner",
    price: "₹1,499",
    timing: "9 AM to 10 PM",
    image: "/images/screenshot-202025-12-27-20105155.png",
    features: ["Elegant setup", "Romantic ambiance", "Perfect for couples"],
    popular: false,
  },
  {
    name: "Photoshoot",
    price: "₹1,599",
    timing: "9 AM to 10 PM",
    image: "/images/screenshot-202025-12-27-20105059.png",
    features: ["Beautiful photo points", "Backdrop decor", "Best for photoshoots"],
    popular: false,
  },
]

export default function ThemesGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-background via-purple-50/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs sm:text-sm font-medium text-purple-700 mb-4 sm:mb-6">
            Our Packages
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance px-2">
            Choose Your Perfect <span className="gradient-text">Package</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Affordable celebration packages starting from just ₹499. Customizable to fit your vision and budget.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-primary relative" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold border-0 text-xs">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold mb-1">{pkg.price}</div>
                  <div className="text-white/80 text-xs sm:text-sm">{pkg.timing}</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{pkg.name}</h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-2">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-full border border-purple-200">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 flex-shrink-0" />
            <span className="text-sm sm:text-lg font-semibold">
              Use Coupon <span className="font-mono font-bold text-purple-700">'FLAT300'</span> to get ₹300 off
            </span>
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-pink-600 flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
