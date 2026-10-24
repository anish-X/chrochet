import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Heart, ShieldCheck, Sparkles, MapPin, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="py-12 sm:py-20 bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            The Sefung Crochet Manifesto
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-tight leading-tight">
            We exist to celebrate the hands that slow the world down.
          </h1>
          <p className="text-sm sm:text-base text-umber leading-relaxed font-light">
            Founded in Kathmandu, Sefung Crochet is a bridge between Nepal's extraordinary independent fiber artisans and homes that cherish intentional, heirloom objects.
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
                In craft and culture, crochet is an art of quiet patience and boundless human imagination. In nature and life, beauty emerges stitch by stitch, loop by loop, through mindful dedication and devotion to detail.
              </p>
              <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
                Our crochet creators work in this timeless spirit. Tucked inside living rooms and sunlit verandas across Bhaktapur, Patan, and Pokhara, each artisan loops thousands of tiny slip-stitches and treble knots. Sefung Crochet is their shared home — a place where their labor is given dignity, fair economic reward, and a worldwide audience.
              </p>

              <div className="pt-2 flex items-center space-x-3 text-xs font-mono text-terracotta-700">
                <span className="w-2 h-2 rounded-full bg-terracotta-500" />
                <span>Zero middlemen. 80%+ direct to creators.</span>
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
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Most consumers don't realize this: when fast-fashion stores sell "crochet" sweaters, they are either exploiting undocumented workers or selling faux-crochet machine warp-knits.
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Because true crochet requires looping yarn around a hook and pulling it through an active stitch in three spatial dimensions, mechanical factory looms physically cannot replicate it. When you purchase a crochet cardigan, tote bag, or amigurumi toy from Sefung Crochet, you hold an undeniable human achievement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-10 border-t border-espresso-soft text-xs font-mono">
            <div className="space-y-1">
              <span className="text-honey-400 block font-bold">Industrial Knitting:</span>
              <p className="text-stone-400 text-[11px]">Automated by multi-needle computer beds in seconds.</p>
            </div>
            <div className="space-y-1">
              <span className="text-terracotta-400 block font-bold">True Crochet:</span>
              <p className="text-stone-300 text-[11px]">Requires 100% human hand-eye coordination for every single knot.</p>
            </div>
            <div className="space-y-1">
              <span className="text-sage-300 block font-bold">The Sefung Guarantee:</span>
              <p className="text-stone-400 text-[11px]">Zero industrial automation. Every loop signed by the artisan.</p>
            </div>
          </div>
        </div>

        {/* Narrative Section 3: Studio & Ethics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-linen-300 shadow-craft-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso">
              The Jhamsikhel Studio Hub
            </h3>
            <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
              Our studio in Patan serves as the central quality check, photography, and packaging heart of Sefung Crochet. Here, pieces from across Nepal are steamed, checked for tension consistency, and prepared for doorstep courier dispatch.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-linen-300 shadow-craft-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso">
              Natural Fibers & Zero Plastic
            </h3>
            <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
              We guide our creator guild away from cheap acrylic plastic yarns toward breathable organic combed cotton, bamboo silk, and highland Himalayan wool. All shipments are packed in unbleached paper boxes without plastic tape.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="font-serif text-2xl font-bold text-espresso">
            Join us in honoring Nepal's fiber artisans.
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigateTo('shop')}
              className="btn-tactile px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold rounded-xl shadow-craft-sm"
            >
              Explore Our Collection
            </button>
            <button
              onClick={() => navigateTo('sell')}
              className="btn-tactile px-6 py-3 bg-white text-espresso hover:bg-linen-100 text-xs font-semibold rounded-xl border border-linen-300"
            >
              Sell With Sefung Crochet
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

