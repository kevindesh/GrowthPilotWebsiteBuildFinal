import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Zap, DollarSign, Smartphone, Search, Settings, ArrowRight, Globe, Layout as LayoutIcon, FileText, Rocket, Users } from "lucide-react";

const trustPoints = [
  { icon: Zap, text: "Fast turnaround" },
  { icon: DollarSign, text: "$0 upfront" },
  { icon: Smartphone, text: "Mobile-friendly" },
  { icon: Search, text: "SEO-ready" },
  { icon: Settings, text: "Easy to maintain" },
];

const services = [
  { icon: Globe, title: "Website Design", description: "Custom websites built from scratch for your brand" },
  { icon: LayoutIcon, title: "Website Redesign", description: "Refresh your existing site with a modern look" },
  { icon: FileText, title: "One-Page Websites", description: "Simple, effective single-page sites that convert" },
  { icon: Users, title: "Small Business Sites", description: "Complete websites for local businesses" },
  { icon: Rocket, title: "Landing Pages", description: "High-converting pages for campaigns and launches" },
];

const steps = [
  { number: "01", title: "Sign up & tell us what you need", description: "Share your goals, style preferences, and content. We'll ask the right questions." },
  { number: "02", title: "We design and build", description: "Our team creates your website with care. You review and we refine." },
  { number: "03", title: "You launch and grow", description: "Go live with confidence. Your new website starts working for your business." },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 animate-fade-in">
              <span className="text-lg">$0 Upfront • Just $30/month</span>
            </div>
            <h1 className="text-display-sm md:text-display text-foreground animate-fade-in">
              Simple, Affordable Websites That Help Your Business Grow
            </h1>
            <p className="mt-6 text-body-lg md:text-subheading text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We design clean, easy-to-read websites for small businesses — no upfront cost, just $30/month.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Sign Up Now</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/pricing">See What's Included</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="py-8 md:py-12 bg-primary">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-center md:text-left">
            <div className="text-primary-foreground">
              <p className="text-2xl md:text-3xl font-bold">$0 Upfront</p>
              <p className="text-primary-foreground/80">No setup fees, ever.</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-primary-foreground/30"></div>
            <div className="text-primary-foreground">
              <p className="text-2xl md:text-3xl font-bold">$30/month</p>
              <p className="text-primary-foreground/80">Everything included.</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-primary-foreground/30"></div>
            <Button asChild variant="accent" size="lg" className="mt-4 md:mt-0">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-2 text-secondary-foreground">
                <point.icon className="h-5 w-5 text-primary" />
                <span className="text-body font-medium">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-heading md:text-display-sm text-foreground">What We Build</h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
              Straightforward web design services for businesses that want results without the complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-subheading text-foreground">{service.title}</h3>
                <p className="mt-2 text-body text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/services" className="gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-heading md:text-display-sm text-foreground">How It Works</h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
              A simple process designed to get your website live quickly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-6xl md:text-7xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-subheading text-foreground">{step.title}</h3>
                <p className="mt-2 text-body text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading md:text-display-sm text-foreground">One Simple Price</h2>
            <p className="mt-4 text-body-lg text-muted-foreground">
              No hidden fees. No surprises. Everything you need for one low monthly price.
            </p>
            <div className="mt-8 p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground">
              <div className="flex flex-col items-center">
                <p className="text-lg font-medium text-primary-foreground/80 uppercase tracking-wide">Just</p>
                <p className="text-6xl md:text-7xl font-bold mt-2">$30</p>
                <p className="text-xl text-primary-foreground/90 mt-1">per month</p>
                <p className="text-2xl font-semibold text-primary-foreground mt-4 px-4 py-2 bg-primary-foreground/20 rounded-lg">$0 Upfront</p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left">
                {["Mobile-friendly design", "Basic SEO setup", "Contact form included", "Fast load times", "Custom design", "Ongoing support"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-primary-foreground">
                    <Check className="h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="accent" size="lg" className="mt-8">
                <Link to="/contact">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="text-heading md:text-display-sm text-foreground">
            Get your website live in days, not weeks.
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
            Stop waiting. Sign up today and let's build a website that works as hard as you do.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Sign Up Now — $30/month</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
