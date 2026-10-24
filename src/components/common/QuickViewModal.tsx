import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, ShoppingBag, Clock, Heart, Check, ArrowRight } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    navigateTo 
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFavorited = isInWishlist(product.id);

  const handleClose = () => {
    setQuickViewProduct(null);
    setActiveImageIndex(0);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    handleClose();
  };

  const handleViewFullPage = () => {
    handleClose();
    navigateTo('product', product.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-parchment rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-linen-300">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-espresso hover:bg-white flex items-center justify-center shadow-craft-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Gallery Column */}
            <div className="p-6 bg-linen-200/60 flex flex-col justify-between">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-craft-sm border border-linen-300">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImageIndex === idx ? 'border-terracotta-500 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Artisan Tag */}
                <div className="flex items-center space-x-2 mb-3">
                  <img
                    src={product.artisan.avatar}
                    alt={product.artisan.name}
                    className="w-6 h-6 rounded-full object-cover border border-linen-400"
                  />
                  <span className="text-xs font-medium text-espresso">
                    Hand-hooked by {product.artisan.name}
                  </span>
                  <span className="text-[10px] font-mono text-umber-muted">
                    ({product.artisan.location})
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso leading-snug">
                  {product.title}
                </h3>

                {product.nepaliTitle && (
                  <span className="text-xs text-umber font-medium mt-0.5 block">
                    {product.nepaliTitle}
                  </span>
                )}

                <div className="flex items-baseline space-x-2 mt-3">
                  <span className="font-mono text-xl font-bold text-terracotta-700">
                    NPR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="font-mono text-xs text-stone-400 line-through">
                      NPR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 p-3 rounded-xl bg-linen-100 border border-linen-300 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-umber-muted uppercase block">Time Spent</span>
                    <span className="font-semibold text-espresso flex items-center mt-0.5">
                      <Clock className="w-3.5 h-3.5 mr-1 text-terracotta-500" />
                      {product.hoursToMake} hours
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-umber-muted uppercase block">Material</span>
                    <span className="font-semibold text-espresso truncate mt-0.5 block">
                      {product.yarnType.split('(')[0]}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-umber mt-3 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-linen-300 space-y-3">
                <div className="flex items-center space-x-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-linen-400 rounded-xl bg-white px-3 py-1.5 text-xs">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="font-bold text-umber hover:text-espresso w-5 text-center"
                    >
                      -
                    </button>
                    <span className="font-mono font-semibold w-6 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="font-bold text-umber hover:text-espresso w-5 text-center"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="btn-tactile flex-1 py-2.5 px-4 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold rounded-xl shadow-craft-sm flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-2.5 rounded-xl border border-linen-400 transition-colors ${
                      isFavorited ? 'bg-terracotta-500 text-white border-terracotta-500' : 'bg-white text-espresso hover:text-terracotta-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={handleViewFullPage}
                  className="w-full py-2 text-xs text-umber-muted hover:text-espresso font-medium flex items-center justify-center space-x-1"
                >
                  <span>View complete maker story, specs & care instructions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

