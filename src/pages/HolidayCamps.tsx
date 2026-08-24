import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, User, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { camps } from "@/lib/data";
import { Reveal, Eyebrow } from "@/components/site/Section";
import { cn } from "@/lib/utils";

const ALL = "All";

export function HolidayCamps() {
  const [location, setLocation] = useState(ALL);
  const [age, setAge] = useState(ALL);
  const [availability, setAvailability] = useState(ALL);
  const [date, setDate] = useState("");
  const [bookedCampId, setBookedCampId] = useState<string | null>(null);

  const locationOptions = [ALL, ...Array.from(new Set(camps.map((c) => c.location)))];
  const ageOptions = [ALL, ...Array.from(new Set(camps.map((c) => c.ageGroup)))];

  const filtered = useMemo(
    () =>
      camps.filter((c) => {
        if (location !== ALL && c.location !== location) return false;
        if (age !== ALL && c.ageGroup !== age) return false;
        if (availability === "Available" && c.spaces === 0) return false;
        if (availability === "Fully Booked" && c.spaces > 0) return false;
        if (date && c.dateISO < date) return false;
        return true;
      }),
    [location, age, availability, date]
  );

  const handleBook = (campName: string, id: string, full: boolean) => {
    if (full) {
      toast.info(`You've joined the waitlist for ${campName}. We will contact you if a slot opens.`);
    } else {
      setBookedCampId(id);
      toast.success(`Slot reserved for ${campName}! Confirmation email sent.`);
    }
  };

  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Holiday Camps</Eyebrow>
          <h1 className="display-xl mt-6 text-4xl sm:text-6xl md:text-8xl">
            Train through
            <br />
            the holidays.
          </h1>
          <p className="mt-8 max-w-xl text-white/50">
            Full-day and half-day camps built around technical development, competition and
            performance testing. Limited spaces per group.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 md:grid-cols-4">
          <FilterSelect
            label="Location"
            value={location}
            onChange={setLocation}
            options={locationOptions}
          />
          <FilterSelect label="Age group" value={age} onChange={setAge} options={ageOptions} />
          <FilterSelect
            label="Availability"
            value={availability}
            onChange={setAvailability}
            options={[ALL, "Available", "Fully Booked"]}
          />
          <div className="bg-background px-5 py-5 md:px-8">
            <label className="eyebrow text-muted-foreground" htmlFor="from-date">
              From date
            </label>
            <input
              id="from-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full border-0 bg-transparent p-0 text-sm font-semibold uppercase tracking-wide outline-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-muted-foreground">
            {filtered.length} camp{filtered.length === 1 ? "" : "s"} found
          </p>
          <div className="mt-8 grid gap-px bg-border md:grid-cols-2">
            {filtered.map((c) => {
              const full = c.spaces === 0;
              const isBooked = bookedCampId === c.id;

              return (
                <Reveal key={c.id} className="group bg-background p-6 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Eyebrow>Ages {c.ageGroup}</Eyebrow>
                      <h2 className="mt-3 text-2xl md:text-3xl">{c.name}</h2>
                    </div>
                    <span
                      className={cn(
                        "eyebrow shrink-0 border px-3 py-2",
                        full
                          ? "border-border text-muted-foreground"
                          : isBooked
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-foreground bg-foreground text-background"
                      )}
                    >
                      {isBooked ? "Reserved" : full ? "Fully Booked" : `${c.spaces} Spaces Left`}
                    </span>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">{c.description}</p>

                  <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-6 text-sm">
                    <Detail icon={Calendar} label="Date" value={c.date} />
                    <Detail icon={Clock} label="Time" value={`${c.start} – ${c.finish}`} />
                    <Detail icon={MapPin} label="Location" value={c.location} />
                    <Detail icon={User} label="Coach" value={c.coach} />
                  </dl>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                    <p className="font-display text-3xl font-extrabold tracking-tighter">
                      £{c.price}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleBook(c.name, c.id, full)}
                      disabled={isBooked}
                      className={cn(
                        "eyebrow px-6 py-4 transition-colors inline-flex items-center gap-2",
                        isBooked
                          ? "border border-emerald-600 bg-emerald-600 text-white cursor-default"
                          : full
                          ? "border border-border text-muted-foreground hover:bg-ink hover:text-white"
                          : "border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground"
                      )}
                    >
                      {isBooked ? (
                        <>
                          <CheckCircle className="size-4" /> Reserved
                        </>
                      ) : full ? (
                        "Join Waitlist"
                      ) : (
                        "Book Camp"
                      )}
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="border border-border p-12 text-center text-muted-foreground">
              No camps match those filters. Try widening your search.
            </p>
          )}
        </div>
      </section>

      <section className="bg-ink py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="display-xl text-3xl md:text-5xl">Prefer 1-to-1 development?</h2>
          <Link
            to="/coaching/book"
            className="eyebrow mt-8 inline-block border border-white bg-white px-8 py-5 text-black transition-colors hover:bg-transparent hover:text-white"
          >
            Book Private Coaching
          </Link>
        </div>
      </section>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="eyebrow flex items-center gap-2 text-muted-foreground">
        <Icon className="size-3.5" /> {label}
      </dt>
      <dd className="mt-2 font-semibold">{value}</dd>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="bg-background px-5 py-5 md:px-8">
      <label className="eyebrow text-muted-foreground" htmlFor={label}>
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-0 bg-transparent p-0 text-sm font-semibold uppercase tracking-wide outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
