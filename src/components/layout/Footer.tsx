import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">GrowthPilot</span>
            </Link>
            <p className="mt-4 text-body text-muted-foreground max-w-sm">
              Simple, affordable websites for small businesses. 
              We help you get online fast with a site that works.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="tel:+12896540871" className="hover:text-primary transition-colors">
                  +1 (289) 654-0871
                </a>
              </li>
              <li>Based in Canada</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GrowthPilot. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Helping small businesses grow online.
          </p>
        </div>
      </div>
    </footer>
  );
}
