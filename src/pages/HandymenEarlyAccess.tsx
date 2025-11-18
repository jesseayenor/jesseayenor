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
import { TrendingUp, Award, DollarSign } from "lucide-react";

const HandymenEarlyAccess = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    trade: "",
    experience: "",
    hasTools: false,
    hasSmartphone: false,
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
      description: "You're on the waitlist! We'll contact you soon with next steps.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      trade: "",
      experience: "",
      hasTools: false,
      hasSmartphone: false,
      additionalInfo: "",
      agreeToTerms: false
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-slide-up">
                Join as a <span className="text-secondary">Handyman</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Start earning more with AceLink. Be among the first handymen on our platform.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
                <TrendingUp className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">40% More Income</h3>
                <p className="text-sm text-muted-foreground">Early handymen earn more with less competition</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
                <Award className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Verified Badge</h3>
                <p className="text-sm text-muted-foreground">Stand out with our trusted handyman badge</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
                <DollarSign className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Instant Payments</h3>
                <p className="text-sm text-muted-foreground">Get paid immediately after every job</p>
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="trade">Your Trade/Specialty *</Label>
                    <Select
                      value={formData.trade}
                      onValueChange={(value) => setFormData({...formData, trade: value})}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select your trade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumber">Plumber</SelectItem>
                        <SelectItem value="electrician">Electrician</SelectItem>
                        <SelectItem value="carpenter">Carpenter</SelectItem>
                        <SelectItem value="painter">Painter</SelectItem>
                        <SelectItem value="ac-technician">AC Technician</SelectItem>
                        <SelectItem value="appliance-repair">Appliance Repair</SelectItem>
                        <SelectItem value="mason">Mason</SelectItem>
                        <SelectItem value="general">General Handyman</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({...formData, experience: value})}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="hasTools"
                      checked={formData.hasTools}
                      onCheckedChange={(checked) => 
                        setFormData({...formData, hasTools: checked as boolean})
                      }
                    />
                    <Label htmlFor="hasTools" className="text-sm cursor-pointer">
                      I have my own tools and equipment for my trade
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="hasSmartphone"
                      checked={formData.hasSmartphone}
                      onCheckedChange={(checked) => 
                        setFormData({...formData, hasSmartphone: checked as boolean})
                      }
                    />
                    <Label htmlFor="hasSmartphone" className="text-sm cursor-pointer">
                      I have a smartphone with internet access
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Tell us about your experience (Optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                    placeholder="Share your skills, certifications, or any special training..."
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-secondary">Requirements Checklist:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Valid Ghana Card or National ID</li>
                    <li>✓ At least 2 years of experience</li>
                    <li>✓ Own tools and equipment</li>
                    <li>✓ Smartphone with internet</li>
                    <li>✓ Professional work attitude</li>
                  </ul>
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
                    I confirm that all information provided is accurate and I agree to AceLink's{" "}
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
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
            </div>

            {/* Footer Note */}
            <p className="text-center text-muted-foreground mt-8">
              Looking for a handyman instead?{" "}
              <a href="/early-access" className="text-secondary font-semibold hover:underline">
                Join as a customer
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HandymenEarlyAccess;
