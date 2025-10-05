import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo-vilageo.png";
import bgImage from '@/assets/imgi_191_abstract-blur-empty-green-gradient-studio-well-use-as-background-website-template-frame-business-report_1258-54629.jpg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // scroll-based logo visibility
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowLogo(false);
      else setShowLogo(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Logo on left */}
      <div className={`fixed top-5 left-5 z-50 transition-all duration-300 ${showLogo ? "opacity-100" : "opacity-0 -translate-y-10"}`}>
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-28 h-14 object-contain" />
        </Link>
      </div>

      {/* Floating menu button on right */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="fixed top-5 right-5 z-50 p-3 bg-green-900 text-white rounded-full shadow-lg hover:bg-green-600"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>

        {/* Side menu */}
        <SheetContent
          side="right"
          className="bg-white/95 backdrop-blur-xl border-l border-white/20 p-6 pt-32 text-white text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Logo at the top of side menu */}
            <div className="mb-10 flex justify-center mt-12">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-auto object-contain"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 items-center mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-primary hover:translate-x-2 ${
                    isActive(item.path) ? "text-primary" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
