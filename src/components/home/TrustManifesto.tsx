import React from "react";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const TrustManifesto: React.FC = () => {

  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Physically Impossible for Machines",
      badge: "Zero Automation",
      description:
        "Unlike commercial sweaters which are knitted on high-speed industrial knitting machines, crochet stitches require looping back through prior active loops with an open hook. No mechanical loom in the world has ever solved this. When you hold crochet, you are holding the undeniable work of human hands.",
    },
    {
      icon: Sparkles,
      title: "Quality You Can Trust",
      badge: "Quality Assured",
      description:
        "Every piece is carefully reviewed by Sefung Crochet to ensure good quality, thoughtful craftsmanship, and attention to detail before it reaches you.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-linen-100/70 border-b border-linen-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-sage-700 font-semibold">
            The Sefung Crochet Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso tracking-tight">
            Why handmade crochet matters, and why you can trust Sefung Crochet.
          </h2>
          <p className="text-sm sm:text-base text-umber leading-relaxed font-light">
            In a world of disposable, mass produced polyester, crochet offers a
            more thoughtful choice. It is slow, tactile, and deeply human,
            celebrating the beauty of making things with care.
          </p>
        </div>

        {/* 2 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-linen-300 shadow-craft-sm hover:shadow-craft-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-linen-200/80 text-sage-700 flex items-center justify-center group-hover:bg-sage-50 group-hover:text-sage-800 transition-colors">
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

                <div className="mt-4 pt-4 border-t border-linen-200 flex items-center text-[11px] font-mono text-sage-700 space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified by Sefung Crochet Quality Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
