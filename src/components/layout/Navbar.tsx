import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  MapPin
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    navigateTo, 
    cartCount, 
    setCartOpen, 
    wishlist,
    searchQuery, 
    setSearchQuery 
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop Catalog' },
    { id: 'sell', label: 'Sell With Us', badge: 'Artisans' },
    { id: 'about', label: 'Our Story' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact & Studio' },
  ];

  const handleNavClick = (id: string) => {
    navigateTo(id);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('shop');
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-espresso text-parchment-200 text-xs py-2 px-4 border-b border-espresso-soft">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-honey-400 animate-pulse"></span>
            <span className="font-mono tracking-wide text-honey-200">NEPAL'S HANDMADE CROCHET GUILD</span>
            <span className="hidden md:inline text-umber-subtle">•</span>
            <span className="hidden md:inline text-stone-300">Zero machine stitches. 100% human-hooked across Kathmandu, Patan & Pokhara.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:flex items-center text-stone-300 font-mono text-[11px]">
              <MapPin className="w-3 h-3 mr-1 text-terracotta-400" />
              Jhamsikhel Studio Open
            </span>
            <button 
              onClick={() => navigateTo('sell')}
              className="text-honey-400 hover:text-honey-200 font-medium transition-colors flex items-center group text-[11px] sm:text-xs"
            >
              <span>Are you a creator?</span>
              <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-parchment/95 backdrop-blur-md border-b border-linen-300 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Mobile hamburger & Desktop Nav */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="lg:hidden p-2 text-espresso hover:text-terracotta-600 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-150 rounded-lg group ${
                        isActive 
                          ? 'text-terracotta-600 font-semibold' 
                          : 'text-espresso/80 hover:text-espresso hover:bg-linen-200/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-sage-100 text-sage-700 rounded-full border border-sage-200">
                          {item.badge}
                        </span>
                      )}
                      {isActive && (
                        <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-terracotta-500 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Center: Brand Mark (Editorial & Distinctive) */}
            <div className="flex-1 flex justify-center lg:flex-initial">
              <button 
                onClick={() => navigateTo('home')}
                className="text-left group flex items-center space-x-2.5 focus:outline-none"
              >
                <div className="w-9 h-9 rounded-full bg-terracotta-500 text-parchment flex items-center justify-center shadow-craft-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-terracotta-600">
                  {/* Stylized geometric yarn loop / honeybee motif */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8" strokeDasharray="3 2" />
                    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                    <path d="M12 4v2" />
                    <path d="M12 18v2" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso transition-colors group-hover:text-terracotta-700">
                      SEFUNG CROCHET
                    </span>
                    <span className="text-[11px] font-mono text-terracotta-500 uppercase font-semibold">
                      .np
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-umber-muted">
                    सेफुङ • Nepal Handmade
                  </span>
                </div>
              </button>
            </div>

            {/* Right: Actions (Search, Wishlist, Bag) */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Toggle */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search bags, tops, yarn..."
                      className="w-40 sm:w-60 px-3 py-1.5 text-xs bg-white border border-linen-400 rounded-full focus:outline-none focus:ring-1 focus:ring-terracotta-500 shadow-craft-sm"
                      autoFocus
                    />
                    <button 
                      type="button" 
                      onClick={() => setSearchOpen(false)}
                      className="ml-1 p-1 text-umber-muted hover:text-espresso"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-espresso/80 hover:text-espresso hover:bg-linen-200/70 rounded-full transition-colors"
                    aria-label="Open search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Wishlist */}
              <button
                onClick={() => {
                  navigateTo('shop');
                }}
                className="relative p-2 text-espresso/80 hover:text-espresso hover:bg-linen-200/70 rounded-full transition-colors"
                aria-label={`Wishlist with ${wishlist.length} items`}
                title="Saved Creations"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 text-[10px] font-mono bg-sage-600 text-white flex items-center justify-center rounded-full font-bold">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setCartOpen(true)}
                className="btn-tactile relative flex items-center space-x-2 bg-espresso text-parchment hover:bg-espresso-light px-3.5 py-2 rounded-full shadow-craft-sm transition-all text-xs font-medium"
                aria-label={`Shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 text-honey-300" />
                <span className="hidden sm:inline font-mono">Bag</span>
                <span className="w-5 h-5 bg-terracotta-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold font-mono">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-linen-300 bg-parchment px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="p-2 mb-2 bg-linen-200/80 rounded-lg flex items-center justify-between">
              <span className="text-xs text-umber font-mono">Destination: Nepal Handmade</span>
              <span className="text-[11px] font-semibold text-terracotta-600">Jhamsikhel Studio</span>
            </div>

            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-terracotta-50 text-terracotta-700 font-semibold'
                      : 'text-espresso hover:bg-linen-200'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-sage-100 text-sage-800 rounded-full border border-sage-200">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <ArrowRight className="w-4 h-4 text-umber-muted" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-linen-300/80 flex flex-col space-y-2">
              <button
                onClick={() => {
                  navigateTo('sell');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-4 bg-terracotta-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center space-x-2 shadow-craft-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join Sefung Crochet as an Artisan</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

