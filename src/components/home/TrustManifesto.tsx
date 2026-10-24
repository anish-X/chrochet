import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ShieldCheck, HeartHandshake, Sparkles, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export const TrustManifesto: React.FC = () => {
  const { navigateTo } = useShop();

  const trustPillars = [
    {
      icon: ShieldCheck,
      title: 'Physically Impossible for Machines',
      badge: 'Zero Automation',
      description: 'Unlike commercial sweaters which are knitted on high-speed industrial knitting machines, crochet stitches require looping back through prior active loops with an open hook. No mechanical loom in the world has ever solved this. When you hold crochet, you are holding the undeniable work of human hands.',
    },
    {
      icon: HeartHandshake,
      title: 'Makers Keep 80–85% of Retail',
      badge: 'Economic Dignity',
      description: 'Traditional middlemen in Nepal take 60–70% of craft revenues. At Sefung Crochet, creators set their own prices and receive the vast majority of every sale, paid out weekly via eSewa or bank transfer to fuel independent financial freedom.',
    },
    {
      icon: Sparkles,
      title: 'Central Studio Quality Inspection',
      badge: 'Jhamsikhel Lab',
      description: 'Every completed piece from Bhaktapur, Patan, or Pokhara arrives at our Kathmandu studio for yarn tension testing, seam security verification, and gentle cedar steaming before being packed in compostable packaging.',
    },
    {
      icon: RefreshCw,
      title: '7-Day Handcrafted Guarantee',
      badge: 'Risk-Free Discovery',
      description: 'We know buying handmade textiles online requires faith. If a piece does not drape the way you envisioned or the dimensions do not suit your space, our WhatsApp concierge arranges a hassle-free exchange or full refund.',
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-linen-100/70 border-b border-linen-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            The Sefung Crochet Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso tracking-tight">
            Why handmade crochet matters — and why you can trust Sefung Crochet.
          </h2>
          <p className="text-sm sm:text-base text-umber leading-relaxed font-light">
            In an era of disposable mass-produced polyester, crochet represents a quiet rebellion: slow, tactile, biodegradable, and inherently human.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-linen-300 shadow-craft-sm hover:shadow-craft-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-linen-200/80 text-terracotta-600 flex items-center justify-center group-hover:bg-terracotta-50 group-hover:text-terracotta-700 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-sage-800 bg-sage-50 px-2.5 py-1 rounded-full border border-sage-200 font-medium">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-umber mt-2.5 leading-relaxed font-light">
                  {pillar.description}
                </p>

                <div className="mt-4 pt-4 border-t border-linen-200 flex items-center text-[11px] font-mono text-terracotta-600 space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified by Sefung Crochet Quality Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 rounded-2xl bg-espresso text-parchment flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-white">
              Are you a crochet creator living anywhere in Nepal?
            </h4>
            <p className="text-xs text-stone-300 max-w-xl">
              We handle the studio photography, customer support, and Pathao/courier logistics so you can focus on making.
            </p>
          </div>
          <button
            onClick={() => navigateTo('sell')}
            className="btn-tactile px-5 py-2.5 bg-honey-500 hover:bg-honey-400 text-espresso font-semibold text-xs rounded-xl shadow-craft-sm transition-colors flex items-center space-x-1.5 flex-shrink-0"
          >
            <span>Read Creator Requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

