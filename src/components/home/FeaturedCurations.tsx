import React, { useState } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { useShop } from '../../context/ShopContext';
import { Category } from '../../types';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedCurations: React.FC = () => {
  const { navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState<Category>('all');

  const categories: { id: Category; label: string; count: number }[] = [
    { id: 'all', label: 'All Curated Pieces', count: products.length },
    { id: 'wearables', label: 'Wearables & Tops', count: products.filter(p => p.category === 'wearables').length },
    { id: 'bags', label: 'Bags & Totes', count: products.filter(p => p.category === 'bags').length },
    { id: 'home', label: 'Home & Living', count: products.filter(p => p.category === 'home').length },
    { id: 'amigurumi', label: 'Baby Keepsakes', count: products.filter(p => p.category === 'amigurumi').length },
    { id: 'botanicals', label: 'Floral Stems', count: products.filter(p => p.category === 'botanicals').length },
  ];

  const filteredProducts = activeTab === 'all'
    ? products.slice(0, 8)
    : products.filter(p => p.category === activeTab);

  return (
    <section className="py-16 sm:py-24 bg-parchment border-b border-linen-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
                Featured Drops
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-honey-500" />
              <span className="text-xs font-mono text-umber-muted">
                Handcrafted in Nepal
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso tracking-tight">
              Small-batch creations, hooked to order.
            </h2>
            <p className="text-xs sm:text-sm text-umber max-w-xl">
              Each piece is made individually with certified organic cotton, bamboo silk, or Himalayan wool. No mass inventories.
            </p>
          </div>

          <button
            onClick={() => navigateTo('shop', undefined, activeTab)}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-semibold font-mono uppercase tracking-wider text-terracotta-600 hover:text-terracotta-800 transition-colors group"
          >
            <span>Explore Entire Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn-tactile px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-terracotta-500 text-white shadow-craft-sm font-semibold'
                    : 'bg-linen-200/80 text-espresso hover:bg-linen-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-linen-300 text-umber'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigateTo('shop', undefined, 'all')}
            className="btn-tactile inline-flex items-center space-x-2 px-8 py-3.5 bg-espresso hover:bg-espresso-light text-parchment text-xs font-semibold rounded-full shadow-craft-sm transition-all"
          >
            <span>Browse All Available Creations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

