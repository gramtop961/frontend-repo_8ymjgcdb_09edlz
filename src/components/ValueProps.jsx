import React from 'react';
import { Shield, DollarSign, Headset, ClipboardCheck, CalendarCheck, FileCheck } from 'lucide-react';

const items = [
  {
    icon: DollarSign,
    title: 'Meaningful cost savings',
    desc: 'Reduce payroll and overhead by up to 60% without sacrificing patient experience.',
  },
  {
    icon: Shield,
    title: 'HIPAA compliance end-to-end',
    desc: 'Secure workflows, BAAs, documented protocols, and continuous training baked in.',
  },
  {
    icon: Headset,
    title: 'Patient-first communication',
    desc: 'Trained in clinical etiquette, empathy, and escalation paths set by your practice.',
  },
  {
    icon: ClipboardCheck,
    title: 'Admin + billing support',
    desc: 'Eligibility checks, charge entry, claims follow-up, AR, denial management, and more.',
  },
  {
    icon: CalendarCheck,
    title: 'Scheduling & coordination',
    desc: 'Referrals, recalls, authorizations, and pre-visit planning handled reliably.',
  },
  {
    icon: FileCheck,
    title: 'Doctor-led quality',
    desc: 'Founded by physicians with QA processes designed for medical workflows.',
  },
];

export default function ValueProps() {
  return (
    <section className="relative w-full bg-[#0B0F14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">The smarter way to staff your practice</h2>
          <p className="mt-3 text-white/70">Onshore standards. Offshore efficiency. Built for healthcare from day one.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
