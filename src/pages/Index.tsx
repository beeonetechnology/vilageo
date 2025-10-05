import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedPackages } from "@/components/FeaturedPackages";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PopularDestinations } from "@/components/PopularDestinations";
import { Testimonials } from "@/components/Testimonials";
import whatsappIcon from "@/assets/whatsapp.icon.png";
import { Link } from "react-router-dom";
// Asset imports for the carousel
import tropicalBeach from "@/assets/tropical-beach.jpg";
import mountainLandscape from "@/assets/andaman-beach.jpg";
import citySkyline from "@/assets/kochi-kerala.jpg";
import desertLandscape from "@/assets/nort-india.jpg";

// Define the Slide interface and slides data
interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: tropicalBeach,
    title: "Tropical Paradise",
    subtitle: "Lakshadweep",
    description:
      "Explore Lakshadweep’s beaches and clear waters.",
  },
  {
    id: 2,
    image: mountainLandscape,
    title: "Crystal Dreams",
    subtitle: "Andaman",
    description: "Experience Andaman’s beautiful beaches and lagoons."
  },
 {
  id: 3,
  image: citySkyline,
  title: "Lush Trails",
  subtitle: "Kerala",
  description: "Explore Kerala’s backwaters, greenery, and culture."
}
,
  {
    id: 4,
    image: desertLandscape,
    title: "Royal Trails",
    subtitle: "North india",
    description:
    "Explore North India’s deserts and heritage.",
  },
];

// Define the HeroCarousel component
const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Set isFirstRender to false after the initial load.
    if (isFirstRender) {
      setTimeout(() => setIsFirstRender(false), 1500);
    }
  }, [isFirstRender]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navbar />

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${
            index === currentSlide
              ? "carousel-slide-active"
              : index < currentSlide
              ? "carousel-slide-exit"
              : "carousel-slide-enter"
          }`}
        >
          <div
  className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-1000 ease-out"
  style={{
    backgroundImage: `url(${slide.image})`,
    transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
    width: "100%",
    height: "100%", // fixed height or responsive like 'h-64'
    backgroundSize: "cover", // ensures image covers the div without distortion
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
></div>

         

          {/* Gradient Overlay */}
          <div className="absolute inset-0 gradient-overlay" />

          {/* Slide Content */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : isFirstRender
                    ? "opacity-0 translate-y-8" // Exiting downwards on initial load
                    : "opacity-0 -translate-y-8" // Exiting upwards on subsequent changes
                }`}
              >
                <p className="text-lg md:text-xl font-light mb-2 text-accent animate-float">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto opacity-90">
                  {slide.description}
                </p>

                <div className="mt-10">
               

<Link
  to="/packages" // 👉 your route for the packages page
  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-dramatic hover:shadow-glow inline-block"
>
  Explore Destination
</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-glow"
                  : "bg-white/50 hover:bg-white/75 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Play/Pause Indicator *//*}
      <div className="absolute top-8 right-8 z-20">
        <div
          className={`text-white/70 text-sm ${
            isPlaying ? "animate-pulse" : ""
          }`}
        >
          {isPlaying ? "Auto-playing" : "Paused"}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-float">
        <div className="text-white/70 text-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mb-2 flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-xs">Scroll</p>
        </div>
      </div>
    </div>
  );
};

// The main Index page component
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section using the new carousel */}
      <HeroCarousel />
      
      {/* Enhanced Sections */}
      <FeaturedPackages />
      <WhyChooseUs />
      <PopularDestinations />
      <Testimonials />
      <Footer />
   <a
  href="https://wa.me/919745690702?text=Hello%20I%20am%20interested%20in%20your%20travel%20packages"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
>
  <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
</a>
</div>
    
  );
};

export default Index;