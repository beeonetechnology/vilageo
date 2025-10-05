import { PackageCard } from "@/components/PackageCard";
import { mockPackages } from "@/data/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface RelatedPackagesProps {
  currentPackageId: string;
}

export const RelatedPackages = ({ currentPackageId }: RelatedPackagesProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Get related packages (excluding current package)
  const relatedPackages = mockPackages
    .filter(pkg => pkg.id !== currentPackageId)
    .slice(0, 6);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('related-packages-container');
    if (container) {
      const cardWidth = 400; // Approximate card width including gap
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - cardWidth)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + cardWidth);
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  if (relatedPackages.length === 0) return null;

  return (
    <section className="bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold font-poppins mb-2">You Might Also Like</h2>
            <p className="text-muted-foreground">
              Discover more amazing destinations and experiences
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={scrollPosition === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div 
          id="related-packages-container"
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {relatedPackages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className="flex-shrink-0 w-80 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PackageCard package={pkg} />
            </div>
          ))}
        </div>

        {/* Mobile scroll indicators */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(relatedPackages.length / 2) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};