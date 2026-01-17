import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, DollarSign } from "lucide-react";

const features = [
  "Custom responsive design",
  "Mobile-friendly on all devices",
  "Basic SEO setup",
  "Contact form",
  "Fast load times",
  "Up to 5 pages",
  "Social media links",
  "Google Maps integration",
  "2 rounds of revisions",
  "Ongoing support included",
];

const faqs = [
  {
    question: "What if I need more pages?",
    answer: "Additional pages can be added for a small extra monthly fee. Contact us to discuss your needs.",
  },
  {
    question: "How long does it take?",
    answer: "Most websites are completed within 2-3 days after you provide your content and preferences.",
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts. You can cancel anytime. We believe in earning your business every month.",
  },
  {
    question: "What about hosting?",
    answer: "Hosting is included in your monthly fee. We take care of everything so you don't have to worry.",
  },
  {
    question: "Can I make changes later?",
    answer: "Yes! Small content updates are included. Larger changes can be made for a small additional fee.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
              <span className="text-lg">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-display-sm md:text-display text-foreground">
              One Plan. Everything Included.
            </h1>
            <p className="mt-6 text-body-lg md:text-subheading text-muted-foreground">
              No complicated tiers. No hidden fees. Just one simple price that includes everything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground text-center">
              <h2 className="text-2xl font-bold mb-2">Complete Website Package</h2>
              <p className="text-primary-foreground/80 mb-6">Everything your small business needs online</p>
              
              <div className="mb-6">
                <div className="inline-block px-6 py-3 bg-primary-foreground/20 rounded-xl mb-4">
                  <span className="text-xl font-medium">$0 Upfront</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-6xl md:text-7xl font-bold">$30</span>
                  <span className="text-2xl">/month</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Pricing */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-heading md:text-display-sm text-foreground">Why $30/month?</h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
              We believe every small business deserves a professional website without the big upfront cost.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">$0</span>
              </div>
              <h3 className="text-subheading text-foreground">No Upfront Cost</h3>
              <p className="mt-2 text-body text-muted-foreground">Start without spending thousands. Get online without the financial burden.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-subheading text-foreground">Everything Included</h3>
              <p className="mt-2 text-body text-muted-foreground">Design, hosting, support, and updates all in one simple monthly price.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">∞</span>
              </div>
              <h3 className="text-subheading text-foreground">No Lock-in</h3>
              <p className="mt-2 text-body text-muted-foreground">Cancel anytime. No long-term contracts or hidden cancellation fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-heading md:text-display-sm text-foreground">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-subheading text-foreground">{faq.question}</h3>
                <p className="mt-2 text-body text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-heading md:text-display-sm text-primary-foreground">
            Ready to get your website?
          </h2>
          <p className="mt-4 text-body-lg text-primary-foreground/80 max-w-xl mx-auto">
            Sign up today. $0 upfront. Just $30/month.
          </p>
          <div className="mt-8">
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
