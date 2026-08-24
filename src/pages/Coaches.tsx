import { Link } from "react-router-dom";
import { coaches } from "@/lib/data";
import { Reveal, Eyebrow } from "@/components/site/Section";

export function Coaches() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">The Team</Eyebrow>
          <h1 className="display-xl mt-6 text-4xl sm:text-6xl md:text-8xl">Elite coaching staff.</h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-px bg-border">
            {coaches.map((c) => (
              <Reveal key={c.id} className="grid gap-8 bg-background py-10 md:grid-cols-12 md:py-14">
                <div className="md:col-span-4">
                  <div className="flex aspect-[4/5] items-end justify-start bg-ink p-6">
                    <span className="font-display text-6xl font-extrabold tracking-tighter text-white/80 md:text-8xl">
                      {c.initials}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <Eyebrow>{c.position}</Eyebrow>
                  <h2 className="mt-3 text-3xl md:text-5xl">{c.name}</h2>
                  <p className="mt-5 max-w-2xl text-muted-foreground">{c.bio}</p>

                  <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                    <div>
                      <Eyebrow>Speciality</Eyebrow>
                      <p className="mt-2 text-sm font-semibold">{c.speciality}</p>
                      <Eyebrow className="mt-6">Experience</Eyebrow>
                      <p className="mt-2 text-sm font-semibold">{c.experience}</p>
                    </div>
                    <div>
                      <Eyebrow>Qualifications</Eyebrow>
                      <ul className="mt-2 space-y-1 text-sm font-semibold">
                        {c.qualifications.map((q) => (
                          <li key={q}>{q}</li>
                        ))}
                      </ul>
                      <Eyebrow className="mt-6">Available programmes</Eyebrow>
                      <p className="mt-2 text-sm font-semibold">{c.programmes.join(" · ")}</p>
                    </div>
                  </div>

                  <Link
                    to={`/coaching/book?coach=${c.id}`}
                    className="eyebrow mt-10 inline-block border border-foreground bg-foreground px-8 py-5 text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    Train with {c.name.split(" ")[0]}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
