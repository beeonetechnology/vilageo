import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaneTakeoff,Hotel, Briefcase, Globe2, Zap, Crown,Users,MapPinned,Star,Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import bgImage from '@/assets/imgi_108_dark-green-solid-background-suitable-for-business-presentations-websites-social-media-graphics-digital-marketing-and-product-displays-video.jpg';
export const WhyChooseUs = () => {
  const addToRefs = useScrollAnimation();
  
  const features = [
    {
  icon: PlaneTakeoff, 
  title: "Tour Packages",
  description: "Discover handpicked holiday packages with seamless travel, comfortable stays, and unforgettable experiences.",
  color: "text-green-500",
  bgColor: "bg-green-500/10"
    },

   {
  icon: Hotel,
  title: "Resort Bookings",
  description: "Book luxury resorts with breathtaking views, world-class amenities, and unmatched comfort for your stay.",
  color: "text-emerald-500",
  bgColor: "bg-emerald-500/10"
}
,
   {
  icon: Briefcase,
  title: "Property & Tourism Consultancy",
  description: "Get expert guidance in real estate and tourism planning with tailored solutions to maximize your investment and travel experience.",
  color: "text-purple-500",
  bgColor: "bg-purple-500/10"
}
,
   {
  icon: Globe2,
  title: "DMC Packages",
  description: "Comprehensive destination management solutions including transport, tours, accommodation, and on-ground support.",
  color: "text-pink-500",
  bgColor: "bg-pink-500/10"
}

  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-primary/5 to-muted/30 relative overflow-hidden "
      style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-primary-glow/15 to-primary/15 rounded-full animate-float-delayed blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full animate-pulse-glow blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20" ref={addToRefs}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary-glow/10 px-8 py-4 rounded-full mb-8 animate-bounce-in backdrop-blur-sm border border-primary/20">
            <Crown className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-lg font-bold text-primary">Premium Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-8 animate-fade-up">
           <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
  Why Choose Vilageo?
</span>

            <br />
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent ">
           
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            "Unique travel solutions at the best value — from tours and stays to expert 
            <span className="text-primary font-semibold"> consultancy and DMC services, </span> making every journey unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
  const IconComponent = feature.icon;
  return (
    <Card 
      key={index} 
      className="text-center bg-white/10 backdrop-blur-md text-white hover-tilt group border-0 animate-scale-in" 
      style={{ animationDelay: `${index * 0.2}s` }}
      ref={addToRefs}
    >
      <CardHeader className="pb-4">
        <div className={`w-20 h-20 ${feature.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
          <IconComponent className={`w-10 h-10 ${feature.color} group-hover:animate-pulse`} />
        </div>
        <CardTitle className="text-xl font-bold font-poppins group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
})}

        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8" ref={addToRefs}>
          {[
            { number: "10K+", label: "Happy Travelers", icon: Users },
            { number: "50+", label: "Destinations", icon: MapPinned },
            { number: "98%", label: "Satisfaction Rate", icon: Star },
            { number: "24/7", label: "Support Available", icon: Headphones }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center glass-card p-6 rounded-3xl animate-bounce-in"
                style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              >
                <IconComponent className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};