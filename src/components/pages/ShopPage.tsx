import React, { useState, useMemo } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { useShop } from '../../context/ShopContext';
import { Category } from '../../types';
import { 
  Filter, 
  X, 
  SlidersHorizontal, 
  Search, 
  Sparkles, 
  RefreshCcw,
  Check
} from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useShop();

  const [priceRange, setPriceRange] = useState<number>(6000);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [readyToShipOnly, setReadyToShipOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Creations' },
    { id: 'wearables', label: 'Wearables & Tops' },
    { id: 'bags', label: 'Bags & Totes' },
    { id: 'home', label: 'Home Living & Coasters' },
    { id: 'amigurumi', label: 'Amigurumi & Nursery' },
    { id: 'botanicals', label: 'Botanicals & Stems' },
  ];

  const locations = [
    'Bhaktapur',
    'Kathmandu',
    'Lalitpur',
    'Kaski'
  ];

  const toggleLocation = (loc: string) => {
    setSelectedLocations(prev => 
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange(6000);
    setSelectedLocations([]);
    setReadyToShipOnly(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Price
      if (product.price > priceRange) {
        return false;
      }
      // Location
      if (selectedLocations.length > 0 && !selectedLocations.includes(product.artisan.district)) {
        return false;
      }
      // Ready to ship
      if (readyToShipOnly && !product.readyToShip) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesTags = product.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, priceRange, selectedLocations, readyToShipOnly, searchQuery, sortBy]);

  const hasActiveFilters = selectedCategory !== 'all' || 
    priceRange < 6000 || 
    selectedLocations.length > 0 || 
    readyToShipOnly || 
    searchQuery.trim() !== '';

  return (
    <div className="py-10 sm:py-16 bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="mb-10 pb-8 border-b border-linen-300">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
              Curated Catalog
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-tight mt-1">
              Hand-Hooked in Nepal
            </h1>
            <p className="text-xs sm:text-sm text-umber mt-2 font-light leading-relaxed">
              Explore conscious wearables, granny square carryalls, and heirloom keepsakes created stitch-by-stitch by independent artisans across the Kathmandu Valley and Pokhara.
            </p>
          </div>
        </div>

        {/* Top Control Bar: Search & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-linen-300 shadow-craft-sm">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-umber-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title, yarn, or maker..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-linen-100/70 border border-linen-300 rounded-xl focus:outline-none focus:border-terracotta-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-umber-muted hover:text-espresso"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden btn-tactile px-3.5 py-2 bg-linen-200 text-espresso text-xs font-semibold rounded-xl flex items-center space-x-1.5"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-terracotta-500" />
              )}
            </button>

            {/* Sort Selector */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-mono text-umber-muted hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-linen-100 border border-linen-300 rounded-xl text-xs text-espresso font-medium focus:outline-none focus:border-terracotta-500"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">Newest Drops</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Layout Grid: Sidebar Filters + Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-linen-300 shadow-craft-sm space-y-6 sticky top-28">
              
              <div className="flex items-center justify-between pb-3 border-b border-linen-200">
                <span className="font-serif text-sm font-bold text-espresso flex items-center space-x-1.5">
                  <Filter className="w-4 h-4 text-terracotta-500" />
                  <span>Refine Catalog</span>
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] font-mono text-terracotta-600 hover:text-terracotta-800 flex items-center space-x-1"
                  >
                    <RefreshCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-umber-muted mb-2.5 font-bold">
                  Category
                </h4>
                <div className="space-y-1">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                          isSelected
                            ? 'bg-terracotta-50 text-terracotta-700 font-semibold'
                            : 'text-espresso/80 hover:bg-linen-100 hover:text-espresso'
                        }`}
                      >
                        <span>{cat.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-terracotta-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Max Price Range Slider */}
              <div className="pt-2 border-t border-linen-200">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-umber-muted font-bold">
                    Max Price
                  </h4>
                  <span className="text-xs font-mono font-bold text-terracotta-700">
                    NPR {priceRange.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={6000}
                  step={200}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-terracotta-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-umber-muted mt-1">
                  <span>NPR 1,000</span>
                  <span>NPR 6,000</span>
                </div>
              </div>

              {/* Region */}
              <div className="pt-2 border-t border-linen-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-umber-muted mb-2.5 font-bold">
                  Craft Region
                </h4>
                <div className="space-y-1.5">
                  {locations.map((loc) => {
                    const isChecked = selectedLocations.includes(loc);
                    return (
                      <label
                        key={loc}
                        className="flex items-center space-x-2 text-xs text-espresso cursor-pointer hover:text-terracotta-600"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleLocation(loc)}
                          className="rounded border-linen-400 text-terracotta-500 focus:ring-terracotta-500 accent-terracotta-500"
                        />
                        <span>{loc} District</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Ready to ship toggle */}
              <div className="pt-2 border-t border-linen-200">
                <label className="flex items-center space-x-2 text-xs text-espresso cursor-pointer">
                  <input
                    type="checkbox"
                    checked={readyToShipOnly}
                    onChange={(e) => setReadyToShipOnly(e.target.checked)}
                    className="rounded border-linen-400 text-terracotta-500 focus:ring-terracotta-500 accent-terracotta-500"
                  />
                  <span className="font-medium">Ready to Ship Only</span>
                </label>
                <span className="text-[10px] font-mono text-sage-700 block mt-0.5 ml-5">
                  Dispatched in 24 hrs
                </span>
              </div>

            </div>
          </aside>

          {/* Main Product Catalog Display */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Result count & active chips */}
            <div className="flex items-center justify-between text-xs text-umber">
              <span>
                Showing <strong className="text-espresso font-mono">{filteredProducts.length}</strong> handcrafted pieces
              </span>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-terracotta-600 hover:text-terracotta-800 font-mono text-[11px]"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-linen-300 p-12 text-center space-y-4 shadow-craft-sm">
                <div className="w-14 h-14 rounded-full bg-linen-200 flex items-center justify-center mx-auto text-umber-muted">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso">
                  No handcrafted pieces match your criteria
                </h3>
                <p className="text-xs text-umber max-w-sm mx-auto">
                  Try broadening your price limit, unchecking district filters, or searching for broader terms like "cotton" or "tote".
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-terracotta-500 text-white text-xs font-semibold rounded-full shadow-craft-sm hover:bg-terracotta-600 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-espresso/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />

          <div className="relative ml-auto w-full max-w-xs bg-parchment h-full shadow-2xl p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-linen-300">
              <h3 className="font-serif text-lg font-bold text-espresso">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1">
                <X className="w-5 h-5 text-umber" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-umber-muted mb-2">Category</h4>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setMobileFiltersOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${
                      selectedCategory === cat.id ? 'bg-terracotta-500 text-white' : 'text-espresso'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-linen-300 space-y-2">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-2.5 bg-espresso text-parchment text-xs font-semibold rounded-xl"
              >
                Apply Filters ({filteredProducts.length})
              </button>
              <button
                onClick={() => {
                  resetFilters();
                  setMobileFiltersOpen(false);
                }}
                className="w-full py-2 text-xs text-umber"
              >
                Reset All
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

