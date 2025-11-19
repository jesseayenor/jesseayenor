import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Zap, Users, Shield } from "lucide-react";

const EarlyAccess = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    serviceNeeded: "",
    additionalInfo: "",
    agreeToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Success! 🎉",
      description: "You're on the waitlist! We'll notify you when we launch.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      serviceNeeded: "",
      additionalInfo: "",
      agreeToTerms: false
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-slide-up">
                Get <span className="text-secondary">Early Access</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Be among the first to experience reliable handyman services at your fingertips
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
                <Zap className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Priority Access</h3>
                <p className="text-sm text-muted-foreground">Be first to use the platform when we launch</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
                <Users className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Exclusive Perks</h3>
                <p className="text-sm text-muted-foreground">Special discounts for early adopters</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
                <Shield className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Premium Support</h3>
                <p className="text-sm text-muted-foreground">Dedicated support for early users</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+233 XX XXX XXXX"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g., Accra, Kumasi"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceNeeded">What service do you need most? *</Label>
                  <Select
                    value={formData.serviceNeeded}
                    onValueChange={(value) => setFormData({...formData, serviceNeeded: value})}
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical Work</SelectItem>
                      <SelectItem value="carpentry">Carpentry</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="ac-repair">AC Repair</SelectItem>
                      <SelectItem value="appliance">Appliance Fixing</SelectItem>
                      <SelectItem value="cleaning">Cleaning Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                    placeholder="Tell us more about your needs or expectations..."
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, agreeToTerms: checked as boolean})
                    }
                  />
                  <Label 
                    htmlFor="terms" 
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I agree to receive updates about AceLink's launch and accept the{" "}
                    <a href="/terms" className="text-secondary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-secondary hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="w-full text-lg py-6 hover-lift hover-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining Waitlist..." : "Join the Waitlist"}
                </Button>
              </form>
            </div>

            {/* Footer Note */}
            <p className="text-center text-muted-foreground mt-8">
              Already a handyman?{" "}
              <a href="/handymen/early-access" className="text-secondary font-semibold hover:underline">
                Sign up here instead
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EarlyAccess;
