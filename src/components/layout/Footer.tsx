import { Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import sobamoLogo from "@/assets/sobamo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-3">
              <img src={sobamoLogo} alt="SOBAMO Logo" className="h-12 w-12 object-contain rounded-full bg-background p-1" />
              <span className="text-2xl font-bold text-primary">SOBAMO</span>
            </a>
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering Farmers. Growing Wealth. Sustaining Communities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="/" className="text-background/80 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-background/80 hover:text-primary transition-colors">About Us</a>
              <a href="/contact" className="text-background/80 hover:text-primary transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80 text-sm">P.O Box 2, Silibwet, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:sobamocommunityorganization@gmail.com" className="text-background/80 text-sm hover:text-primary transition-colors break-all">
                  sobamocommunityorganization@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} SOBAMO - Avocado Farmers CBO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
