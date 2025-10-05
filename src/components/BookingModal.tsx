import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Package } from "@/data/mockData";
import { Calendar, Users, Mail, Phone, User, CheckCircle } from "lucide-react";

interface BookingModalProps {
  package_: Package;
  onClose: () => void;
}

export const BookingModal = ({ package_, onClose }: BookingModalProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelers: 2,
    startDate: "",
    specialRequests: "",
    agreeTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Please accept terms and conditions",
        variant: "destructive"
      });
      return;
    }

    setStep(2);
    
    // Simulate booking process
    setTimeout(() => {
      toast({
        title: "Booking request submitted!",
        description: "We'll contact you within 24 hours to confirm your booking."
      });
      onClose();
    }, 2000);
  };

  const totalPrice = package_.price * formData.travelers + 50; // Service fee

  if (step === 2) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Booking Submitted!</h3>
            <p className="text-muted-foreground mb-6">
              Your booking request has been submitted successfully. Our travel experts will contact you within 24 hours to confirm your trip details.
            </p>
            <Button onClick={onClose} className="w-full btn-hero">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins">Book Your Trip</DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{package_.destination}</Badge>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{package_.duration} days</span>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* Booking Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    First Name *
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Users className="inline w-4 h-4 mr-1" />
                    Number of Travelers
                  </label>
                  <Input
                    name="travelers"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Preferred Start Date *
                  </label>
                  <Input
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requests</label>
                <Textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any dietary restrictions, accessibility needs, or special occasions..."
                  rows={3}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
                  }
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  . I understand this is a booking request and final confirmation will be provided by email.
                </label>
              </div>

              <Button type="submit" className="w-full btn-hero" size="lg">
                Submit Booking Request
              </Button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="md:col-span-1">
            <div className="bg-muted/30 p-6 rounded-lg sticky top-4">
              <h4 className="font-semibold mb-4">Booking Summary</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Package:</span>
                  <span className="font-medium">{package_.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Destination:</span>
                  <span>{package_.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{package_.duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Travelers:</span>
                  <span>{formData.travelers}</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span>Package price:</span>
                  <span>${package_.price} × {formData.travelers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee:</span>
                  <span>$50</span>
                </div>
                <hr className="border-primary/20" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-primary">${totalPrice}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h5 className="font-medium text-sm mb-2">What's included:</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• All accommodations</li>
                  <li>• Meals as specified</li>
                  <li>• Professional guide</li>
                  <li>• Transportation</li>
                  <li>• Travel insurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};