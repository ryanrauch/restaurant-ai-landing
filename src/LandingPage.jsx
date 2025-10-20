import React from "react";

/**
 * Restaurant AI Landing Page (React + TailwindCSS)
 *
 * What this includes:
 * - Sticky nav, hero, social proof, value props, how-it-works, features, analytics snapshot, pricing, live demo CTA, FAQ, footer
 * - Clear messaging for a Vapi-based phone agent integrated with OpenTable
 * - Placeholder hooks for: Vapi demo widget, Calendly/booking, and contact links
 *
 * How to use:
 * - Replace BRAND_NAME, CONTACT_EMAIL, DEMO_NUMBER, and CALENDLY_URL with your info
 * - If you have a live Vapi web widget, embed it in the Demo section where indicated
 * - Tailwind is assumed to be available; adjust classes as needed
 */

const BRAND_NAME = "VTable.ai"; // e.g., "TableLine AI"
const CONTACT_EMAIL = "founder@yourbrand.com";
const DEMO_NUMBER = "+1 (555) 010-1212"; // sample demo hotline (Twilio/Vapi)
const CALENDLY_URL = "#"; // replace with your Calendly / booking link

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold tracking-tight lg:text-4xl">{value}</div>
    <div className="mt-1 text-sm text-gray-500">{label}</div>
  </div>
);

const Feature = ({ title, desc, icon }) => (
  <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
    <div className="flex items-start gap-3">
      <div className="mt-1 text-primary-600">{icon ?? <Check />}</div>
      <div>
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  </div>
);

const PricingCard = ({ tier, price, description, features, ctaText, highlighted }) => (
  <div className={`flex flex-col rounded-2xl border p-6 shadow-sm ${highlighted ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 bg-white"}`}>
    <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold">{tier}</h3>
      {highlighted && <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Popular</span>}
    </div>
    <div className="mt-4 flex items-end gap-1">
      <div className="text-3xl font-semibold lg:text-4xl">{price}</div>
      <div className={`pb-1 text-sm ${highlighted ? "text-white/70" : "text-gray-500"}`}>/month</div>
    </div>
    <p className={`mt-2 text-sm ${highlighted ? "text-white/80" : "text-gray-600"}`}>{description}</p>

    <ul className={`mt-4 space-y-2 text-sm ${highlighted ? "text-white" : "text-gray-700"}`}>
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className={`mt-0.5 ${highlighted ? "text-white" : "text-gray-900"}`}><Check /></span>
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <a
      href={CALENDLY_URL}
      className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ${
        highlighted
          ? "bg-white text-gray-900 hover:opacity-90"
          : "bg-gray-900 text-white hover:bg-gray-800"
      }`}
    >
      {ctaText}
    </a>
  </div>
);

const FAQItem = ({ q, a }) => (
  <details className="group rounded-xl border border-gray-200 p-4">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <h4 className="text-base font-semibold text-gray-900">{q}</h4>
      <span className="shrink-0 rounded-full border p-1 text-gray-500 transition group-open:rotate-180">▾</span>
    </summary>
    <p className="mt-3 text-sm text-gray-600">{a}</p>
  </details>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* SEO / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `${BRAND_NAME} – AI Phone Host for Restaurants`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI phone agent that answers calls, books and modifies OpenTable reservations, and handles FAQs 24/7.",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: 99,
              highPrice: 249,
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <Section className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900 text-white">AI</span>
            <span>{BRAND_NAME}</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#how" className="text-sm text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
            <a href={CALENDLY_URL} className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Book a demo</a>
          </div>
        </Section>
      </nav>

      {/* Hero */}
      <Section id="hero" className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Never miss a reservation again.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {BRAND_NAME} is your restaurant’s AI phone host — it answers every call, books
            and modifies OpenTable reservations, and handles FAQs 24/7. Keep seats full
            and staff focused on guests.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CALENDLY_URL} className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800">
              See a live demo
            </a>
            <a href="#pricing" className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50">
              View pricing
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2"><Check /> 24/7 coverage</div>
            <div className="flex items-center gap-2"><Check /> OpenTable integrated</div>
            <div className="flex items-center gap-2"><Check /> Minutes-based pricing</div>
          </div>
        </div>
        <div>
          <div className="relative rounded-3xl border border-gray-200 p-4 shadow-lg">
            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-sm font-semibold text-gray-800">Live Call Preview</div>
              <p className="mt-1 text-sm text-gray-600">Sample restaurant phone flow</p>
              <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
                {/* Replace this box with your embedded Vapi web widget if available */}
                Vapi web call widget goes here.
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Prefer phone? Call our demo line: <span className="font-medium text-gray-700">{DEMO_NUMBER}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Proof / Stats */}
      <Section className="py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat value="< 1s" label="Average answer time" />
          <Stat value="+12%" label="More reservations captured" />
          <Stat value="24/7" label="Always on" />
        </div>
      </Section>

      {/* Problem → Solution */}
      <Section id="value" className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Why restaurants choose {BRAND_NAME}</h2>
          <p className="mt-3 text-gray-600">
            Missed calls = empty tables. Your AI host answers instantly, books or updates
            reservations in OpenTable, and frees up staff during the rush.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Feature
            title="Never miss a call"
            desc="Answer 100% of calls automatically — even during dinner rush or after hours."
          />
          <Feature
            title="OpenTable native"
            desc="Reads availability, makes new reservations, and modifies/cancels existing bookings."
          />
          <Feature
            title="Lower front-of-house load"
            desc="Offload repetitive calls (hours, location, parking, menu). Staff focus on service."
          />
          <Feature
            title="Track ROI"
            desc="Get call summaries, recordings, and conversion metrics so you can see the revenue impact."
          />
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-sm font-semibold">1. Connect OpenTable</div>
            <p className="mt-2 text-sm text-gray-600">
              Share your OpenTable Restaurant ID and basic settings. We sync availability securely.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-sm font-semibold">2. Customize voice & FAQs</div>
            <p className="mt-2 text-sm text-gray-600">
              Choose greeting, hours, menu highlights, parking, and other common questions.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-sm font-semibold">3. Go live in minutes</div>
            <p className="mt-2 text-sm text-gray-600">
              We point your phone number to the AI host (or provision a new line) and you’re live.
            </p>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Feature title="Reservation booking" desc="Reads real-time availability and books directly into OpenTable." />
          <Feature title="Modify & cancel" desc="Finds existing reservations by phone/name and updates or cancels per policy." />
          <Feature title="After-hours coverage" desc="Capture reservations and messages while you sleep — no voicemail black hole." />
          <Feature title="Multilingual" desc="Serve guests in multiple languages (English/Spanish to start)." />
          <Feature title="Smart FAQs" desc="Answers hours, directions, parking, menu, dietary options, private dining info, and more." />
          <Feature title="Analytics & recordings" desc="See call counts, durations, conversions, and listen back to calls for QA." />
        </div>
      </Section>

      {/* Analytics Snapshot */}
      <Section className="py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Know what your phone line is doing</h3>
            <p className="mt-3 text-gray-600">
              A simple dashboard shows total calls, bookings made, peak hours, and missed-call recapture. Export data and share with managers.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><Check /> Calls by hour/day</li>
              <li className="flex items-start gap-2"><Check /> Reservation conversions & edits</li>
              <li className="flex items-start gap-2"><Check /> First-response time</li>
              <li className="flex items-start gap-2"><Check /> Recordings & transcripts</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 p-4 shadow-sm">
            <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
              <div className="text-sm font-semibold text-gray-700">Dashboard Preview</div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-gray-600">
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl font-semibold">1,248</div>
                  <div>Total calls</div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl font-semibold">312</div>
                  <div>Reservations booked</div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl font-semibold">42%</div>
                  <div>Conversion rate</div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl font-semibold">0.7s</div>
                  <div>Avg. answer time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-gray-600">Start small and scale as you grow. No contracts. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <PricingCard
            tier="Starter"
            price="$99"
            description="Best for single-location restaurants getting started with AI answering."
            features={[
              "500 included minutes",
              "1 phone number",
              "OpenTable integration",
              "Basic analytics"
            ]}
            ctaText="Start with Starter"
          />
          <PricingCard
            tier="Pro"
            price="$249"
            description="For busy restaurants wanting deeper analytics and recordings."
            features={[
              "2,000 included minutes",
              "Recordings & transcripts",
              "Advanced analytics & exports",
              "Priority support"
            ]}
            ctaText="Upgrade to Pro"
            highlighted
          />
          <PricingCard
            tier="Enterprise"
            price="Custom"
            description="Multi-location groups with onboarding, SSO, and dedicated support."
            features={[
              "Unlimited locations",
              "Custom provisioning",
              "SLA & onboarding",
              "Dedicated success manager"
            ]}
            ctaText="Talk to sales"
          />
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">
          Overages billed per-minute. Volume discounts available.
        </p>
      </Section>

      {/* Demo CTA */}
      <Section className="py-16">
        <div className="rounded-3xl bg-gray-900 px-8 py-12 text-white">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold">Hear it in action</h3>
              <p className="mt-2 text-white/80">
                Call the demo line <span className="font-semibold text-white">{DEMO_NUMBER}</span> or click below to book a live walkthrough.
              </p>
            </div>
            <div className="flex gap-3">
              <a href={CALENDLY_URL} className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:opacity-90">
                Book a demo
              </a>
              <a href="#hero" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                Try web demo
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FAQItem
            q="Do you integrate with OpenTable?"
            a="Yes. We use your OpenTable Restaurant ID to read availability, place new reservations, and modify or cancel existing ones per your policy."
          />
          <FAQItem
            q="Can we keep our current phone number?"
            a="Yes. We can forward your existing number to the AI host or provision a new number and migrate later."
          />
          <FAQItem
            q="What languages are supported?"
            a="English and Spanish at launch, with more languages available on request."
          />
          <FAQItem
            q="How fast is setup?"
            a="Most locations go live the same day. If you have multiple venues, onboarding can be done in under a week."
          />
          <FAQItem
            q="What about PCI/PHI compliance?"
            a="We do not accept credit cards over the phone. For special cases, we can route to a human line. Recordings can be disabled as needed."
          />
          <FAQItem
            q="How do you price minutes?"
            a="Each plan includes a minute bundle. Overages are charged per-minute monthly. Volume discounts available for groups."
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <Section className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
