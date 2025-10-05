import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingModal } from "@/components/BookingModal";
import { ImageGallery } from "@/components/ImageGallery";
import { RelatedPackages } from "@/components/RelatedPackages";
import { mockPackages } from "@/data/mockData";
import { Star, MapPin,  Users, Heart, Share2 } from "lucide-react";
import bgImage from '@/assets/imgi_191_abstract-blur-empty-green-gradient-studio-well-use-as-background-website-template-frame-business-report_1258-54629.jpg';
const PackageDetail = () => {
  const { id } = useParams();
  const [package_, setPackage] = useState<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const foundPackage = mockPackages.find(pkg => pkg.id === id);
    if (foundPackage) {
      setPackage(foundPackage);
    }
  }, [id]);

  if (!package_) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background"
    style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
       {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
      
      <Navbar />
      
      <div className="pt-20 text-white ">
        {/* Image Gallery */}
        <ImageGallery images={package_.images} title={package_.title} />

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      (4.9) 234 reviews
                    </span>
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold font-poppins mb-4 pt-12">{package_.title}</h1>
                
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2 text-gray-200">
                    <MapPin className="w-5 h-5" />
                    <span>{package_.destination}</span>
                  </div>
                  <div className="flex items-center gap-2">
                  
                   
                  </div>
                  {/*<div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Max 12 people</span>
                  </div>*/}
                </div>

               { /*<div className="flex gap-4 mb-8">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>*/}
              </div>

              {/* Tabs Content */}
             <Tabs defaultValue="overview" className="w-full">
                 {/*<TabsList className="grid w-full grid-cols-4">
                  {/* <TabsTrigger value="overview">Overview</TabsTrigger>*/}
                 {/* <TabsTrigger value="itinerary">Itinerary</TabsTrigger>*/}
                 {/* <TabsTrigger value="inclusions">Inclusions</TabsTrigger>*/}
                  {/*<TabsTrigger value="reviews">Reviews</TabsTrigger>*/}
               {/* </TabsList>*/}
                
                {/*<TabsContent value="overview" className="mt-8">
                  <div className="prose max-w-none">
                    <p className="text-lg text-muted-foreground mb-6">
                      {package_.description}
                    </p>
                    <h3 className="text-xl font-semibold mb-4">What makes this trip special</h3>
                    <ul className="space-y-2">
                      {package_.highlights.map((highlight: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>*/}
                
                <TabsContent value="itinerary" className="mt-8">
                   {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

                  <div className="space-y-6">
                    {Array.from({ length: package_.duration }).map((_, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                        <div className="bg-card p-6 rounded-lg card-shadow">
                          <h4 className="font-semibold text-lg mb-2">Day {index + 1}</h4>
                          <p className="text-muted-foreground">
                            Exciting activities and experiences planned for this day. Detailed itinerary including meals, activities, and accommodations.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="inclusions" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-green-600">✓ Included</h4>
                      <ul className="space-y-2">
                        <li>• Accommodation in premium hotels</li>
                        <li>• All meals as per itinerary</li>
                        <li>• Professional tour guide</li>
                        <li>• Transportation throughout</li>
                        <li>• Entry fees to attractions</li>
                        <li>• Travel insurance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-red-600">✗ Not Included</h4>
                      <ul className="space-y-2">
                        <li>• International flights</li>
                        <li>• Personal expenses</li>
                        <li>• Tips and gratuities</li>
                        <li>• Optional activities</li>
                        <li>• Visa fees</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-8">
                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="bg-card p-6 rounded-lg card-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="font-semibold">JD</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">John Doe</h5>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          "Amazing experience! The tour was well organized and our guide was fantastic. Would definitely recommend to anyone looking for an authentic travel experience."
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
                  {/* Booking Sidebar */}
             {/*
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card p-6 rounded-2xl card-shadow">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${package_.price}
                    </div>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                  
                  <Button 
                    className="w-full mb-4 btn-hero"
                    onClick={() => setShowBookingModal(true)}
                  >
                    Book Now
                  </Button>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span>Base price</span>
                      <span>${package_.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$50</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${package_.price + 50}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages *//*}
        <RelatedPackages currentPackageId={package_.id} />
      </div>

      <Footer />
      
      {showBookingModal && (
        <BookingModal 
          package_={package_}
          onClose={() => setShowBookingModal(false)}
        />
      )}*/}


      
            </div>
            </div>
</div>
</div>
  </div>
  );
};

export default PackageDetail;