import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/mockData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import bgImage from '@/assets/imgi_108_dark-green-solid-background-suitable-for-business-presentations-websites-social-media-graphics-digital-marketing-and-product-displays-video.jpg';
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary/5 "
      style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 animate-fade-up bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Real experiences from real travelers who have explored the world with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="card-shadow animate-scale-in bg-transparent">
  <CardContent className="p-8 xl:p-10 text-white">
    <div className="text-center">
      <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
      <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
        "{testimonials[currentIndex].comment}"
      </blockquote>

      <div className="flex items-center justify-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="font-semibold text-primary text-lg">
            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
          <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
          <p className="text-sm text-primary">{testimonials[currentIndex].package}</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

{/* Navigation Buttons */}
<Button
  variant="outline"
  size="icon"
  className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-transparent text-white shadow-none"
  onClick={prevTestimonial}
>
  <ChevronLeft className="w-5 h-5" />
</Button>

<Button
  variant="outline"
  size="icon"
  className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-transparent text-white shadow-none"
  onClick={nextTestimonial}
>
  <ChevronRight className="w-5 h-5" />
</Button>

          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};