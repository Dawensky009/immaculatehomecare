import { Phone, Mail, ShieldCheck } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Care Team", href: "#care-team" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Immaculate Home Care Services
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Compassionate, licensed home health care for children, adults, and seniors throughout Florida.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <ShieldCheck className="w-4 h-4 text-sky-300" />
              AHCA Licensed Provider
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/70 hover:text-white gentle-animation"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-sky-300" />
                (123) 456-7890
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-sky-300" />
                info@immaculatehomecare.com
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Immaculate Home Care Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
