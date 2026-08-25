import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pb-20 lg:pb-12">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand info (Desktop / Tablet visible) */}
          <div className="sm:col-span-2 md:col-span-2 space-y-4">
            <p className="font-display text-2xl font-extrabold uppercase tracking-tighter text-white">
              EvoTraining
              <span className="block text-xs font-semibold tracking-[0.3em] text-white/40">
                Performance
              </span>
            </p>

            <p className="max-w-sm text-sm text-white/60 leading-relaxed">
              Elite coaching designed to develop stronger, smarter and more confident athletes.
            </p>
            <div className="flex gap-3 pt-2">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="border border-white/20 p-2.5 text-white/80 transition-colors hover:border-white hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8E7D5B]">
              Quick Links
            </p>
            <ul className="space-y-3.5 text-sm font-medium text-white/80">
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
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8E7D5B]">
              Legal
            </p>
            <ul className="space-y-3.5 text-sm font-medium text-white/80">
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

        {/* Divider & Copyright section strictly matching screenshot */}
        <div className="mt-12 border-t border-white/10 pt-8 space-y-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} EvoTraining Performance. All rights reserved.
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8E7D5B]">
            PERFORMANCE. DISCIPLINE. PROGRESS.
          </p>
        </div>
      </div>
    </footer>
  );
}

