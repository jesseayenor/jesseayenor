import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Calendar, 
  Smartphone, 
  DollarSign,
  Shield,
  Star,
  CheckCircle2,
  Users,
  Award
} from "lucide-react";
import handyman1 from "@/assets/handyman-1.jpg";
import handyman2 from "@/assets/handyman-2.jpg";
import handyman3 from "@/assets/handyman-3.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Handymen = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 py-20 z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
                Join AceLink — Where Your Work Finds You
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10">
                We help handymen grow their earnings, reputation, and reliability. Get more jobs, faster payments, and digital credibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/handymen/early-access">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-lg px-10 py-6 hover-lift hover-glow animate-pulse-scale"
                  >
                    Join AceLink Now
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-10 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose AceLink */}
        <section className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-white">
              Why AceLink is the Best Choice for Handymen
            </h2>
            <p className="text-center text-xl text-white mb-16 max-w-2xl mx-auto">
              We're not just connecting you to customers — we're connecting you to the future.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: TrendingUp, 
                  title: "Earn More", 
                  desc: "40% higher income on average with more jobs daily",
                  highlight: "40% more"
                },
                { 
                  icon: Calendar, 
                  title: "Fast Job Matching", 
                  desc: "Get matched with customers in your area instantly",
                  highlight: "Under 10 min"
                },
                { 
                  icon: DollarSign, 
                  title: "Fair Pay", 
                  desc: "Set your own rates and receive payments immediately",
                  highlight: "Your rates"
                },
                { 
                  icon: Shield, 
                  title: "Build Trust", 
                  desc: "Verified profile and customer reviews boost your reputation",
                  highlight: "Verified"
                },
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift group"
                >
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm font-bold rounded-full mb-3">
                    {benefit.highlight}
                  </span>
                  <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Become a Handyman */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
              How to Become an AceLink Handyman
            </h2>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                { 
                  step: "1", 
                  title: "Sign Up", 
                  desc: "Create your profile with your skills, location, and experience. Takes just 5 minutes." 
                },
                { 
                  step: "2", 
                  title: "Get Verified", 
                  desc: "Complete our simple verification process including ID check and skill assessment." 
                },
                { 
                  step: "3", 
                  title: "Start Earning", 
                  desc: "Accept jobs, complete tasks, and get paid immediately via Mobile Money." 
                },
                { 
                  step: "4", 
                  title: "Build Your Reputation", 
                  desc: "Earn 5-star reviews and grow your customer base with every completed job." 
                },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-card/50 backdrop-blur-sm p-8 rounded-xl border-2 border-border hover:border-secondary transition-all group"
                >
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg shadow-secondary/50">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 mt-4 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 md:py-32 bg-background/5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
              Handymen Talk About Their Experience
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kwame Osei",
                  role: "Electrician",
                  image: handyman2,
                  quote: "AceLink doubled my income in 3 months. Now I have steady work every day!",
                  rating: 4.9,
                  jobs: 82
                },
                {
                  name: "Kofi Mensah",
                  role: "Plumber",
                  image: handyman3,
                  quote: "The payment system is amazing — I get paid right after every job. No more chasing customers!",
                  rating: 4.8,
                  jobs: 51
                },
                {
                  name: "Emmanuel Addo",
                  role: "General Handyman",
                  image: handyman1,
                  quote: "My verified profile has helped me build trust. Customers now choose me first!",
                  rating: 5.0,
                  jobs: 120
                },
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover-lift"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-secondary">{testimonial.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="font-bold">{testimonial.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{testimonial.jobs} jobs</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-white">
              Requirements to Join
            </h2>
            <p className="text-center text-xl text-white mb-16 max-w-2xl mx-auto">
              Here's what you need to become an AceLink handyman
            </p>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "Valid Ghana Card or National ID",
                "Smartphone with internet connection",
                "At least 2 years of experience in your trade",
                "Basic tools and equipment for your specialty",
                "Willingness to provide quality service",
                "Available for flexible work hours",
              ].map((requirement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover-lift"
                >
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <p className="text-lg">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-secondary via-secondary/80 to-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to Start Earning More?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands of handymen who have transformed their work life with AceLink
            </p>
            <Link to="/handymen/early-access">
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 px-12 py-6 text-lg font-semibold shadow-xl hover-lift"
              >
                Sign Up for Early Access
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Handymen;
