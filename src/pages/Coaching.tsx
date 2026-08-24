import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import privateImg from "@/assets/private.jpg";
import groupImg from "@/assets/group.jpg";
import heroImg from "@/assets/hero.jpg";
import { Reveal, Eyebrow } from "@/components/site/Section";
import { programmes } from "@/lib/data";

export function Coaching() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Programmes</Eyebrow>
          <h1 className="display-xl mt-6 text-4xl sm:text-6xl md:text-8xl">
            Coaching built for progress.
          </h1>
          <p className="mt-8 max-w-xl text-white/50">
            From 1-to-1 private technical work to structured group sessions and long-term
            performance development.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-16">
            {/* Private 1-to-1 */}
            <Reveal className="grid gap-8 border border-border bg-background p-8 md:grid-cols-12 md:p-12">
              <div className="md:col-span-5">
                <img
                  src={privateImg}
                  alt="Private coaching session"
                  className="aspect-[4/3] w-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <Eyebrow>Individual Focus</Eyebrow>
                  <h2 className="mt-2 text-3xl md:text-4xl">Private 1-to-1 Coaching</h2>
                  <p className="mt-4 text-muted-foreground">
                    Dedicated individual session structured around specific technical, tactical, and
                    physical targets. Instant feedback and video analysis included.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Individual technical assessment
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> High volume of quality repetitions
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Written performance feedback
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <p className="font-display text-2xl font-extrabold">£50 <span className="text-xs font-normal text-muted-foreground">/ 60 min session</span></p>
                  <Link
                    to="/coaching/book?type=private"
                    className="eyebrow inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-4 text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    Book Session <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Group Training */}
            <Reveal className="grid gap-8 border border-border bg-background p-8 md:grid-cols-12 md:p-12">
              <div className="md:col-span-5">
                <img
                  src={groupImg}
                  alt="Group training session"
                  className="aspect-[4/3] w-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <Eyebrow>Competitive Atmosphere</Eyebrow>
                  <h2 className="mt-2 text-3xl md:text-4xl">Small Group Training</h2>
                  <p className="mt-4 text-muted-foreground">
                    High-intensity group sessions with 4-8 athletes. Simulates match decisions,
                    positional pressure, and game-speed execution.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Small-sided game scenarios
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Decision speed under pressure
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Peer-to-peer competition
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <p className="font-display text-2xl font-extrabold">£25 <span className="text-xs font-normal text-muted-foreground">/ 90 min session</span></p>
                  <Link
                    to="/coaching/book?type=group"
                    className="eyebrow inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-4 text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    Book Session <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Performance Development Block */}
            <Reveal className="grid gap-8 border border-border bg-background p-8 md:grid-cols-12 md:p-12">
              <div className="md:col-span-5">
                <img
                  src={heroImg}
                  alt="Long term athlete performance block"
                  className="aspect-[4/3] w-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <Eyebrow>Long-Term Progression</Eyebrow>
                  <h2 className="mt-2 text-3xl md:text-4xl">Performance Development (Block of 6)</h2>
                  <p className="mt-4 text-muted-foreground">
                    A comprehensive 6-session structured pathway with athletic testing, progress tracking,
                    and personalized training plans.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Initial speed & agility baseline test
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Mid-block video review & analysis
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="size-4 text-foreground" /> Final progression report & pathway guidance
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <p className="font-display text-2xl font-extrabold">£270 <span className="text-xs font-normal text-muted-foreground">/ 6 Session Block</span></p>
                  <Link
                    to="/coaching/book?type=performance"
                    className="eyebrow inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-4 text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    Book Programme <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUICK COMPARISON */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Pricing Overview</Eyebrow>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((p) => (
              <div key={p.id} className="bg-ink p-8 flex flex-col justify-between">
                <div>
                  <p className="eyebrow text-white/50">{p.duration}</p>
                  <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
                  <p className="mt-4 text-xs text-white/60">{p.detail}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-display text-3xl font-extrabold">£{p.price}</p>
                  <Link
                    to={`/coaching/book?type=${p.id}`}
                    className="eyebrow mt-4 inline-block w-full border border-white/30 py-3 text-center text-xs text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                  >
                    Select
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
