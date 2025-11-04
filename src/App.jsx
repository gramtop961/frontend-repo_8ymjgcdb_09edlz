import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#07090D]/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500 font-bold">M</span>
          <span className="text-sm font-semibold tracking-wide">Medva</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#value" className="hover:text-white">Why Medva</a>
          <a href="#cta" className="hover:text-white">Pricing</a>
        </nav>
        <a href="#cta" className="hidden rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 md:inline-block">Get started</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#07090D] font-inter">
      <Header />
      <main>
        <Hero />
        <div id="value">
          <ValueProps />
        </div>
        <HowItWorks />
        <CTASection />
      </main>
      <footer className="border-t border-white/10 bg-[#07090D] py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Medva. All rights reserved. HIPAA-compliant virtual assistants for healthcare.
      </footer>
    </div>
  );
}
