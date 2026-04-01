import { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type CareType = "skilled-nursing" | "personal-care" | "pediatric" | "senior-care";
type WhoNeedsCare = "child" | "adult" | "senior";
type ContactMethod = "phone" | "email";

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    whoNeedsCare: "" as WhoNeedsCare | "",
    careTypes: [] as CareType[],
    description: "",
    contactMethod: "phone" as ContactMethod,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (formData.name.length > 100) newErrors.name = "Name must be under 100 characters";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!/^[\d\s\-()+ ]{7,20}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (formData.email.length > 255) newErrors.email = "Email must be under 255 characters";
    if (!formData.whoNeedsCare) newErrors.whoNeedsCare = "Please select who needs care";
    if (formData.careTypes.length === 0) newErrors.careTypes = "Select at least one type of care";
    if (formData.description.length > 1000) newErrors.description = "Description must be under 1000 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast({
        title: "Care Request Submitted",
        description: "Thank you! We'll be in touch with you shortly.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        whoNeedsCare: "",
        careTypes: [],
        description: "",
        contactMethod: "phone",
      });
      setErrors({});
    }
  };

  const toggleCareType = (type: CareType) => {
    setFormData((prev) => ({
      ...prev,
      careTypes: prev.careTypes.includes(type)
        ? prev.careTypes.filter((t) => t !== type)
        : [...prev.careTypes, type],
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cream to-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Request Care Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ready to get started? Fill out our intake form or call us directly. We're here to help your family find the right care.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-beige border border-beige-dark/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-navy text-lg">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-beige border border-beige-dark/30">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-navy">info@immaculatehomecare.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-beige border border-beige-dark/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Area</p>
                  <p className="font-semibold text-navy">Serving Communities Across Florida</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-gold" />
              AHCA Licensed Home Care Provider
            </div>
          </div>

          {/* Right: Intake Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-lg relative overflow-hidden">
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-primary to-gold-light" />
            <h3 className="text-xl font-semibold text-navy mb-6">
              Care Request Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Full Name *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  maxLength={100}
                  className="bg-input-background"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  maxLength={20}
                  className="bg-input-background"
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  maxLength={255}
                  className="bg-input-background"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Who Needs Care */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Who Needs Care? *
                </label>
                <div className="flex flex-wrap gap-3">
                  {(["child", "adult", "senior"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, whoNeedsCare: option })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border gentle-animation ${
                        formData.whoNeedsCare === option
                          ? "bg-gold text-white border-gold"
                          : "bg-background border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      {option === "child" ? "Child" : option === "adult" ? "Adult" : "Senior"}
                    </button>
                  ))}
                </div>
                {errors.whoNeedsCare && <p className="text-destructive text-xs mt-1">{errors.whoNeedsCare}</p>}
              </div>

              {/* Care Types */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Type of Care Needed *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    { value: "skilled-nursing" as CareType, label: "Skilled Nursing" },
                    { value: "personal-care" as CareType, label: "Personal Care" },
                    { value: "pediatric" as CareType, label: "Pediatric" },
                    { value: "senior-care" as CareType, label: "Senior Care" },
                  ]).map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => toggleCareType(option.value)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border gentle-animation ${
                        formData.careTypes.includes(option.value)
                          ? "bg-gold text-white border-gold"
                          : "bg-background border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {errors.careTypes && <p className="text-destructive text-xs mt-1">{errors.careTypes}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Brief Description of Needs
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about the care needed..."
                  maxLength={1000}
                  rows={3}
                  className="bg-input-background"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-3">
                  {(["phone", "email"] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: method })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border gentle-animation ${
                        formData.contactMethod === method
                          ? "bg-gold text-white border-gold"
                          : "bg-background border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      {method === "phone" ? "Phone" : "Email"}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-white text-base py-6 shadow-lg shadow-gold/25"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Care Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
