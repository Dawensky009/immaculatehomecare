import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Care Team", href: "#care-team" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    if (!isHome) {
      // Navigate to home first, then scroll after render
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // On non-home pages, always show solid background
  const showSolid = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className={`text-lg md:text-xl font-bold flex-shrink-0 transition-colors duration-300 ${
              showSolid ? "text-navy" : "text-white"
            }`}
          >
            Immaculate Home Care
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 text-sm font-medium gentle-animation rounded-md transition-colors duration-300 ${
                  showSolid
                    ? "text-muted-foreground hover:text-primary hover:bg-secondary"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/careers"
              className={`px-3 py-2 text-sm font-medium gentle-animation rounded-md transition-colors duration-300 ${
                showSolid
                  ? "text-primary font-semibold hover:bg-secondary"
                  : "text-sky-300 font-semibold hover:text-white hover:bg-white/10"
              }`}
            >
              Join Our Team
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-1" />
              Call Today
            </Button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                showSolid ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg gentle-animation"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/careers"
              onClick={() => setIsMobileOpen(false)}
              className="block w-full text-left px-4 py-3 text-base font-semibold text-primary hover:bg-secondary rounded-lg gentle-animation"
            >
              Join Our Team
            </Link>
            <Button
              onClick={() => scrollTo("#contact")}
              className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Today
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
