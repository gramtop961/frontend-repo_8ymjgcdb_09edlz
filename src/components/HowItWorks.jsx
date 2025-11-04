import React from 'react';
import { CheckCircle, FileText, Users, Rocket } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Define your workflow',
    desc: 'We map responsibilities, access, and security protocols tailored to your practice.',
  },
  {
    icon: Users,
    title: 'Match with specialists',
    desc: 'We handpick assistants with relevant medical experience and verify credentials.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance onboarding',
    desc: 'BAA, HIPAA training, and secure tooling—everything required to stay compliant.',
  },
  {
    icon: Rocket,
    title: 'Go live and scale',
    desc: 'Start with one role, then scale seamlessly across functions as your needs grow.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="w-full bg-[#0D1218] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-3 text-white/70">A guided process from discovery to launch—fast, secure, and predictable.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{idx + 1}. {title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
