import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  MapPin, 
  Clock, 
  CreditCard, 
  Star,
  ArrowRight
} from "lucide-react";
import { useEffect, useRef } from "react";

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepsRef.current) {
      const steps = stepsRef.current.querySelectorAll(".step-card");
      steps.forEach((step) => observer.observe(step));
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      title: "Select a Service",
      description: "Choose the service you need – from plumbing and electrical to repairs and more.",
      icon: Smartphone,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      tooltip: "Choose your service from the app or USSD",
      services: ["Plumbing", "Electrical", "Cleaning", "Carpentry", "Painting", "Repairs"]
    },
    {
      number: 2,
      title: "AceLink Auto-Matches Nearest Verified Handyman",
      description: "AceLink's AI auto-matches you with the nearest available, verified handyman in seconds.",
      icon: MapPin,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      tooltip: "We find the closest verified professional"
    },
    {
      number: 3,
      title: "Job Starts → Tracked → Completed",
      description: "Once matched, the handyman is on their way! Track job progress in real time.",
      icon: Clock,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      tooltip: "Real-time tracking from start to finish"
    },
    {
      number: 4,
      title: "Pay Securely",
      description: "Pay securely via Mobile Money or AceLink Wallet after the job is complete.",
      icon: CreditCard,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      tooltip: "Multiple secure payment options",
      paymentOptions: ["Mobile Money", "AceLink Wallet", "Bank Transfer"]
    },
    {
      number: 5,
      title: "Rate & Review",
      description: "Rate your handyman and leave a review to help others find trusted professionals.",
      icon: Star,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      tooltip: "Your feedback builds our community"
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20 animate-gradient"></div>
          
          {/* Floating tool icons background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-10 animate-float">
              <div className="text-6xl">🔧</div>
            </div>
            <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-6xl">🔨</div>
            </div>
            <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-6xl">⚡</div>
            </div>
            <div className="absolute bottom-40 right-1/3 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-6xl">🪛</div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-20 z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
              How AceLink Works: <br />
              <span className="text-secondary">Connecting You to Trusted Handymen Instantly</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
              Simple. Fast. Reliable. Your handyman is just a few taps away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/early-access">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-10 py-6 hover-lift animate-pulse-scale"
                >
                  Get Started
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => {
                  document.getElementById('steps-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </section>

        {/* Main Flow - Horizontal 5-Step Journey */}
        <section id="steps-section" className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Your Journey to Reliable Help
              </h2>
              <p className="text-xl text-white">
                Five simple steps to connect with verified handymen
              </p>
            </div>

            {/* Desktop Horizontal Layout */}
            <div ref={stepsRef} className="hidden lg:block">
              <div className="flex items-start justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20 -z-10">
                  <div className="h-full bg-gradient-to-r from-transparent via-secondary to-transparent animate-[flow_3s_linear_infinite]"></div>
                </div>

                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={index} 
                      className="step-card flex-1 group relative"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex flex-col items-center text-center px-4">
                        {/* Icon Container */}
                        <div 
                          className={`relative w-32 h-32 rounded-full ${step.bgColor} ${step.borderColor} border-4 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/50 animate-glow`}
                        >
                          <Icon className={`h-16 w-16 ${step.color}`} />
                          
                          {/* Tooltip on hover */}
                          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                            {step.tooltip}
                          </div>
                        </div>

                        {/* Step Number */}
                        <div className="text-6xl font-extrabold text-secondary/20 mb-2">
                          {step.number}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>

                        {/* Additional Interactive Elements */}
                        {step.services && (
                          <div className="mt-4 flex flex-wrap gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {step.services.map((service, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        )}

                        {step.paymentOptions && (
                          <div className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {step.paymentOptions.map((option, idx) => (
                              <div 
                                key={idx}
                                className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-lg border border-secondary/20 flex items-center gap-2"
                              >
                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                {option}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Arrow connecting to next step */}
                        {index < steps.length - 1 && (
                          <ArrowRight className="absolute -right-8 top-20 text-secondary/40 h-6 w-6 hidden xl:block" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet Vertical Layout */}
            <div className="lg:hidden space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    className="step-card bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 rounded-full ${step.bgColor} ${step.borderColor} border-4 flex items-center justify-center flex-shrink-0 animate-glow`}>
                        <Icon className={`h-10 w-10 ${step.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-4xl font-extrabold text-secondary/20 mb-2">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>

                        {step.services && (
                          <div className="flex flex-wrap gap-2">
                            {step.services.map((service, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        )}

                        {step.paymentOptions && (
                          <div className="space-y-2">
                            {step.paymentOptions.map((option, idx) => (
                              <div 
                                key={idx}
                                className="text-sm px-3 py-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/20 flex items-center gap-2"
                              >
                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <div className="w-1 h-12 bg-gradient-to-b from-secondary via-secondary/50 to-transparent"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Progress Visualization */}
        <section className="py-20 bg-background/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-white">
                Average Time to Get Help
              </h2>
              
              <div className="bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-border">
                <div className="text-8xl font-extrabold text-secondary mb-4 animate-pulse-scale">
                  &lt; 10
                </div>
                <div className="text-3xl font-bold text-muted-foreground mb-8">
                  Minutes
                </div>
                <p className="text-xl text-muted-foreground">
                  From request to handyman arrival, we're the fastest in Ghana
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the AceLink Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AceLink for all their home and office needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/early-access">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90 px-10 py-6 text-lg">
                  Get Early Access
                </Button>
              </Link>
              <Link to="/customers">
                <Button size="lg" variant="outline" className="border-2 border-background text-foreground hover:bg-background hover:text-primary px-10 py-6 text-lg">
                  Learn More
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

export default HowItWorks;
