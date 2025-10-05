import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Mail, Plane } from "lucide-react";
import bgImage from '@/assets/imgi_191_abstract-blur-empty-green-gradient-studio-well-use-as-background-website-template-frame-business-report_1258-54629.jpg';
import logo   from '@/assets/logo-vilageo.png'
export const Footer = () => {
  return (
       <footer className="relative border-t">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-4 py-16 text-white">
        <div className="grid md:grid-cols-4 gap-8">
 {/* Brand & Newsletter */}
<div className="md:col-span-2">
  <div className="flex items-center space-x-2 mb-6">
    <div className="w-30 h-10 bg-transparent rounded-full flex items-center justify-center">
      <img
        src={logo}              // Replace with your logo path
        alt="Logo"
        className="w-20 h-10 object-contain"
      />
    </div>
  </div>



            
            <p className="text-gray-300 mb-6 max-w-md">
              Creating extraordinary travel experiences for adventurous souls. 
              Discover curated destinations and premium packages crafted for unforgettable journeys.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex max-w-sm">
                <Input 
                  placeholder="Enter your email" 
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                Subscribe to our newsletter for exclusive deals and travel inspiration.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-primary transition-colors">
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Booking Terms
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  24/7 Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 border-gray-600" />

       {/* Bottom Section */}
<div className="flex flex-col items-center space-y-4">
  {/* Text */}
  <div className="text-sm text-center text-gray-400">
    © 2025 Vilageo Travel. All rights reserved. Designed by beeonedigital
  </div>

  {/* Social Links */}
  <div className="flex space-x-4">
    <a 
      href="https://www.facebook.com/share/14L6SRnU4YP/" 
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Facebook className="w-4 h-4" />
    </a>
    <a 
      href="#" 
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Twitter className="w-4 h-4" />
    </a>
    <a 
      href="https://www.instagram.com/vilageo_holidays_?igsh=MWJkMmJ5bmJhYzI5dw==" 
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Instagram className="w-4 h-4" />
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};
