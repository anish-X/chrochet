import React from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, Eye, ShoppingBag, Clock, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct 
  } = useShop();

  const isFavorited = isInWishlist(product.id);

  return (
    <div className="craft-card rounded-2xl overflow-hidden flex flex-col group relative bg-white">
      
      {/* Top Artisan Provenance Tag */}
      <div className="p-3 bg-linen-100/90 border-b border-linen-200 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2 min-w-0">
          <img
            src={product.artisan.avatar}
            alt={product.artisan.name}
            className="w-5 h-5 rounded-full object-cover border border-linen-400 flex-shrink-0"
          />
          <span className="text-[11px] font-medium text-espresso truncate">
            {product.artisan.name}
          </span>
          <span className="text-[10px] font-mono text-umber-muted hidden sm:inline">
            • {product.artisan.district}
          </span>
        </div>

        <span className="text-[10px] font-mono text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-full border border-terracotta-200 flex-shrink-0 flex items-center space-x-1">
          <Clock className="w-2.5 h-2.5 mr-0.5" />
          <span>{product.hoursToMake}h hooked</span>
        </span>
      </div>

      {/* Product Image Stage */}
      <div className="relative aspect-square overflow-hidden bg-linen-200 cursor-pointer" onClick={() => navigateTo('product', product.id)}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase font-bold bg-honey-500 text-espresso-DEFAULT rounded-full shadow-craft-sm">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase font-bold bg-sage-600 text-white rounded-full shadow-craft-sm">
              New Drop
            </span>
          )}
          {product.readyToShip ? (
            <span className="px-2.5 py-0.5 text-[9px] font-mono font-medium bg-white/90 text-sage-800 rounded-full backdrop-blur-sm border border-sage-200">
              Ready to Ship
            </span>
          ) : (
            <span className="px-2.5 py-0.5 text-[9px] font-mono font-medium bg-white/90 text-amber-800 rounded-full backdrop-blur-sm border border-amber-200">
              Made-to-Order ({product.leadTimeDays}d)
            </span>
          )}
        </div>

        {/* Floating Quick Action Overlays */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-craft-sm ${
              isFavorited 
                ? 'bg-terracotta-500 text-white' 
                : 'bg-white/90 text-espresso hover:text-terracotta-600'
            }`}
            aria-label="Save to wishlist"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-8 h-8 rounded-full bg-white/90 text-espresso hover:text-terracotta-600 flex items-center justify-center transition-colors shadow-craft-sm hidden sm:flex"
            aria-label="Quick look"
            title="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-umber-muted block mb-1">
            {product.category} • {product.yarnType.split('(')[0].trim()}
          </span>

          <h3 
            onClick={() => navigateTo('product', product.id)}
            className="font-serif text-sm font-bold text-espresso group-hover:text-terracotta-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {product.title}
          </h3>

          <p className="text-[11px] text-umber mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-linen-200 flex items-center justify-between">
          <div>
            <span className="text-sm font-mono font-bold text-espresso block">
              NPR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] font-mono text-stone-400 line-through">
                NPR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="btn-tactile px-3 py-1.5 bg-linen-200 hover:bg-terracotta-500 hover:text-white text-espresso text-xs font-semibold rounded-lg transition-all flex items-center space-x-1.5 shadow-sm"
            aria-label={`Add ${product.title} to bag`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>

      </div>

    </div>
  );
};

