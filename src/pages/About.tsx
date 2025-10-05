import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Users, Globe, Heart, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import whatsappIcon from "@/assets/whatsapp.icon.png";
import bgImage from '@/assets/imgi_108_dark-green-solid-background-suitable-for-business-presentations-websites-social-media-graphics-digital-marketing-and-product-displays-video.jpg';
const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Travel enthusiast with 15+ years of experience in luxury travel planning.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      bio: "Expert in logistics and ensuring seamless travel experiences worldwide.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Travel Designer",
      bio: "Crafting unique itineraries that create unforgettable memories.",
      image: "/api/placeholder/300/300"
    }
  ];

  const milestones = [
     { year: "2018", event: "Vilageo founded, starting the journey in premium travel" },
  { year: "2019", event: "Reached 1,000 happy customers milestone" },
  { year: "2020", event: "Expanded to 50+ destinations worldwide" },
  { year: "2021", event: "Launched sustainable travel initiatives" },
  { year: "2023", event: "Celebrated 1000+ successful trips" },
  { year: "2024", event: "Enhanced sustainable travel programs" },
  { year: "2025", event: "Over 10,000+ happy customers achieved" },
  ];

   const faqs = [
  {
    question: "How do I book a travel package with Vilageo?",
    answer: "Browse Vilageo's curated packages, select your preferred dates, and click 'Book Now'. Our team will guide you through the booking process every step of the way."
  },
  {
    question: "What's included in the Vilageo package price?",
    answer: "Each Vilageo package typically includes accommodation, specified meals, transportation, guided tours, and entry fees to attractions. International flights are usually separate."
  },
  {
    question: "Can I customize my Vilageo travel package?",
    answer: "Absolutely! Vilageo specializes in creating personalized travel experiences tailored to your preferences. Contact our team to discuss your specific requirements."
  },
  {
    question: "What if I need to cancel or reschedule a Vilageo trip?",
    answer: "Vilageo offers flexible cancellation and rescheduling policies. Specific terms vary by package, but our team will always work with you to find the best solution."
  },
  {
    question: "Does Vilageo provide travel insurance?",
    answer: "Yes, comprehensive travel insurance is included with all Vilageo packages. Additional coverage options are available for extra peace of mind."
  }
];



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
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Crafting extraordinary travel experiences for adventurous souls since 2015. 
              We believe every journey should be more than just a trip—it should be a transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Inspiring Vilageo, Creating Memories
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At vilageo, we're passionate about creating travel experiences that go beyond the ordinary. 
                Our mission is to connect travelers with authentic cultural experiences, breathtaking destinations, 
                and unforgettable moments that last a lifetime.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in sustainable travel, supporting local communities, and preserving the natural 
                beauty of the places we visit. Every package is carefully curated to ensure you experience 
                the world's wonders responsibly and authentically.
              </p>
              <Link to="/packages">
  <Button className="btn-hero">Explore Our Packages</Button>
</Link>
            </div>
            <div className="animate-scale-in">
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-shadow bg-white/10 backdrop-blur-md text-white shadow-none">
  <CardHeader className="text-center">
    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
    <CardTitle>50+</CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-white/80">Destinations Worldwide</p>
  </CardContent>
</Card>

                <Card className="card-shadow bg-white/10 backdrop-blur-md text-white shadow-none">
  <CardHeader className="text-center">
    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
    <CardTitle>10K+</CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-white/80">Happy Travelers</p>
  </CardContent>
</Card>

              <Card className="card-shadow bg-white/10 backdrop-blur-md text-white shadow-none">
  <CardHeader className="text-center">
    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
    <CardTitle>15+</CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-white/80">Awards Won</p>
  </CardContent>
</Card>

<Card className="card-shadow bg-white/10 backdrop-blur-md text-white shadow-none">
  <CardHeader className="text-center">
    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
    <CardTitle>98%</CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-white/80">Satisfaction Rate</p>
  </CardContent>
</Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30"
       style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a leading travel company, here's how we've grown
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
           {milestones.map((milestone, index) => (
  <div
    key={index}
    className="flex items-center mb-8 animate-fade-up"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="flex-shrink-0 w-32">
      <Badge variant="outline" className="text-primary border-primary">
        {milestone.year}
      </Badge>
    </div>
    <div className="flex-1 ml-6 p-6 bg-transparent rounded-lg card-shadow border border-green-400">
      <p className="text-lg text-white">{milestone.event}</p>
    </div>
  </div>
))}

          </div>
        </div>
      </section>

      {/* Team Section */}
      {/*
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate travel experts dedicated to creating your perfect journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-shadow animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
 */}
      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30 "
       style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">Why Choose Vilageo?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
         <Card className="card-shadow bg-transparent text-white shadow-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-[-5px]">

  <CardHeader className="text-center">
    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
    <CardTitle>Best Price Guarantee</CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-white/80">
      We ensure you get the best value for your money with our price match guarantee.
    </p>
  </CardContent>
</Card>

<Card className="card-shadow bg-transparent text-white shadow-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-[-5px]">

  <CardHeader className="text-center">
    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
    <CardTitle>Verified Hotels</CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-white/80">
      Stay in carefully selected, premium accommodations that meet our high standards.
    </p>
  </CardContent>
</Card>

<Card className="card-shadow bg-transparent text-white shadow-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-[-5px]">

  <CardHeader className="text-center">
    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
    <CardTitle>24/7 Support</CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-white/80">
      Our dedicated support team is available around the clock to assist you.
    </p>
  </CardContent>
</Card>


          </div>
        </div>
      </section>

     {/* FAQ Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-white">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-green-200 max-w-2xl mx-auto">
        Got questions? We've got answers to help you plan your perfect trip.
      </p>
    </div>
    
    <div className="max-w-5xl mx-auto"> {/* Increased max width */}
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-green-900/20 border border-green-700 rounded-xl mb-2 px-6 py-1" // Added padding
          >
            <AccordionTrigger className="text-left text-green-100 font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-green-200 mt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>

      

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

export default About;