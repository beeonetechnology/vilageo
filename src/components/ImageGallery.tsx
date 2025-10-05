import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setShowLightbox(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 h-96 lg:h-[500px]">
        {/* Main Image */}
        <div className="col-span-4 lg:col-span-2 relative group cursor-pointer">
          <img
            src={images[selectedImage]}
            alt={`${title} - Main view`}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => openLightbox(selectedImage)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white text-gray-800"
              onClick={() => openLightbox(selectedImage)}
            >
              <Expand className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="col-span-4 lg:col-span-2 grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer aspect-square"
              onClick={() => setSelectedImage(index + 1)}
            >
              <img
                src={image}
                alt={`${title} - View ${index + 2}`}
                className={`w-full h-full object-cover rounded-lg transition-all ${
                  selectedImage === index + 1 
                    ? 'ring-2 ring-primary' 
                    : 'hover:opacity-80'
                }`}
              />
              
              {/* Show all photos overlay on last thumbnail */}
              {index === 3 && images.length > 5 && (
                <div 
                  className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center text-white font-medium cursor-pointer hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(0);
                  }}
                >
                  <div className="text-center">
                    <Expand className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-sm">View All</span>
                    <br />
                    <span className="text-xs">({images.length} photos)</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <Dialog open={showLightbox} onOpenChange={setShowLightbox}>
          <DialogContent className="max-w-screen-lg w-full h-full lg:h-auto p-0 bg-black">
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setShowLightbox(false)}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <img
                src={images[lightboxIndex]}
                alt={`${title} - Photo ${lightboxIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {lightboxIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};