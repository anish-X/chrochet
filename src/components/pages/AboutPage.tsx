import React from "react";
import { useShop } from "../../context/ShopContext";
import { Heart, ShieldCheck, Sparkles, MapPin, ArrowRight } from "lucide-react";

export const AboutPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="py-12 sm:py-20 bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Story Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-sage-700 font-semibold">
            The Sefung Crochet Manifesto
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-tight leading-tight">
            We believe handmade deserves to be trusted, cherished, and
            celebrated.
          </h1>
          <p className="text-sm sm:text-base text-umber leading-relaxed font-light">
            Sefung Crochet brings together beautiful creations from talented
            artisans across Nepal, offering a thoughtful collection built on
            trust, quality, and variety. Every piece is chosen with care, so you
            can find something truly special.
          </p>
        </div>

        {/* Narrative Section 1: The Spirit of Sefung Crochet */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-linen-300 shadow-craft-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-wider text-honey-600 font-bold">
                Origin Story
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-espresso">
                The Spirit of Sefung Crochet
              </h2>
              <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
                Crochet is an art of patience, creativity, and care. Each stitch
                reflects the beauty of thoughtful craftsmanship and the joy of
                creating something by hand.
              </p>
              <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
                From cozy homes to sunlit verandas across Nepal, talented
                artisans bring their ideas to life, one stitch at a time. Sefung
                Crochet brings these creations together, celebrating the people
                behind them and connecting their work with crochet lovers who
                value trust, quality, and variety.
              </p>

              <div className="pt-2 flex items-center space-x-3 text-xs font-mono text-sage-700">
                <span className="w-2 h-2 rounded-full bg-sage-600" />
                <span>100% handmade in Nepal.</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-square bg-linen-200 border border-linen-300 shadow-craft-sm">
                <img
                  src="/images/products/cherry-blossom-jar.jpg"
                  alt="Delicate handmade crochet blossoms and artisanal craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section 2: The Physical Truth of Crochet */}
        <div className="bg-espresso text-parchment rounded-3xl p-8 sm:p-14 border border-espresso-soft shadow-craft-lg mb-16">
          <div className="max-w-3xl space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-honey-400 font-bold">
              Textile Science
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The only craft machines cannot touch.
            </h2>
            <p className="text-xs sm:text-sm text-espresso-subtle leading-relaxed font-light">
              Most consumers don't realize this: when fast-fashion stores sell
              "crochet" sweaters, they are either exploiting undocumented
              workers or selling faux-crochet machine warp-knits.
            </p>
            <p className="text-xs sm:text-sm text-espresso-subtle leading-relaxed font-light">
              Because true crochet requires looping yarn around a hook and
              pulling it through an active stitch in three spatial dimensions,
              mechanical factory looms physically cannot replicate it. When you
              purchase a crochet cardigan, tote bag, or amigurumi toy from
              Sefung Crochet, you hold an undeniable human achievement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-10 border-t border-espresso-soft text-xs font-mono">
            <div className="space-y-1">
              <span className="text-honey-400 block font-bold">
                Industrial Knitting:
              </span>
              <p className="text-espresso-muted text-[11px]">
                Automated by multi-needle computer beds in seconds.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-terracotta-400 block font-bold">
                True Crochet:
              </span>
              <p className="text-espresso-subtle text-[11px]">
                Requires 100% human hand-eye coordination for every single knot.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sage-300 block font-bold">
                The Sefung Guarantee:
              </span>
              <p className="text-espresso-muted text-[11px]">
                Zero industrial automation. Every loop signed by the artisan.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="font-serif text-2xl font-bold text-espresso">
            Join us in honoring Nepal's fiber artisans.
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigateTo("shop")}
              className="btn-tactile px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white text-xs font-semibold rounded-xl shadow-craft-sm transition-colors"
            >
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
