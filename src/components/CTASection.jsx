import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="relative isolate w-full overflow-hidden bg-gradient-to-br from-cyan-600/20 via-blue-600/10 to-indigo-700/10 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.20),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get a tailored staffing plan</h2>
        <p className="mt-3 text-white/80">Tell us about your practice size and goals. We’ll send a custom proposal with roles, pricing, and timelines—no pressure.</p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Your work email"
            className="flex-1 rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            Request proposal <ArrowRight className="ml-2" size={18} />
          </button>
        </form>
        <p className="mt-3 text-xs text-white/60">By continuing you agree to our privacy policy. We’ll reach out within one business day.</p>
      </div>
    </section>
  );
}
