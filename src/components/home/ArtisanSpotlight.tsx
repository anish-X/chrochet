import React, { useState } from 'react';
import { artisans } from '../../data/artisans';
import { products } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { useShop } from '../../context/ShopContext';
import { MapPin, Award, Clock, ArrowRight, Heart, Sparkles } from 'lucide-react';

export const ArtisanSpotlight: React.FC = () => {
  const { navigateTo } = useShop();
  const [selectedArtisanId, setSelectedArtisanId] = useState(artisans[0].id);

  const currentArtisan = artisans.find(a => a.id === selectedArtisanId) || artisans[0];
  const artisanProducts = products.filter(p => p.artisanId === currentArtisan.id);

  return (
    <section className="py-16 sm:py-24 bg-linen-100/60 border-b border-linen-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            Maker Provenance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso tracking-tight mt-1">
            Meet the hands behind the hook.
          </h2>
          <p className="text-xs sm:text-sm text-umber mt-2 font-light leading-relaxed">
            Every creation on Sefung Crochet bears the signature, location, and story of an independent Nepali artisan. We believe you should know exactly who you are supporting.
          </p>
        </div>

        {/* Artisan Selector Pills */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 mb-8">
          {artisans.slice(0, 3).map((artisan) => {
            const isSelected = artisan.id === currentArtisan.id;
            return (
              <button
                key={artisan.id}
                onClick={() => setSelectedArtisanId(artisan.id)}
                className={`btn-tactile flex items-center space-x-3 p-2 pr-4 rounded-full border transition-all ${
                  isSelected
                    ? 'bg-white border-terracotta-500 shadow-craft-sm ring-1 ring-terracotta-500'
                    : 'bg-linen-200/70 border-linen-300 hover:bg-white text-espresso'
                }`}
              >
                <img
                  src={artisan.avatar}
                  alt={artisan.name}
                  className="w-9 h-9 rounded-full object-cover border border-linen-300"
                />
                <div className="text-left">
                  <span className="text-xs font-bold text-espresso block">
                    {artisan.name}
                  </span>
                  <span className="text-[10px] font-mono text-umber-muted block">
                    {artisan.district}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Artisan Stage */}
        <div className="bg-white rounded-3xl border border-linen-300 shadow-craft-md p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Artisan Avatar & Quote */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-linen-200 shadow-craft-sm">
                <img
                  src={currentArtisan.avatar}
                  alt={currentArtisan.name}
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-linen-300 shadow-sm">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-terracotta-600 font-semibold flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {currentArtisan.location}
                    </span>
                    <span className="font-mono text-[11px] text-umber font-medium">
                      {currentArtisan.yearsExperience} yrs craft
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Artisan Details & Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-honey-600 font-bold block mb-1">
                  Master Artisan Profile
                </span>
                <div className="flex items-baseline space-x-3">
                  <h3 className="font-serif text-3xl font-bold text-espresso">
                    {currentArtisan.name}
                  </h3>
                  {currentArtisan.nepaliName && (
                    <span className="font-serif text-lg text-umber-muted font-normal">
                      {currentArtisan.nepaliName}
                    </span>
                  )}
                </div>
                <span className="inline-block mt-2 px-3 py-1 bg-sage-50 text-sage-800 text-xs font-mono rounded-full border border-sage-200">
                  Specialty: {currentArtisan.specialty}
                </span>
              </div>

              {/* Quote block */}
              <blockquote className="p-4 sm:p-5 rounded-2xl bg-linen-100/80 border-l-4 border-terracotta-500 text-espresso text-sm sm:text-base italic leading-relaxed font-serif">
                "{currentArtisan.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
                {currentArtisan.bio}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-parchment border border-linen-300">
                  <span className="text-[10px] text-umber-muted uppercase block">Total Creations</span>
                  <span className="font-bold text-espresso text-sm">{currentArtisan.totalCreations} pieces</span>
                </div>
                <div className="p-3 rounded-xl bg-parchment border border-linen-300">
                  <span className="text-[10px] text-umber-muted uppercase block">Rating</span>
                  <span className="font-bold text-terracotta-600 text-sm">★ {currentArtisan.rating} / 5.0</span>
                </div>
                <div className="p-3 rounded-xl bg-parchment border border-linen-300 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-umber-muted uppercase block">Commission Status</span>
                  <span className="font-bold text-sage-700 text-sm">Open for Custom</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Artisan's pieces */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-serif text-xl font-bold text-espresso">
              Current pieces hand-hooked by {currentArtisan.name}
            </h4>
            <button
              onClick={() => navigateTo('shop')}
              className="text-xs font-mono text-terracotta-600 hover:text-terracotta-800 flex items-center space-x-1 font-semibold"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisanProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

