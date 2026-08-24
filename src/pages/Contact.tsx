import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Eyebrow } from "@/components/site/Section";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("Manchester");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please complete all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! Your message has been sent to our performance team.");
  };

  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="text-white/40">Contact</Eyebrow>
          <h1 className="display-xl mt-6 text-4xl sm:text-6xl md:text-8xl">Get in touch.</h1>
          <p className="mt-8 max-w-xl text-white/50">
            Have questions about private coaching, upcoming holiday camps, or custom team training?
            Our performance team is here to assist.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-5">
              <div>
                <Eyebrow>Direct Contact</Eyebrow>
                <h2 className="mt-3 text-2xl font-bold uppercase">Training HQ</h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Our performance coordinators respond within 24 hours Monday through Saturday.
                </p>
              </div>

              <div className="space-y-6 border-t border-border pt-6 text-sm">
                <div className="flex items-start gap-4">
                  <Mail className="size-5 shrink-0 text-foreground" />
                  <div>
                    <p className="eyebrow text-muted-foreground">Email</p>
                    <a href="mailto:info@evotraining.co.uk" className="font-semibold hover:underline">
                      info@evotraining.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="size-5 shrink-0 text-foreground" />
                  <div>
                    <p className="eyebrow text-muted-foreground">Phone</p>
                    <a href="tel:+441610000000" className="font-semibold hover:underline">
                      +44 (0) 161 800 9000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="size-5 shrink-0 text-foreground" />
                  <div>
                    <p className="eyebrow text-muted-foreground">Main Venues</p>
                    <p className="font-semibold">Manchester · Leeds · Birmingham</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-border bg-background p-8 md:p-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <h3 className="display-xl text-3xl">Message Sent!</h3>
                    <p className="mt-4 text-muted-foreground">
                      Thank you for contacting EvoTraining Performance. A member of our staff will reach out to <strong>{email}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="eyebrow mt-8 inline-block border border-foreground bg-foreground px-8 py-4 text-background hover:bg-background hover:text-foreground"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="eyebrow text-foreground border-b border-border pb-3">
                      Send Us a Message
                    </h3>

                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>

                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>

                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Preferred Venue</label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold uppercase outline-none focus:border-foreground"
                      >
                        <option value="Manchester">Manchester (Trafford)</option>
                        <option value="Leeds">Leeds (Elland Centre)</option>
                        <option value="Birmingham">Birmingham (Aston Hub)</option>
                      </select>
                    </div>

                    <div>
                      <label className="eyebrow block text-muted-foreground mb-2">Message *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can we help your athlete?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border border-border bg-background p-4 text-sm font-semibold outline-none focus:border-foreground"
                      />
                    </div>

                    <button
                      type="submit"
                      className="eyebrow w-full border border-foreground bg-foreground p-5 text-center text-background transition-colors hover:bg-background hover:text-foreground font-bold inline-flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="size-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
