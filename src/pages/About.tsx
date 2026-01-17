import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description: "We believe websites should be simple and easy to use. No confusing navigation, no unnecessary features — just clean design that works.",
  },
  {
    icon: Heart,
    title: "Honest Pricing",
    description: "You'll always know what you're paying for. No hidden fees, no surprise charges, no upselling. We quote a fair price and stick to it.",
  },
  {
    icon: Users,
    title: "Built for Real People",
    description: "We design for your actual customers, not to impress other designers. Your website should help your visitors become your customers.",
  },
  {
    icon: Lightbulb,
    title: "Speed Matters",
    description: "Fast websites rank better, convert better, and frustrate people less. We build sites that load quickly on any device.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-foreground">
              We Make Websites Simple
            </h1>
            <p className="mt-6 text-body-lg md:text-subheading text-muted-foreground">
              GrowthPilot helps small businesses get online without the headaches. 
              No fancy jargon, no bloated budgets — just websites that work.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-heading md:text-display-sm text-foreground">Why We Started</h2>
              <div className="space-y-4 text-body-lg text-muted-foreground">
                <p>
                  Too many small businesses get overcharged for websites they don't need. 
                  They're sold on fancy features and flashy animations when all they really 
                  need is a clean, fast site that helps customers find them online.
                </p>
                <p>
                  We started GrowthPilot to change that. We believe every business deserves 
                  a professional website at a fair price. Not everyone needs a $10,000 website. 
                  Sometimes, a simple, well-designed site is exactly what you need.
                </p>
                <p>
                  Based in Canada, we work with businesses big and small. Our approach is 
                  straightforward: understand what you need, build it well, and deliver it fast.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <blockquote className="text-heading text-foreground italic">
                "Every business deserves a website that works, not one that breaks the bank."
              </blockquote>
              <p className="mt-4 text-body text-muted-foreground">— The GrowthPilot Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-heading md:text-display-sm text-foreground">What We Believe</h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
              These principles guide everything we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-subheading text-foreground">{value.title}</h3>
                <p className="mt-2 text-body text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-heading md:text-display-sm text-primary-foreground">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-body-lg text-primary-foreground/80 max-w-xl mx-auto">
            Ready to get a website that actually works for your business?
          </p>
          <div className="mt-8">
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
