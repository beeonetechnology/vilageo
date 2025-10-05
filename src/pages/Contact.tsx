import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.icon.png";
import bgImage from '@/assets/imgi_108_dark-green-solid-background-suitable-for-business-presentations-websites-social-media-graphics-digital-marketing-and-product-displays-video.jpg';
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background" 
       style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4 ">
          <div className="text-center animate-fade-up ">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 ">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to plan your next adventure? We're here to help make your travel dreams come true.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <Card className="card-shadow animate-fade-up bg-transparent">
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-white">
      <MapPin className="w-6 h-6 text-primary" />
      Visit Our Office
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground ">
      Near Guest House<br />
      Mame pallil<br />
      Agatti Island,Lakshadweep
    </p>
  </CardContent>
</Card>

<Card className="card-shadow animate-fade-up bg-transparent" style={{ animationDelay: '0.1s' }}>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-white">
      <Phone className="w-6 h-6 text-primary" />
      Call Us
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Main: +91 9745690702  , +91 9072212223<br /><br />
    </p>
  </CardContent>
</Card>

<Card className="card-shadow animate-fade-up bg-transparent" style={{ animationDelay: '0.2s' }}>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-white">
      <Mail className="w-6 h-6 text-primary" />
      Email Us
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Bookings: vilageoholidays@gmail.com<br />
    </p>
  </CardContent>
</Card>

<Card className="card-shadow animate-fade-up bg-transparent" style={{ animationDelay: '0.3s' }}>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-white">
      <Clock className="w-6 h-6 text-primary" />
      Office Hours
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Mon - Fri: 9:00 AM - 6:00 PM<br />
      Saturday: 10:00 AM - 4:00 PM<br />
      Sunday: Closed<br />
      <span className="text-primary font-semibold">
        Emergency support available 24/7
      </span>
    </p>
  </CardContent>
</Card>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
         <Card className="card-shadow animate-scale-in bg-transparent">
  <CardHeader>
    <CardTitle className="text-2xl font-poppins text-white">Send us a Message</CardTitle>
    <p className="text-muted-foreground">
      Fill out the form below and we'll get back to you as soon as possible.
    </p>
  </CardHeader>
  <CardContent>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
            Full Name *
          </label>
         <Input
  id="name"
  name="name"
  type="text"
  value={formData.name}
  onChange={handleInputChange}
  placeholder="Your full name"
  required
  className="bg-transparent transition-all duration-300 focus:ring-2 focus:ring-primary/20 text-white"
/>

        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
            Email Address *
          </label>
         <Input
  id="email"
  name="email"
  type="email"
  value={formData.email}
  onChange={handleInputChange}
  placeholder="your.email@example.com"
  required
  className="bg-transparent transition-all duration-300 focus:ring-2 focus:ring-primary/20 text-white"
/>

        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
          Subject *
        </label>
        <Input
  id="subject"
  name="subject"
  type="text"
  value={formData.subject}
  onChange={handleInputChange}
  placeholder="What's this about?"
  required
  className="bg-transparent transition-all duration-300 focus:ring-2 focus:ring-primary/20 text-white"
/>

      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
          Message *
        </label>
<Textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleInputChange}
  placeholder="Tell us about your travel plans, questions, or how we can help..."
  rows={6}
  required
  className="bg-transparent transition-all duration-300 focus:ring-2 focus:ring-primary/20 text-white"
/>

      </div>
      <Button
        type="button"
        className="w-full btn-hero"
        onClick={() => {
          const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
          const phone = "9745690702";
          window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
        }}
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
    </form>
  </CardContent>
</Card>


            {/* Map Section */}
          <Card className="card-shadow mt-8 animate-fade-up bg-transparent text-white">
  <CardHeader>
    <CardTitle>Find Us</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.607911758856!2d69.8381986!3d11.5289415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c1a3d1d5a7a3f%3A0x123456789abcdef!2sNear%20Guest%20House%2C%20Mame%20Pallil%2C%20Agatti%20Island%2C%20Lakshadweep!5e0!3m2!1sen!2sin!4v1695551234567!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </CardContent>
</Card>

          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground card-shadow animate-fade-up">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-4">24/7 Emergency Support</h3>
              <p className="mb-4">
                Traveling and need immediate assistance? Our emergency support team is available around the clock.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Call : 9745690702
              </Button>
            </CardContent>
          </Card>
        </div>
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

export default Contact;