import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { coaches, locations, programmes } from "@/lib/data";
import { Eyebrow } from "@/components/site/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function BookCoaching() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialType = searchParams.get("type") || "private";
  const initialCoach = searchParams.get("coach") || coaches[0].id;

  const [selectedProgramme, setSelectedProgramme] = useState(
    programmes.find((p) => p.id === initialType)?.id || programmes[0].id
  );
  const [selectedCoach, setSelectedCoach] = useState(initialCoach);
  const [selectedLocation, setSelectedLocation] = useState(locations[0].id);
  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("17:00");
  
  const [athleteName, setAthleteName] = useState("");
  const [athleteAge, setAthleteAge] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const prog = programmes.find((p) => p.id === selectedProgramme) || programmes[0];
  const coach = coaches.find((c) => c.id === selectedCoach) || coaches[0];
  const loc = locations.find((l) => l.id === selectedLocation) || locations[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!athleteName || !parentEmail || !sessionDate) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
    toast.success("Booking request received! Confirmation sent to " + parentEmail);
  };

  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Reservation</Eyebrow>
          <h1 className="display-xl mt-4 text-4xl sm:text-6xl md:text-7xl">
            Book Coaching Session
          </h1>
          <p className="mt-4 max-w-lg text-white/50">
            Select your programme, venue, coach, and athlete details to secure your training session.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {submitted ? (
            <div className="mx-auto max-w-2xl border border-border p-10 text-center">
              <CheckCircle2 className="mx-auto size-16 text-foreground" />
              <h2 className="display-xl mt-6 text-3xl">Booking Confirmed!</h2>
              <p className="mt-4 text-muted-foreground">
                Thank you, <strong className="text-foreground">{athleteName}</strong>. We have received your booking request for{" "}
                <strong className="text-foreground">{prog.name}</strong> with <strong className="text-foreground">{coach.name}</strong> at{" "}
                <strong className="text-foreground">{loc.venue}</strong>.
              </p>
              <div className="mt-6 border-t border-border pt-6 text-left text-sm space-y-2">
                <p><strong>Date:</strong> {sessionDate} at {sessionTime}</p>
                <p><strong>Price:</strong> £{prog.price}</p>
                <p><strong>Confirmation sent to:</strong> {parentEmail}</p>
              </div>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="eyebrow mt-8 inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-4 text-background hover:bg-background hover:text-foreground"
              >
                Back to Home <ArrowRight className="size-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-12">
              {/* FORM FIELDS */}
              <div className="space-y-10 lg:col-span-7">
                {/* Step 1: Programme */}
                <div>
                  <h3 className="eyebrow text-foreground border-b border-border pb-3">
                    01. Select Programme
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {programmes.map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setSelectedProgramme(p.id)}
                        className={`p-5 text-left border transition-all ${
                          selectedProgramme === p.id
                            ? "border-foreground bg-ink text-white"
                            : "border-border bg-background hover:border-foreground/40"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-bold uppercase text-sm">{p.name}</span>
                          <span className="font-display font-bold text-lg">£{p.price}</span>
                        </div>
                        <p className="mt-2 text-xs opacity-70">{p.detail}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Location & Coach */}
                <div>
                  <h3 className="eyebrow text-foreground border-b border-border pb-3">
                    02. Location &amp; Coach
                  </h3>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Venue</label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold uppercase outline-none focus:border-foreground"
                      >
                        {locations.map((l) => (
                          <option key={l.id} value={l.id}>
                            {l.venue}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Preferred Coach</label>
                      <select
                        value={selectedCoach}
                        onChange={(e) => setSelectedCoach(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold uppercase outline-none focus:border-foreground"
                      >
                        {coaches.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name} — {c.position}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Date & Time */}
                <div>
                  <h3 className="eyebrow text-foreground border-b border-border pb-3">
                    03. Date &amp; Time
                  </h3>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Session Date</label>
                      <input
                        type="date"
                        required
                        value={sessionDate}
                        onChange={(e) => setSessionDate(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Session Time</label>
                      <select
                        value={sessionTime}
                        onChange={(e) => setSessionTime(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      >
                        <option value="16:00">16:00 PM</option>
                        <option value="17:00">17:00 PM</option>
                        <option value="18:00">18:00 PM</option>
                        <option value="19:00">19:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 4: Athlete & Parent Info */}
                <div>
                  <h3 className="eyebrow text-foreground border-b border-border pb-3">
                    04. Athlete Information
                  </h3>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Athlete Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Athlete Name"
                        value={athleteName}
                        onChange={(e) => setAthleteName(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Athlete Age</label>
                      <input
                        type="number"
                        placeholder="e.g. 14"
                        value={athleteAge}
                        onChange={(e) => setAthleteAge(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Parent / Contact Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="email@domain.com"
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+44 7000 000000"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="eyebrow block text-muted-foreground mb-2">Development Focus / Medical Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Specify technical focus areas, injuries, or goals..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="eyebrow w-full border border-foreground bg-foreground p-5 text-center text-background transition-colors hover:bg-background hover:text-foreground font-bold"
                >
                  Confirm Booking (£{prog.price})
                </button>
              </div>

              {/* SUMMARY CARD */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 border border-border bg-ink p-8 text-white">
                  <Eyebrow className="text-white/40">Summary</Eyebrow>
                  <h3 className="font-display text-2xl font-extrabold uppercase mt-2">{prog.name}</h3>
                  <p className="mt-2 text-xs text-white/50">{prog.detail}</p>

                  <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Duration</span>
                      <span className="font-semibold">{prog.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Venue</span>
                      <span className="font-semibold">{loc.venue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Coach</span>
                      <span className="font-semibold">{coach.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Date &amp; Time</span>
                      <span className="font-semibold">
                        {sessionDate || "Not selected"} {sessionDate ? `at ${sessionTime}` : ""}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between border-t border-white/10 pt-6 items-baseline">
                    <span className="eyebrow text-white/40">Total Due</span>
                    <span className="font-display text-4xl font-extrabold">£{prog.price}</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
