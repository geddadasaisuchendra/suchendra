"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, MapPin, Mail, Phone, Instagram, Star } from "lucide-react"

const testimonials = [
  {
    name: "Devi G.",
    text: "Sweet Memories made my birthday party unforgettable! The ambiance, music, and service were top-notch.",
    rating: 5,
  },
  {
    name: "Sairam K.",
    text: "Perfect for our anniversary. The team took care of everything, from decorations to the perfect playlist.",
    rating: 5,
  },
  {
    name: "Suchendra G.",
    text: "Best party venue in town! The attention to detail and personalized touch made our event truly special.",
    rating: 5,
  },
]

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    occasion: "",
    message: "",
  })

  const handleWhatsAppClick = () => {
    const message = `Hi! I'd like to book Sweet Memories for ${formData.occasion || "celebration"}. Date: ${formData.date || "TBD"}, Guests: ${formData.guests || "TBD"}`
    window.open(`https://wa.me/919959340959?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleWhatsAppClick()
  }

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full text-xs sm:text-sm font-medium text-purple-700 mb-4 sm:mb-6">
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance text-purple-950 px-2">
            Ready to Experience <span className="brand-highlight">Sweet Memories?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-purple-800 max-w-3xl mx-auto leading-relaxed px-2">
            Let's start planning your perfect celebration. Fill out the form or reach us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          <Card className="lg:col-span-3 shadow-2xl border-purple-200">
            <CardHeader className="pb-6 sm:pb-8 px-4 sm:px-6">
              <CardTitle className="text-2xl sm:text-3xl font-serif text-purple-950">Reserve Your Date</CardTitle>
              <CardDescription className="text-sm sm:text-base text-purple-700">
                Complete the form and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-purple-950">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-purple-950">
                      Phone / WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 99593 40959"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm font-medium text-purple-950">
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="h-12 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-sm font-medium text-purple-950">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      placeholder="e.g., 50"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="h-12 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occasion" className="text-sm font-medium text-purple-950">
                    Occasion / Package
                  </Label>
                  <Input
                    id="occasion"
                    placeholder="e.g., Birthday, Anniversary, Gold Package"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="h-12 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-purple-950">
                    Additional Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your celebration plans..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 h-11 sm:h-12 text-sm sm:text-base bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    Book via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 h-11 sm:h-12 text-sm sm:text-base border-purple-600 text-purple-700 hover:bg-purple-50 bg-transparent"
                    onClick={() => window.open("tel:+919959340959")}
                  >
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    Call Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <Card className="shadow-xl border-purple-200">
              <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
                <CardTitle className="text-lg sm:text-xl font-serif text-purple-950">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
                <a
                  href="https://maps.app.goo.gl/D8jakwNFthycBdXq7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm min-w-0">
                    <div className="font-medium text-purple-950 group-hover:text-purple-600 transition-colors">
                      Location
                    </div>
                    <div className="text-purple-700 break-words">
                      29-77, Prakasham Street, Near SBI Bank, Penugonda, West Godavari, Andhra Pradesh, 534320
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:Sweetmemorie2025gm@gmail.com"
                  className="flex items-start gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm min-w-0">
                    <div className="font-medium text-purple-950 group-hover:text-purple-600 transition-colors">
                      Email
                    </div>
                    <div className="text-purple-700 break-all">Sweetmemorie2025gm@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919959340959"
                  className="flex items-start gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <div className="font-medium text-purple-950 group-hover:text-purple-600 transition-colors">
                      Phone
                    </div>
                    <div className="text-purple-700">+91 99593 40959</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/sweetmemories_gm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <div className="font-medium text-purple-950 group-hover:text-purple-600 transition-colors">
                      Instagram
                    </div>
                    <div className="text-purple-700">@sweetmemories_gm</div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
                <CardTitle className="text-lg sm:text-xl font-serif text-purple-950">What Our Clients Say</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-purple-600 text-purple-600" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-purple-700 leading-relaxed">{testimonial.text}</p>
                    <p className="text-xs sm:text-sm font-medium text-purple-900">— {testimonial.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
