import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-12 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent mb-8 opacity-50"></div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/about" className="text-muted-foreground hover:text-secondary transition-colors">
            About
          </Link>
          <Link to="/careers" className="text-muted-foreground hover:text-secondary transition-colors">
            Careers
          </Link>
          <Link to="/partnerships" className="text-muted-foreground hover:text-secondary transition-colors">
            Partnerships
          </Link>
          <Link to="/support" className="text-muted-foreground hover:text-secondary transition-colors">
            Support
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-secondary transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground mb-8">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          {" • "}
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          {" • "}
          <Link to="/sitemap" className="hover:text-foreground transition-colors">
            Sitemap
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground/60">
          © 2025 AceLink Ghana. All rights reserved. Where Jobs Find Homes.
        </p>
      </div>
    </footer>
  );
};
