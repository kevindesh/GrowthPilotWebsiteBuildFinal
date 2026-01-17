import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design for Businesses",
    description: "Custom websites built specifically for your business. Professional, fast-loading, and designed to help you grow.",
    forWho: "Any business wanting a professional online presence.",
    includes: [
      "Custom design tailored to your brand",
      "Mobile-responsive and fully functional",
      "Fast-loading optimized pages",
      "Contact form integration",
      "Basic SEO setup",
      "Up to 10 pages",
      "Year-round maintenance with 24-hour response time — included at no extra cost",
    ],
    outcome: "A professional website that represents your business and helps you convert visitors into customers.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-foreground">
              Our Offer
            </h1>
            <p className="mt-6 text-body-lg md:text-subheading text-muted-foreground">
              We do one thing really well: building professional websites for businesses. 
              No complexity, no jargon — just websites that work and help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container-wide space-y-12 md:space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start p-6 md:p-10 rounded-2xl ${
                index % 2 === 0 ? "bg-secondary" : "bg-card border border-border"
              }`}
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-heading text-foreground">{service.title}</h2>
                <p className="mt-4 text-body-lg text-muted-foreground">{service.description}</p>
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Who it's for</h4>
                  <p className="mt-2 text-body text-muted-foreground">{service.forWho}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">The outcome</h4>
                  <p className="mt-2 text-body text-muted-foreground">{service.outcome}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">What's included</h4>
                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-body text-secondary-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-heading md:text-display-sm text-primary-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-body-lg text-primary-foreground/80 max-w-xl mx-auto">
            Let's build your professional website and help your business grow.
          </p>
          <div className="mt-8">
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
