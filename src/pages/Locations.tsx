import { Link } from "react-router-dom";
import { locations } from "@/lib/data";
import { Reveal, Eyebrow } from "@/components/site/Section";

export function Locations() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Locations</Eyebrow>
          <h1 className="display-xl mt-6 text-4xl sm:text-6xl md:text-8xl">Where we train.</h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-px bg-border px-5 md:px-8">
          {locations.map((l) => (
            <Reveal key={l.id} className="grid gap-8 bg-background py-10 lg:grid-cols-2 lg:py-14">
              <div>
                <h2 className="text-3xl md:text-4xl">{l.venue}</h2>
                <p className="mt-3 text-muted-foreground">{l.address}</p>

                <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                  <div>
                    <Eyebrow>Available coaching</Eyebrow>
                    <ul className="mt-2 space-y-1 text-sm font-semibold">
                      {l.coaching.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Eyebrow>Upcoming camps</Eyebrow>
                    <ul className="mt-2 space-y-1 text-sm font-semibold">
                      {l.camps.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Eyebrow>Training times</Eyebrow>
                    <ul className="mt-2 space-y-1 text-sm font-semibold">
                      {l.times.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/coaching/book"
                  className="eyebrow mt-10 inline-block border border-foreground bg-foreground px-8 py-5 text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  Book at {l.venue.replace("EvoTraining ", "")}
                </Link>
              </div>

              <div className="min-h-[280px] border border-border grayscale">
                <iframe
                  title={`Map of ${l.venue}`}
                  loading="lazy"
                  className="size-full"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(l.mapQuery)}&output=embed`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
