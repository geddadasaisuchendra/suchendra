import { Card, CardContent } from "@/components/ui/card"
import { Cake, Heart, PartyPopper, Sparkles, Camera, Music } from "lucide-react"

const features = [
  {
    icon: Cake,
    title: "Birthday Parties",
    description:
      "Celebrate with unforgettable themes, stunning decorations, and delicious cakes. Create cherished memories with personalized experiences.",
    image: "/images/screenshot-202025-12-27-20105215.png",
  },
  {
    icon: Heart,
    title: "Anniversary Celebrations",
    description:
      "Mark your special milestone with beautifully arranged setups. From romantic ambiance to elegant themes that make your day magical.",
    image: "/images/screenshot-202025-12-27-20105120.png",
  },
  {
    icon: PartyPopper,
    title: "Special Events",
    description:
      "Host the ultimate party with spectacular themes and vibrant decorations. Perfect for corporate events, baby showers, and festivals.",
    image: "/images/screenshot-202025-12-27-20105229.png",
  },
  {
    icon: Sparkles,
    title: "Candlelight Dinners",
    description:
      "Make your evening memorable with our elegant candlelight dinner setup. Romantic ambiance with beautiful decor for couples.",
    image: "/images/screenshot-202025-12-27-20105155.png",
  },
  {
    icon: Camera,
    title: "Photoshoot Services",
    description:
      "Enhance your photos with beautifully designed backdrops and photo points. Perfect package for professional photoshoots.",
    image: "/images/screenshot-202025-12-27-20105059.png",
  },
  {
    icon: Music,
    title: "Premium Setup",
    description:
      "Rooftop venue with music system, multilevel lighting, photo points, and all amenities for your perfect celebration.",
    image: "/images/screenshot-202025-12-27-20105140.png",
  },
]

export default function VenueFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-background via-pink-50/20 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs sm:text-sm font-medium text-purple-700 mb-4 sm:mb-6">
            Our Services
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance px-2">
            Where Every <span className="gradient-text">Celebration</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Becomes a Symphony of <span className="brand-highlight">Sweet Memories</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            From intimate gatherings to grand celebrations, we craft experiences that last a lifetime
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardContent className="pt-6 pb-6 px-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
