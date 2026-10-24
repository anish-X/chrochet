import React from 'react';
import { reviews } from '../../data/reviews';
import { products } from '../../data/products';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CommunityVoices: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-16 sm:py-24 bg-parchment border-b border-linen-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            Social Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso tracking-tight mt-1">
            Cherished across homes in Nepal.
          </h2>
          <p className="text-xs sm:text-sm text-umber mt-2 font-light">
            Real stories from buyers in Kathmandu, Patan, and Pokhara who appreciate the warmth of human craft over factory churn.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => {
            const product = products.find(p => p.id === review.productId);
            return (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl border border-linen-300 shadow-craft-sm flex flex-col justify-between hover:shadow-craft-md transition-shadow"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 text-honey-500 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <h4 className="font-serif text-base font-bold text-espresso mb-2">
                    "{review.title}"
                  </h4>

                  <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
                    {review.comment}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-linen-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-espresso block">
                        {review.author}
                      </span>
                      <span className="text-[11px] font-mono text-umber-muted">
                        {review.city}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 text-[10px] font-mono text-sage-800 bg-sage-50 px-2 py-0.5 rounded-full border border-sage-200">
                      <CheckCircle2 className="w-3 h-3 text-sage-600" />
                      <span>Verified Buyer</span>
                    </div>
                  </div>

                  {product && (
                    <button
                      onClick={() => navigateTo('product', product.id)}
                      className="mt-3 text-[11px] font-mono text-terracotta-600 hover:text-terracotta-800 flex items-center space-x-1 truncate"
                    >
                      <span className="text-umber-muted">Item:</span>
                      <span className="font-semibold truncate">{product.title}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

