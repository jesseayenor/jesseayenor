import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="https://i.imgur.com/fJHln67.png" 
            alt="AceLink Logo"
            className="h-20 w-auto object-contain transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(216,114,42,0.8)]" 
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/how-it-works" 
            className="text-foreground hover:text-secondary transition-colors font-medium"
          >
            How It Works
          </Link>
          <Link 
            to="/handymen" 
            className="text-foreground hover:text-secondary transition-colors font-medium"
          >
            For Handymen
          </Link>
          <Link 
            to="/customers" 
            className="text-foreground hover:text-secondary transition-colors font-medium"
          >
            For Customers
          </Link>
          <Link to="/early-access">
            <Button variant="secondary" size="lg" className="hover-lift">
              Get Early Access
            </Button>
          </Link>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <Link to="/how-it-works" className="text-foreground hover:text-secondary">
              How It Works
            </Link>
            <Link to="/handymen" className="text-foreground hover:text-secondary">
              For Handymen
            </Link>
            <Link to="/customers" className="text-foreground hover:text-secondary">
              For Customers
            </Link>
            <Link to="/early-access">
              <Button variant="secondary" className="w-full">
                Get Early Access
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
