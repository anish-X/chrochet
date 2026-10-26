import React, { useEffect, useRef } from "react";
import { useShop } from "../../context/ShopContext";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
  Clock,
  MapPin,
} from "lucide-react";
import gsap from "gsap";

export const HeroSection: React.FC = () => {
  const { navigateTo } = useShop();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-anim-item", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });

      gsap.from(".hero-card-anim", {
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power2.out",
        clearProps: "all",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-linen-300"
    >
      {/* Decorative soft ambient craft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-pink/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sage-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tagline Pill */}
            <div className="hero-anim-item inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-linen-200 border border-linen-300 text-xs text-espresso shadow-craft-sm">
              <span className="w-2 h-2 rounded-full bg-sage-600 animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px] text-sage-800 font-semibold">
                Nepal's Destination For Handmade Crochet
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-anim-item font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso tracking-tight leading-[1.12]">
              Every loop hooked by human hands. <br />
              <span className="text-sage-700 italic font-normal">
                Never by a machine.
              </span>
            </h1>

            {/* Subheading */}
            <p className="hero-anim-item text-base sm:text-lg text-umber leading-relaxed max-w-2xl font-light">
              Sefung Crochet is Nepal’s home for crochet lovers. Discover
              timeless wearables, cozy home accents, and unique handmade
              creations crafted with love by talented artisans from across
              Nepal.
            </p>

            {/* Action Buttons */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={() => navigateTo("shop")}
                className="btn-tactile px-7 py-4 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-sm rounded-2xl shadow-craft-md transition-all flex items-center justify-center space-x-2.5 group"
              >
                <span>Explore Curated Drops</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateTo("sell")}
                className="btn-tactile px-6 py-4 bg-white hover:bg-linen-200 text-espresso font-semibold text-sm rounded-2xl border border-linen-300 shadow-craft-sm transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-honey-500" />
                <span>Sell With Sefung Crochet</span>
              </button>
            </div>

            {/* Trust Pillars Checklist */}
            {/* <div className="hero-anim-item pt-6 border-t border-linen-300 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-umber">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Zero Factory Production</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-terracotta-500 flex-shrink-0" />
                <span>12–30 Hours per Piece</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-honey-600 flex-shrink-0" />
                <span>24h Kathmandu Delivery</span>
              </div>
            </div> */}
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-5 relative hero-card-anim">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Stage Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-craft-lg border-2 border-linen-300 bg-white">
                <img
                  src="/images/products/cardigan-heritage.jpg"
                  alt="Handmade crochet cardigan by Sefung Crochet artisan"
                  className="w-full h-[420px] object-cover object-center"
                />

                {/* Overlay Vignette and Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-honey-300">
                    Handcrafted Wearables
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-1">
                    "Patience you can wear."
                  </h3>
                  <p className="text-xs text-linen-200 mt-1">
                    The Patan Heritage Open-Stitch Cardigan.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Genuine Stitch Gauge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-parchment p-3.5 rounded-2xl shadow-craft-lift border border-linen-300 flex items-center space-x-3 max-w-[210px]">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/30 text-terracotta-700 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-brand-pink">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="7" strokeDasharray="3 2" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-umber-muted block">
                    Authenticity
                  </span>
                  <span className="text-xs font-bold text-espresso leading-tight block">
                    100% Impossible for Machines
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Material Standard */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-craft-lift border border-linen-300 flex items-center space-x-3 max-w-[230px]">
                <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-sage-200">
                  <Sparkles className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-umber-muted block">
                    Material Standard
                  </span>
                  <span className="text-xs font-semibold text-espresso leading-tight block">
                    100% Organic & Natural Fibers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
