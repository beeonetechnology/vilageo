import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package } from "@/data/mockData";
import { MapPin, Clock, Star, Heart, ArrowRight, Sparkles } from "lucide-react";

interface PackageCardProps {
  package: Package;
}

export const PackageCard = ({ package: pkg }: PackageCardProps) => {
  return (
    <Card className="overflow-hidden glass-card group cursor-pointer border-0 hover-tilt bg-white/10 backdrop-blur-md text-white shadow-none"
    >
      <div className="relative overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Price Badge *//*}
        <div className="absolute top-6 right-6">
          <Badge className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-2xl animate-pulse-glow px-4 py-2 text-sm font-bold">
            ${pkg.price}
            {pkg.originalPrice && (
              <span className="ml-2 line-through text-primary-foreground/70 text-xs">
                ${pkg.originalPrice}
              </span>
            )}
          </Badge>
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white hover:text-red-400 transition-all duration-300 hover:scale-110 rounded-full"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Transparent Header */}
      <CardHeader className="pb-4 bg-transparent">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 transition-all duration-300 ${
                  i < Math.floor(pkg.rating) 
                    ? 'fill-yellow-400 text-yellow-400 scale-110' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
            <span className="text-sm text-white/80 ml-2 font-medium">
              ({pkg.reviews})
            </span>
          </div>
        </div>
        
        <h3 className="font-bold text-xl font-poppins line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-2">
          {pkg.title}
        </h3>
      </CardHeader>

      {/* Transparent Content */}
      <CardContent className="pt-0 bg-transparent">
        <div className="flex items-center gap-6 text-sm text-white/80 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">{pkg.destination}</span>
          </div>
        </div>

        <p className="text-white/80 text-sm mb-6 line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>

       <Link to={`/package/${pkg.id}`}>
  <Button
    variant="outline"
    size="sm"
    className="bg-transparent border border-white/50 text-white hover:bg-green-900 hover:text-white transition-all duration-300 hover:scale-105 rounded-xl font-semibold"
  >
    View Details
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>
</Link>

      </CardContent>
    </Card>
  );
};
