import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, DollarSign, Stethoscope } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen w-full overflow-hidden bg-[#07090D] text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090Dbf] via-[#07090D66] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 sm:pt-28 md:items-start lg:px-8 lg:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm ring-1 ring-white/15">
          <Shield size={16} /> HIPAA-compliant • Qualified offshore talent
        </span>

        <h1 className="max-w-2xl text-center md:text-left text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
          Medva — Virtual medical assistants that cut costs, not quality.
        </h1>

        <p className="mt-5 max-w-2xl text-center md:text-left text-base sm:text-lg text-white/80">
          Founded by doctors, for doctors. Scale your practice with vetted, HIPAA-compliant
          virtual assistants who handle admin, billing, and patient coordination — so you can
          focus on care.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            Get a custom quote
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            How it works
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-white/70">
          <div className="inline-flex items-center gap-2">
            <DollarSign size={18} /> Up to 60% savings
          </div>
          <div className="inline-flex items-center gap-2">
            <Shield size={18} /> HIPAA compliant
          </div>
          <div className="inline-flex items-center gap-2">
            <Stethoscope size={18} /> Doctor-led team
          </div>
        </div>
      </div>
    </section>
  );
}
