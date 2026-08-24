import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import groupImg from "@/assets/group.jpg";
import { Reveal, Eyebrow } from "@/components/site/Section";

const values = [
  {
    title: "Discipline",
    body: "Standards are set on day one. How athletes prepare, listen and recover defines how they perform.",
  },
  {
    title: "Development",
    body: "Every athlete follows an individual plan with measurable technical and physical targets.",
  },
  {
    title: "Confidence",
    body: "Competence creates confidence. We build it through repetition, feedback and honest challenge.",
  },
  {
    title: "Consistency",
    body: "Progress compounds. Weekly contact time is what separates talent from performance.",
  },
];

export function About() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">About</Eyebrow>
          <h1 className="display-xl mt-6 text-4xl sm:text-6xl md:text-8xl">More than coaching.</h1>
          <p className="mt-8 max-w-2xl text-white/50">
            EvoTraining Performance exists to develop athletes properly — technically, physically
            and mentally — over years, not weeks.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <img
              src={heroImg}
              alt="Athlete in a night training session"
              loading="lazy"
              width={1920}
              height={1200}
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </Reveal>
          <Reveal className="flex flex-col justify-center">
            <h2 className="display-xl text-3xl md:text-5xl">
              Long-term athlete progression, engineered.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We plan in blocks, measure what matters and hold athletes to a standard. Sessions
              combine technical repetition, physical development and decision-making — all delivered
              by qualified coaches who work in the professional and academy game.
            </p>
            <p className="mt-4 text-muted-foreground">
              Parents receive clear reporting. Athletes receive clear targets. Nothing is left to
              chance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} className="bg-background p-8">
                <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-6 text-xl">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-28 text-white text-center">
        <img
          src={groupImg}
          alt="Group of athletes training"
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-25 grayscale"
        />
        <div className="relative mx-auto max-w-3xl px-5">
          <h2 className="display-xl text-3xl md:text-5xl">Ready to evolve your performance?</h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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
