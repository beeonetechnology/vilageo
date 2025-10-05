import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { FilterBar } from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { mockPackages } from "@/data/mockData";
import whatsappIcon from "@/assets/whatsapp.icon.png";
import bgImage from '@/assets/imgi_108_dark-green-solid-background-suitable-for-business-presentations-websites-social-media-graphics-digital-marketing-and-product-displays-video.jpg';
const Packages = () => {
  const [filteredPackages, setFilteredPackages] = useState(mockPackages);
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 6;

  const startIndex = (currentPage - 1) * packagesPerPage;
  const endIndex = startIndex + packagesPerPage;
  const currentPackages = filteredPackages.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);

  const handleFilter = (filters: any) => {
    let filtered = mockPackages;
    
    if (filters.destination && filters.destination !== 'all') {
      filtered = filtered.filter(pkg => 
        pkg.destination.toLowerCase().includes(filters.destination.toLowerCase())
      );
    }
    
    if (filters.priceRange) {
      filtered = filtered.filter(pkg => 
        pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1]
      );
    }
    
   {/*} if (filters.duration && filters.duration !== 'all') {
      const durationNum = parseInt(filters.duration);
      filtered = filtered.filter(pkg => pkg.duration <= durationNum);
   }*/}

    setFilteredPackages(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background "
    
    style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient text-white"
     >
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Explore Our Travel Packages
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover handpicked destinations and experiences crafted for unforgettable journeys
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16"      
      style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
        <FilterBar onFilter={handleFilter} />
        
        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {currentPackages.map((pkg, index) => (
            <div key={pkg.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PackageCard package={pkg} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-12 h-12"
              >
                {page}
              </Button>
            ))}
          </div>
        )}
      </div>

      <Footer/>
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

export default Packages;