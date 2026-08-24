import { Eyebrow } from "@/components/site/Section";

export function Terms() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Legal</Eyebrow>
          <h1 className="display-xl mt-4 text-4xl sm:text-6xl md:text-7xl">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-5 text-sm leading-relaxed text-muted-foreground md:px-8">
          <div>
            <h2 className="text-xl font-bold text-foreground uppercase font-display">1. Booking &amp; Payment</h2>
            <p className="mt-3">
              All coaching sessions, camps, and performance blocks must be booked and paid for in advance
              through the official website or invoice link provided by EvoTraining Performance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground uppercase font-display">2. Cancellations &amp; Rescheduling</h2>
            <p className="mt-3">
              Cancellations made with more than 48 hours notice are eligible for full credit or rescheduling.
              Cancellations made within 48 hours of a scheduled session are non-refundable due to facility and coach reservations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground uppercase font-display">3. Athlete Conduct</h2>
            <p className="mt-3">
              Athletes are expected to attend sessions punctually with appropriate athletic footwear and gear.
              Coaches reserve the right to remove any individual whose behavior compromises safety or team focus.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground uppercase font-display">4. Medical &amp; Liability</h2>
            <p className="mt-3">
              Parents/guardians must declare any pre-existing medical conditions or injuries prior to participation.
              EvoTraining Performance coaches are fully certified in first aid and safeguarding.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Legal</Eyebrow>
          <h1 className="display-xl mt-4 text-4xl sm:text-6xl md:text-7xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-5 text-sm leading-relaxed text-muted-foreground md:px-8">
          <div>
            <h2 className="text-xl font-bold text-foreground uppercase font-display">Data Collection</h2>
            <p className="mt-3">
              We collect personal information necessary to deliver training services, manage session schedules,
              and communicate progress reports to parents and athletes. We never sell your personal data to third parties.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function Cancellation() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Legal</Eyebrow>
          <h1 className="display-xl mt-4 text-4xl sm:text-6xl md:text-7xl">
            Cancellation Policy
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-5 text-sm leading-relaxed text-muted-foreground md:px-8">
          <div>
            <h2 className="text-xl font-bold text-foreground uppercase font-display">Notice Requirements</h2>
            <p className="mt-3">
              A minimum of 48 hours notice is required to cancel or reschedule a 1-to-1 session without charge.
              For Holiday Camps, cancellations made 7+ days before camp start receive a 100% refund.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
