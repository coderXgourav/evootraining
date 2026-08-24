import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useScrolled } from "@/lib/reveal";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/coaching", label: "Coaching" },
  { to: "/holiday-camps", label: "Holiday Camps" },
  { to: "/coaches", label: "Coaches" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-extrabold uppercase tracking-tighter text-white md:text-xl">
            EvoTraining
          </span>
          <span className="eyebrow hidden text-white/50 sm:block">Performance</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const isActive =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "eyebrow transition-colors hover:text-white",
                  isActive ? "text-white font-bold" : "text-white/70"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/coaching/book"
            className="eyebrow border border-white bg-white px-5 py-3 text-black transition-colors hover:bg-transparent hover:text-white"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-extrabold uppercase tracking-tight text-white/80 py-3 border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/coaching/book"
              onClick={() => setOpen(false)}
              className="eyebrow mt-6 bg-white px-5 py-4 text-center text-black"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
