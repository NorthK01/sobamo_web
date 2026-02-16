import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Menu, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import sobamoLogo from "@/assets/sobamo.png";

const navLinks = [
  { href: "/", label: "Home", type: "link" },
  { href: "/#about", label: "About", type: "hash" },
  { href: "/contact", label: "Contact", type: "link" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to render the correct type of link
  const renderLink = (link: typeof navLinks[0], mobile = false) => {
    const className = mobile 
      ? "flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-bold transition-all text-foreground/80 hover:bg-primary/10 hover:text-primary"
      : "px-5 py-2 rounded-full text-sm font-semibold transition-all text-foreground/70 hover:text-primary hover:bg-primary/5 active:scale-95";

    const activeClassName = mobile ? "bg-primary text-primary-foreground" : "text-primary bg-primary/10";

    if (link.type === "hash") {
      return (
        <NavHashLink
          key={link.href}
          smooth
          to={link.href}
          onClick={() => setIsOpen(false)}
          className={className}
          activeClassName={activeClassName}
        >
          {link.label}
          {mobile && <div className="h-2 w-2 rounded-full bg-current opacity-20" />}
        </NavHashLink>
      );
    }

    return (
      <NavLink
        key={link.href}
        to={link.href}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => `${className} ${isActive ? activeClassName : ""}`}
      >
        {link.label}
        {mobile && <div className="h-2 w-2 rounded-full bg-current opacity-20" />}
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
      <div className="container flex h-20 items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative h-14 w-14 flex items-center justify-center overflow-hidden">
            <img 
              src={sobamoLogo} 
              alt="SOBAMO Logo" 
              loading="eager"
              className="h-full w-full object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black tracking-tight text-primary leading-none">SOBAMO</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Avocado Farmers CBO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => renderLink(link))}
          <div className="ml-4 pl-4 border-l border-border">
            <Button asChild className="rounded-full px-6 font-bold shadow-lg">
              <Link to="/contact">
                <PhoneCall className="mr-2 h-4 w-4" /> Join Us
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="rounded-xl border-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] border-l-4 border-primary">
            <div className="flex flex-col gap-8 mt-10">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => renderLink(link, true))}
              </nav>
              <Button asChild className="mt-4 w-full h-14 rounded-2xl text-lg font-bold">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;