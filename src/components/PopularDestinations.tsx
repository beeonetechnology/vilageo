import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { destinations } from "@/data/mockData";
import bgImage from '@/assets/imgi_108_dark-green-solid-background-suitable-for-business-presentations-websites-social-media-graphics-digital-marketing-and-product-displays-video.jpg';

// Map each destination to its image
import tropicalBeach from "@/assets/island-paradise.jpg";
import mountainLandscape from "@/assets/andaman.jpg";
import citySkyline from "@/assets/kerala.jpg";
import northindia from "@/assets/nort-india.jpg";
import tamilnadu from "@/assets/tamilnadu.jpg";
import karnataka from "@/assets/karnataka.jpg";
import goa from "@/assets/goa.jpg";
import hyderabad from "@/assets/hydrabad.jpg";
import Northeastindia from "@/assets/norteast-02.jpg";
import Malaysia from "@/assets/Malaysia.jpg";
import Singapore from "@/assets/Singapore.jpg";
import Thailand from "@/assets/tailand.jpg";
import Bali from "@/assets/bali.jpg";
import Srilanka from "@/assets/SriLanka.jpg";
import Maldives from "@/assets/maldives.jpg";
import Mauritius from "@/assets/Mauritius.jpg";

const destinationImages: Record<string, string> = {
  "Lakshadweep": tropicalBeach,
  "Andaman": mountainLandscape,
  "Kerala": citySkyline,
  "North india":northindia,
  "Tamilnadu": tamilnadu,
  "Karnataka": karnataka,
  "Goa": goa,
  "Hyderabad": hyderabad,
  "North east india" :Northeastindia,
  "Malaysia":Malaysia,
  "Singapore":Singapore,
  "Thailand":Thailand,
  "Bali":Bali,
  "Sri lanka":Srilanka,
  "Maldives":Maldives,
  "Mauritius":Mauritius
};

export const PopularDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0].name);

  return (
    <section
      className="py-20 bg-background"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 animate-fade-up bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Discover the world's most breathtaking destinations with our carefully curated travel experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Destinations List */}
          <div className="grid grid-cols-2 gap-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {destinations.map((destination, index) => (
              <Card
                key={destination.name}
                className={`bg-white/10 backdrop-blur-md text-white hover:scale-105 transition-transform duration-300 cursor-pointer group shadow-none ${
                  selectedDestination === destination.name ? "border-2 border-primary" : ""
                }`}
                onClick={() => setSelectedDestination(destination.name)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-2 text-center">
                  <h3 className="font-semibold text-lg font-poppins mb-2 group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hero Image */}
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative overflow-hidden rounded-2xl card-shadow">
              <img
                src={destinationImages[selectedDestination]}
                alt={selectedDestination}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold font-poppins mb-2">
                  {selectedDestination}
                </h3>
                <p className="text-white/90">
                  Explore the beauty of {selectedDestination}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
