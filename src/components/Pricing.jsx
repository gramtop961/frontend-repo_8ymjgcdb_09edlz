import React from 'react';
import { Shield, Cpu, Sparkles, Check } from 'lucide-react';

const plans = [
  {
    name: 'Core',
    tagline: 'Clinical core',
    description: 'Skilled medical virtual assistants for day-to-day clinical and admin operations.',
    price: 'from $10/hr',
    highlight: false,
    icon: Sparkles,
    features: [
      'Patient scheduling & recalls',
      'Eligibility & benefits verification',
      'Referrals & prior auth support',
      'Charge entry & claims follow-up',
      'Doctor-designed playbooks',
      'HIPAA training + BAA',
    ],
    cta: 'Start with Core',
  },
  {
    name: 'Elevate',
    tagline: 'AI-enhanced VAs',
    description: 'Human expertise amplified by AI tools for faster, more precise workflows.',
    price: 'from $14/hr',
    highlight: true,
    icon: Cpu,
    features: [
      'Everything in Core',
      'AI-assisted documentation',
      'Smart triage & routing',
      'Template-driven messaging',
      'Realtime QA suggestions',
      'Analytics dashboard',
    ],
    cta: 'Upgrade to Elevate',
  },
  {
    name: 'Fortress',
    tagline: 'Secure facility + AI',
    description: 'Highest security tier with supervised secure facilities and audited controls.',
    price: 'custom',
    highlight: false,
    icon: Shield,
    features: [
      'Everything in Elevate',
      'Supervised secure facility',
      'Role-based access controls',
      'Private network & device hardening',
      'Enhanced audit trails',
      'Quarterly compliance reviews',
    ],
    cta: 'Talk to sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#0A0E13] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Pricing that scales with your practice</h2>
          <p className="mt-3 text-white/70">Choose the level of capability and security that fits your current needs—upgrade anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                'relative flex flex-col rounded-2xl border bg-white/5 p-6',
                plan.highlight ? 'border-cyan-400/40 ring-2 ring-cyan-400/30' : 'border-white/10',
              ].join(' ')}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <plan.icon size={20} />
              </div>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-white/60">{plan.tagline}</p>
              <p className="mt-3 text-sm text-white/80">{plan.description}</p>
              <div className="mt-5 text-2xl font-semibold">{plan.price}</div>

              <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-white/80">
                {plan.features.map((f) => (
                  <li key={f} className="inline-flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={[
                  'mt-8 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition',
                  plan.highlight
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400'
                    : 'bg-white/10 text-white hover:bg-white/15',
                ].join(' ')}
              >
                {plan.cta}
              </a>

              {plan.highlight && (
                <div className="pointer-events-none absolute -top-3 right-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most popular
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
