import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Clock, DollarSign, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitToGoogleSheet } from "@/lib/googleSheetAPI";

const benefits = [
  "$0 upfront cost",
  "Just $30/month",
  "Custom design included",
  "Mobile-friendly",
  "SEO-ready",
  "Fast turnaround",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    specifications: "",
    logo: null as File | null,
  });
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToGoogleSheet(formData);

      toast({
        title: "You're signed up!",
        description: "We'll be in touch within 24 hours to get started on your website.",
      });

      setFormData({ fullName: "", businessName: "", email: "", phone: "", specifications: "", logo: null });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({
        ...prev,
        logo: file,
      }));
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
              <span className="text-lg">$0 Upfront • $30/month</span>
            </div>
            <h1 className="text-display-sm md:text-display text-foreground">
              Get Your Free Custom Demo
            </h1>
            <p className="mt-6 text-body-lg md:text-subheading text-muted-foreground">
              Fill out the form below and we'll get started on your custom website demo — completely free. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Form & Info */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-10 rounded-2xl bg-secondary">
                <div className="mb-6">
                  <h2 className="text-heading text-foreground">Start Your Website Today</h2>
                  <p className="text-muted-foreground mt-2">We'll reach out within 24 hours to discuss your project.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      placeholder="Your Business Name"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specifications">Website Specifications (optional)</Label>
                  <Textarea
                    id="specifications"
                    name="specifications"
                    placeholder={"Tell us about what you want for your website.\nWhat pages do you need? What background colour (usually black or white)? What colour buttons (up to 2)? What information to collect on the contact form? Any specific features?"}
                    value={formData.specifications}
                    onChange={handleChange}
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="logo">Upload Your Logo (optional)</Label>
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      dragActive
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <input
                      id="logo"
                      name="logo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <label htmlFor="logo" className="cursor-pointer block">
                      <p className="text-body font-medium text-foreground">
                        {formData.logo ? formData.logo.name : "Drag and drop your logo or click to browse"}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">PNG, JPG, or GIF (max 5MB)</p>
                    </label>
                  </div>
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Getting Demo..." : "Get Custom Demo — Free"}
                </Button>

                <p className="text-sm text-muted-foreground">
                  By signing up, you agree to our simple terms. No upfront payment required.
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* What's Included */}
              <div className="p-6 rounded-xl bg-primary text-primary-foreground">
                <h3 className="text-subheading mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-subheading text-foreground">Quick Turnaround</h3>
                <p className="mt-1 text-body text-muted-foreground">Most websites are completed within 2-3 days.</p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-subheading text-foreground">Questions?</h3>
                <p className="mt-1 text-body text-muted-foreground">
                  Call or text us at{" "}
                  <a href="tel:+12896540871" className="text-primary font-medium underline">
                    +1 (289) 654-0871
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
