import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Smartphone, 
  Wrench, 
  Shield, 
  Zap, 
  CreditCard,
  Search,
  MessageSquare,
  Star,
  CheckCircle2
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import handyman1 from "@/assets/handyman-1.jpg";
import handyman2 from "@/assets/handyman-2.jpg";
import handyman3 from "@/assets/handyman-3.jpg";

const AnimatedSequence = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { icon: Home, label: "Customer Requests", color: "text-gray-400" },
    { icon: Smartphone, label: "AceLink Connects", color: "text-blue-400" },
    { icon: Wrench, label: "Handyman Arrives", color: "text-secondary animate-glow" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative flex items-center justify-between w-full max-w-2xl">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-2 transition-all duration-500
                  ${isActive 
                    ? 'border-secondary bg-secondary/10 scale-110 shadow-lg shadow-secondary/50' 
                    : 'border-border bg-background/5'
                  }`}
              >
                <Icon className={`h-10 w-10 md:h-12 md:w-12 ${isActive ? step.color : 'text-muted-foreground'} transition-all duration-500`} />
              </div>
              <span className="mt-4 text-sm font-medium text-center text-white">
                {step.label}
              </span>
              
              {index < steps.length - 1 && (
                <div className="absolute left-[20%] md:left-[25%] w-[15%] md:w-[20%] h-[3px] top-12 md:top-16 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20 overflow-hidden"
                  style={{ left: `${(index * 33.33) + 16.67}%` }}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent animate-[flow_2s_linear_infinite]" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20"></div>
          
          <div className="container mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center z-10">
            <div className="text-center md:text-left animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Find Trusted Handymen — Instantly.
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10">
                AceLink connects you with verified handymen for home, office, and industrial jobs — anytime, anywhere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/early-access">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift animate-pulse-scale"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link to="/handymen/early-access">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-10 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Join as a Handyman
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Animated Sequence */}
            <div className="hidden md:flex justify-center items-center">
              <AnimatedSequence />
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-background/5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl font-bold mb-12 text-white">Built for Trust and Speed</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-xl border border-border hover-lift">
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-primary">Verified Handymen</h3>
                <p className="text-primary/70">
                  Every handyman passes ID verification, skill tests, and customer reviews.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-xl border border-border hover-lift">
                <Zap className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-primary">Instant Job Match</h3>
                <p className="text-primary/70">
                  Get the nearest available handyman in under 10 minutes.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-xl border border-border hover-lift">
                <CreditCard className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-primary">Cashless Payments</h3>
                <p className="text-primary/70">
                  Pay securely via Mobile Money or in-app wallet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Your home deserves reliable help, not random luck.
              </h2>
              <p className="text-lg text-white mb-6">
                Every day, people struggle to find skilled handymen they can trust — while thousands of hardworking professionals remain unseen and underpaid.
              </p>
              <p className="text-lg text-white">
                AceLink bridges that gap. We connect skills to opportunity and trust to every transaction.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 rounded-xl overflow-hidden hover-lift">
                <img src={handyman1} alt="Professional Handyman" className="w-full h-full object-cover" />
              </div>
              <div className="h-64 rounded-xl overflow-hidden hover-lift mt-8">
                <img src={handyman2} alt="Electrician at Work" className="w-full h-full object-cover" />
              </div>
              <div className="h-64 rounded-xl overflow-hidden hover-lift -mt-8 col-span-2">
                <img src={handyman3} alt="Plumber Professional" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
              How AceLink Works
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-12">
              {[
                { icon: Smartphone, title: "Request a Service", desc: "Choose what you need fixed via our user-friendly app or simple USSD code.", color: "text-white" },
                { icon: Search, title: "Get Matched Instantly", desc: "Our system finds and alerts the nearest available, qualified handyman.", color: "text-white" },
                { icon: MessageSquare, title: "Track & Chat", desc: "See your handyman's ETA in real-time and communicate directly.", color: "text-white" },
                { icon: Star, title: "Pay & Review", desc: "Complete the job with secure payment and rate your handyman.", color: "text-white" },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-6 items-start hover-lift">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center border-2 border-secondary">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-secondary">{step.title}</h3>
                      <p className="text-white">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
              We're Building Ghana's Smartest Work Network.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-background rounded-xl border border-border">
                <div className="text-6xl font-extrabold text-secondary mb-2 counter" data-target="200">0</div>
                <div className="text-xl text-primary/70">Early Adopters</div>
              </div>
              <div className="text-center p-8 bg-background rounded-xl border border-border">
                <div className="text-6xl font-extrabold text-secondary mb-2"><span className="counter" data-target="40">0</span>%</div>
                <div className="text-xl text-primary/70">Higher Income for Handymen</div>
              </div>
              <div className="text-center p-8 bg-background rounded-xl border border-border">
                <div className="text-6xl font-extrabold text-secondary mb-2 counter" data-target="2">0</div>
                <div className="text-xl text-primary/70">Access Modes (App + USSD)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
              Real Stories. Real Impact.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "AceLink got me a handyman in under 10 minutes — I couldn't believe it!", author: "Ama, Accra" },
                { quote: "Finally, a platform that respects our work and pays on time.", author: "Kwame, Electrician" },
                { quote: "Even my mum uses the USSD option — simple and powerful!", author: "Joseph, Madina" },
              ].map((testimonial, index) => (
                <div key={index} className="bg-background p-8 rounded-xl border border-border hover-lift">
                  <p className="text-lg text-primary/70 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-secondary">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-bold mb-12 text-muted-foreground">
              Proudly Building Ghana's Future of Work
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {["MTN", "Vodafone", "AirtelTigo", "GhanaCard", "GRA"].map((brand, index) => (
                <div 
                  key={index}
                  className="px-8 py-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:opacity-100 transition-opacity"
                >
                  <span className="text-2xl font-bold text-muted-foreground">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Future of Work — Today.
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Whether you're fixing or hiring, AceLink connects you to trust and opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/early-access">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90 px-10 py-6 text-lg">
                  Get Early Access
                </Button>
              </Link>
              <Link to="/handymen/early-access">
                <Button size="lg" variant="outline" className="border-2 border-background text-foreground hover:bg-background hover:text-primary px-10 py-6 text-lg">
                  Become a Handyman
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
