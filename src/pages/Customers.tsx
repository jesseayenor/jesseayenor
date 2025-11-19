import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  MapPin, 
  MessageSquare, 
  CreditCard,
  Clock,
  Shield,
  Star,
  Zap,
  CheckCircle2
} from "lucide-react";

const Customers = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30"></div>
          
          <div className="container mx-auto px-6 py-20 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
                Got a Problem? <br />
                <span className="text-secondary">Get a Handyman in Minutes</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10">
                AceLink brings you trusted handymen, fast. Forget the hassle—just a tap and the help you need arrives at your doorstep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/early-access">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-lg px-10 py-6 hover-lift hover-glow animate-pulse-scale"
                  >
                    Get My Handyman Now
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-10 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Customer Flow */}
        <section className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-white">
              Fast. Simple. Instant Help — With a Tap.
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              Getting help has never been this easy
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                {
                  icon: Smartphone,
                  title: "Request",
                  desc: "Tap to request help instantly via app or USSD. Choose from plumbing, electrical, carpentry, and more.",
                  highlight: "30 seconds"
                },
                {
                  icon: MapPin,
                  title: "Match",
                  desc: "AceLink's algorithm instantly matches you with the nearest available handyman.",
                  highlight: "Under 10 min"
                },
                {
                  icon: CheckCircle2,
                  title: "Complete",
                  desc: "Track your handyman's arrival, chat directly, and pay securely via Mobile Money.",
                  highlight: "100% Secure"
                },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-all group-hover:scale-110 border-4 border-secondary">
                      <step.icon className="h-12 w-12 text-secondary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {step.highlight}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose AceLink */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
              Why AceLink? Because You Deserve Better.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Verified & Trusted",
                  desc: "Every handyman is ID-verified, skill-tested, and customer-reviewed. No more risky referrals.",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "Get matched with a handyman in under 10 minutes. No more endless calls or waiting.",
                },
                {
                  icon: CreditCard,
                  title: "Secure Payment",
                  desc: "Pay cashlessly via Mobile Money or in-app wallet. Transparent pricing, no surprises.",
                },
                {
                  icon: MessageSquare,
                  title: "Real-Time Updates",
                  desc: "Track your handyman's location, chat directly, and stay updated throughout the job.",
                },
                {
                  icon: Star,
                  title: "Quality Guaranteed",
                  desc: "Rate and review every job. Poor performers are removed to maintain quality standards.",
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  desc: "Get help anytime, anywhere. Our team is always ready to assist with any issues.",
                },
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-6 bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <benefit.icon className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-white">
              Whatever You Need, We've Got You Covered
            </h2>
            <p className="text-center text-xl text-white mb-16 max-w-2xl mx-auto">
              From small repairs to major installations
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "Plumbing",
                "Electrical Work",
                "Carpentry",
                "Painting",
                "AC Repair",
                "Appliance Fixing",
                "Cleaning Services",
                "Lock & Key",
                "Tile & Flooring",
                "Roofing",
                "Masonry",
                "General Repairs"
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center hover:border-secondary hover:scale-105 transition-all cursor-pointer"
                >
                  <p className="font-semibold text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
              What Our Customers Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Ama Osei",
                  location: "Accra",
                  quote: "AceLink got me a handyman in under 10 minutes! My leaking pipe was fixed before lunch. Incredible service!",
                  rating: 5
                },
                {
                  name: "Joseph Mensah",
                  location: "Madina",
                  quote: "Even my mum uses the USSD option — simple and powerful! No need for a smartphone.",
                  rating: 5
                },
                {
                  name: "Esi Boateng",
                  location: "Tema",
                  quote: "The verification process gave me peace of mind. I knew I was getting a professional. Highly recommend!",
                  rating: 5
                },
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-secondary">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Preview */}
        <section className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Download the App & Get Started
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Available on Android and coming soon to iOS. Or use our USSD code *920*44# for quick access without the app.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Easy registration in under 2 minutes",
                    "Browse handymen profiles and reviews",
                    "Real-time job tracking",
                    "Secure in-app payments",
                    "24/7 customer support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/early-access">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="hover-lift hover-glow px-10 py-6 text-lg"
                  >
                    Join Early Access
                  </Button>
                </Link>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-72 h-[600px] bg-card/50 backdrop-blur-sm rounded-[3rem] border-8 border-border shadow-2xl p-4">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary/50 rounded-[2rem] flex flex-col items-center justify-center p-8">
                      <MapPin className="h-20 w-20 text-secondary animate-pulse mb-8" />
                      <p className="text-2xl font-bold text-center mb-4">
                        Finding your perfect handyman...
                      </p>
                      <div className="w-full h-2 bg-background/30 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-secondary animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-secondary via-secondary/80 to-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to Get Reliable Help?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AceLink for all their home service needs
            </p>
            <Link to="/early-access">
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 px-12 py-6 text-lg font-semibold shadow-xl hover-lift"
              >
                Get Early Access Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Customers;
