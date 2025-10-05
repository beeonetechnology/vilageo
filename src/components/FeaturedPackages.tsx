import { PackageCard } from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { mockPackages } from "@/data/mockData";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import bgImage from '@/assets/imgi_108_dark-green-solid-background-suitable-for-business-presentations-websites-social-media-graphics-digital-marketing-and-product-displays-video.jpg';
export const FeaturedPackages = () => {
  const addToRefs = useScrollAnimation();
  const featuredPackages = mockPackages.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
      style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full animate-float blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-primary/3 rounded-full animate-float-slow blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20" ref={addToRefs}>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-8 animate-bounce-in">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Most Popular</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-8 animate-fade-up">
        <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
  Featured Travel
</span>
<br />
<span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
  Packages
</span>


          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Handpicked destinations and experiences crafted by our travel experts for 
            <span className="text-primary font-semibold"> unforgettable journeys</span> around the world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {featuredPackages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 0.3}s` }}
              ref={addToRefs}
            >
              <PackageCard package={pkg} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up" style={{ animationDelay: '0.9s' }} ref={addToRefs}>
          <Link to="/packages">
            <Button className="btn-hero text-xl px-16 py-6 h-auto shadow-2xl hover:shadow-2xl transform hover:scale-95 transition-all duration-500 animate-pulse-glow">
              <Sparkles className="w-5 h-6 mr-3" />
              View All Packages
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
          
          <p className="text-sm text-muted-foreground mt-4 animate-fade-up" style={{ animationDelay: '1.1s' }}>
            Over 50+ destinations waiting to be explored
          </p>
        </div>
      </div>
    </section>
  );
};