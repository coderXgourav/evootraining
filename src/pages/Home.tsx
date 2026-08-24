import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import privateImg from "@/assets/private.jpg";
import campsImg from "@/assets/camps.jpg";
import groupImg from "@/assets/group.jpg";
import { Reveal, Eyebrow } from "@/components/site/Section";
import { pillars, stats, testimonials } from "@/lib/data";

const services = [
  {
    title: "Private Coaching",
    body: "Personalised 1-to-1 coaching focused on technical development, confidence and individual performance.",
    cta: "Book Private Coaching",
    to: "/coaching/book",
    img: privateImg,
  },
  {
    title: "Holiday Camps",
    body: "Structured, energetic training camps designed to develop skills while keeping athletes engaged.",
    cta: "View Upcoming Camps",
    to: "/holiday-camps",
    img: campsImg,
  },
  {
    title: "Group Training",
    body: "High-intensity development sessions with small groups of athletes.",
    cta: "Explore Group Sessions",
    to: "/coaching",
    img: groupImg,
  },
  {
    title: "Performance Development",
    body: "Long-term athlete development programmes focused on performance, discipline and progression.",
    cta: "Learn More",
    to: "/coaching",
    img: heroImg,
  },
];

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Athlete sprinting under floodlights during a night training session"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover opacity-55 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/70" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <Eyebrow className="text-white/50">EvoTraining Performance</Eyebrow>
          <h1 className="display-xl mt-6 text-white text-[3.25rem] leading-[0.85] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            Train.
            <br />
            Evolve.
            <br />
            Perform.
          </h1>
          <p className="mt-8 max-w-xl text-base text-white/60 md:text-lg">
            Elite coaching designed to develop stronger, smarter and more confident athletes.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/coaching/book"
              className="eyebrow inline-flex items-center justify-center gap-3 border border-white bg-white px-8 py-5 text-black transition-colors hover:bg-transparent hover:text-white"
            >
              Book a Session <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/holiday-camps"
              className="eyebrow inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-5 text-white transition-colors hover:border-white"
            >
              Explore Camps
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 right-5 hidden animate-bounce text-white/30 md:block md:right-8">
          <span className="eyebrow">Scroll</span>
        </div>
      </section>

      {/* PERFORMANCE STATEMENT */}
      <section className="bg-background py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="display-xl max-w-4xl text-4xl leading-[0.95] sm:text-6xl md:text-7xl">
              Potential isn't enough.
              <span className="block text-muted-foreground">
                Performance comes from preparation.
              </span>
            </h2>
          </Reveal>
          <Reveal className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
            <p className="text-base text-muted-foreground md:col-span-2 md:text-lg">
              EvoTraining Performance combines structured coaching, technical development and
              high-performance training to help athletes progress. Every session is planned,
              measured and reviewed — so improvement isn't accidental, it's engineered.
            </p>
            <div className="space-y-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-foreground pl-5">
                  <p className="font-display text-3xl font-extrabold tracking-tighter">{s.value}</p>
                  <p className="eyebrow mt-1 text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-6 py-12 md:py-20">
            <h2 className="display-xl text-3xl md:text-5xl">The Programmes</h2>
            <Eyebrow>Four ways to train</Eyebrow>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {services.map((s) => (
              <Reveal key={s.title} className="group bg-background">
                <Link to={s.to} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="size-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl">{s.title}</h3>
                    <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
                      {s.body}
                    </p>
                    <span className="eyebrow mt-8 inline-flex items-center gap-3 border-b border-foreground pb-2">
                      {s.cta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-ink py-24 text-white md:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="display-xl text-4xl sm:text-6xl md:text-7xl">
              Build the complete athlete.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} className="bg-ink p-8 md:p-10">
                <span className="eyebrow text-white/30">0{i + 1}</span>
                <h3 className="mt-6 text-xl md:text-2xl">{p.title}</h3>
                <p className="mt-4 text-sm text-white/50">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="display-xl text-4xl sm:text-6xl">Progress you can see.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {testimonials.map((t) => (
              <Reveal key={t.name} className="bg-background p-8 md:p-10">
                <p className="text-base leading-relaxed md:text-lg">"{t.quote}"</p>
                <p className="eyebrow mt-8">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink py-24 text-white md:py-40">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <h2 className="display-xl text-4xl sm:text-6xl md:text-7xl">
            Ready to evolve your performance?
          </h2>
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/coaching/book"
              className="eyebrow border border-white bg-white px-8 py-5 text-black transition-colors hover:bg-transparent hover:text-white"
            >
              Book Private Coaching
            </Link>
            <Link
              to="/holiday-camps"
              className="eyebrow border border-white/30 px-8 py-5 transition-colors hover:border-white"
            >
              Find a Holiday Camp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
