import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-extrabold uppercase tracking-tighter">
              EvoTraining
              <span className="block text-xs font-semibold tracking-[0.3em] text-white/40">
                Performance
              </span>
            </p>
            <p className="mt-6 max-w-sm text-sm text-white/50">
              Elite coaching designed to develop stronger, smarter and more confident athletes.
            </p>
            <div className="mt-8 flex gap-4">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="border border-white/20 p-3 transition-colors hover:border-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/40">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/coaching" className="hover:text-white transition-colors">
                  Coaching
                </Link>
              </li>
              <li>
                <Link to="/holiday-camps" className="hover:text-white transition-colors">
                  Holiday Camps
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="hover:text-white transition-colors">
                  Our Coaches
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Legal</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/legal/terms" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/cancellation" className="hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© {new Date().getFullYear()} EvoTraining Performance. All rights reserved.</p>
            <p className="mt-1 text-white/60">
              Design &amp; Developed by{" "}
              <a
                href="https://kyptronix.us"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80"
              >
                Kyptronix LLP
              </a>
            </p>
          </div>
          <p className="tracking-[0.2em] uppercase">Performance. Discipline. Progress.</p>
        </div>
      </div>
    </footer>
  );
}
