import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../common/ProductCard';
import { products } from '../../data/products';
import { getReviewsForProduct } from '../../data/reviews';
import { 
  Heart, 
  ShoppingBag, 
  Clock, 
  ShieldCheck, 
  Check, 
  Star, 
  Share2, 
  ArrowLeft, 
  ChevronRight,
  MessageCircle,
  Truck,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { 
    currentProductId, 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    showToast 
  } = useShop();

  const product = products.find(p => p.id === currentProductId) || products[0];
  const reviews = getReviewsForProduct(product.id);
  const isFavorited = isInWishlist(product.id);

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'delivery'>('details');
  const [customInquiryOpen, setCustomInquiryOpen] = useState(false);
  const [inquiryText, setInquiryText] = useState('');

  // Related products from same category
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomInquiryOpen(false);
    showToast('Inquiry Sent', `Our studio team will WhatsApp you with custom sizing options.`, 'terracotta');
    setInquiryText('');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Handmade crochet in Nepal: ${product.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Product link copied to clipboard', 'info');
    }
  };

  return (
    <div className="py-8 sm:py-14 bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Trail */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-umber-muted mb-8 overflow-x-auto whitespace-nowrap">
          <button onClick={() => navigateTo('home')} className="hover:text-espresso transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-umber-subtle" />
          <button onClick={() => navigateTo('shop')} className="hover:text-espresso transition-colors">
            Catalog
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-umber-subtle" />
          <button onClick={() => navigateTo('shop', undefined, product.category)} className="hover:text-espresso transition-colors capitalize">
            {product.category}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-umber-subtle" />
          <span className="text-espresso font-semibold truncate max-w-[200px]">
            {product.title}
          </span>
        </nav>

        {/* Top Product Hero: Gallery + Buying Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16">
          
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-linen-200 border border-linen-300 shadow-craft-sm">
              <img
                src={product.images[activeImage] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />

              {/* Action buttons on image */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handleShare}
                  className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-espresso flex items-center justify-center shadow-craft-sm transition-colors"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center shadow-craft-sm transition-colors ${
                    isFavorited ? 'bg-terracotta-500 text-white' : 'bg-white/90 hover:bg-white text-espresso'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImage === idx
                        ? 'border-terracotta-500 scale-95 shadow-craft-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Buying Specifications & Purchase */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Category and Tags */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta-700 font-semibold">
                {product.category}
              </span>
              <div className="flex items-center space-x-1.5 text-xs text-honey-500 font-mono">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-espresso">{product.rating}</span>
                <span className="text-umber-muted">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            {/* Title & Nepali Title */}
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-espresso leading-tight">
                {product.title}
              </h1>
              {product.nepaliTitle && (
                <span className="text-xs sm:text-sm text-umber font-medium mt-1 block">
                  {product.nepaliTitle}
                </span>
              )}
            </div>

            {/* Price block */}
            <div className="p-4 bg-white rounded-2xl border border-linen-300 shadow-craft-sm flex items-baseline space-x-3">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-terracotta-700">
                NPR {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="font-mono text-sm text-umber-subtle line-through">
                  NPR {product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-[11px] font-mono text-sage-700 bg-sage-50 px-2 py-0.5 rounded border border-sage-200 ml-auto">
                All Taxes Included
              </span>
            </div>

            {/* Core Craft Specs Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-linen-300 space-y-1">
                <span className="text-[10px] font-mono text-umber-muted uppercase block">Hand-Hooking Time</span>
                <div className="flex items-center space-x-1.5 font-bold text-espresso">
                  <Clock className="w-4 h-4 text-sage-600" />
                  <span>{product.hoursToMake} hours of dedicated hooking</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-linen-300 space-y-1">
                <span className="text-[10px] font-mono text-umber-muted uppercase block">Yarn Material</span>
                <div className="flex items-center space-x-1.5 font-bold text-espresso truncate">
                  <ShieldCheck className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span className="truncate">{product.yarnType.split('(')[0]}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-umber leading-relaxed font-light">
              {product.description}
            </p>

            {/* Key Features Bullet List */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-semibold text-espresso uppercase tracking-wider block">
                Handcrafted Highlights
              </span>
              <ul className="space-y-2 text-xs text-umber">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-sage-600 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Sizing Box */}
            <div className="p-4 rounded-2xl bg-linen-100 border border-linen-300 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-espresso">
                  Custom Sizing or Color?
                </h4>
                <span className="text-[11px] font-mono text-umber-muted block">
                  Bespoke dimensions & made-to-measure orders available
                </span>
              </div>

              <button
                onClick={() => setCustomInquiryOpen(true)}
                className="text-xs font-mono text-sage-700 hover:text-sage-800 font-semibold underline underline-offset-2"
              >
                Request Custom
              </button>
            </div>

            {/* Purchase CTA controls */}
            <div className="pt-4 border-t border-linen-300 space-y-4">
              <div className="flex items-center space-x-3">
                {/* Quantity */}
                <div className="flex items-center border border-linen-300 rounded-xl bg-white px-3 py-2 text-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="font-bold text-umber hover:text-espresso w-6 text-center"
                  >
                    -
                  </button>
                  <span className="font-mono font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="font-bold text-umber hover:text-espresso w-6 text-center"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="btn-tactile flex-1 py-3.5 px-6 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-craft-md flex items-center justify-center space-x-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {quantity > 1 ? `${quantity} Items` : 'to Bag'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-umber-muted pt-2">
                <span className="flex items-center">
                  <Truck className="w-3.5 h-3.5 mr-1 text-sage-600" />
                  {product.readyToShip ? 'Dispatches within 24 hours' : `Made to order: ${product.leadTimeDays} days`}
                </span>
                <span>Kathmandu Delivery: NPR 100</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabbed In-Depth Information: Specifications, Care, Delivery */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-linen-300 shadow-craft-sm mb-16">
          <div className="flex border-b border-linen-300 space-x-6 text-xs sm:text-sm font-medium overflow-x-auto pb-px">
            {[
              { id: 'details', label: 'Craft & Materials' },
              { id: 'care', label: 'Washing & Care Guide' },
              { id: 'delivery', label: 'Delivery & Exchange' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 font-mono transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'border-sage-600 text-sage-800 font-bold'
                    : 'border-transparent text-umber-muted hover:text-espresso'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-6 text-xs sm:text-sm leading-relaxed text-umber">
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-serif text-base font-bold text-espresso">Fiber Provenance</h4>
                  <p>
                    Every thread used in this piece is selected for natural skin feel and long-term durability. We reject synthetic nylon and cheap acrylic yarns.
                  </p>
                  <div className="p-4 rounded-xl bg-linen-100 font-mono text-xs space-y-1.5">
                    <div><strong>Yarn Composition:</strong> {product.yarnType}</div>
                    <div><strong>Hook Tooling:</strong> {product.hookSize}</div>
                    <div><strong>Dimensions:</strong> {product.dimensions}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif text-base font-bold text-espresso">Handcrafted Integrity</h4>
                  <p>
                    Unlike knitwear that can be mass-produced in automated factories, crochet requires each stitch to be hand-locked by human fingers. This piece took {product.hoursToMake} documented hours of focused attention.
                  </p>
                  <p>
                    Each creation arrives with an authenticated care card stating the creation hours and unique serial number.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-3 max-w-2xl">
                <h4 className="font-serif text-base font-bold text-espresso">Preserving Your Handcrafted Piece</h4>
                <p>{product.careInstructions}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 bg-linen-100 rounded-lg">
                    <strong>1. Cold Water Only</strong>
                    <p className="text-[11px] text-umber-muted mt-1">Prevents fiber shrinkage and relaxes stitches.</p>
                  </div>
                  <div className="p-3 bg-linen-100 rounded-lg">
                    <strong>2. Lay Flat to Dry</strong>
                    <p className="text-[11px] text-umber-muted mt-1">Never hang wet crochet to prevent vertical stretching.</p>
                  </div>
                  <div className="p-3 bg-linen-100 rounded-lg">
                    <strong>3. Mild Liquid Soap</strong>
                    <p className="text-[11px] text-umber-muted mt-1">Protects natural plant dyes and wool lanolin.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="space-y-4 max-w-2xl">
                <h4 className="font-serif text-base font-bold text-espresso">Delivery & Exchange Policy</h4>
                <p>
                  We dispatch daily from our Kathmandu studio in Jhamsikhel, Lalitpur. All packages are securely wrapped in compostable paper without single-use plastics.
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li><strong>Kathmandu Valley:</strong> 24–48 hours delivery (Free above NPR 2,500)</li>
                  <li><strong>Outside Valley:</strong> 2–4 business days via express courier</li>
                  <li><strong>Handcrafted Exchange Policy:</strong> If sizing or feel does not suit you, contact WhatsApp for immediate support.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Customer Reviews for this Product */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sage-700 font-semibold">
                Customer Feedback
              </span>
              <h3 className="font-serif text-2xl font-bold text-espresso mt-1">
                Verified Reviews ({reviews.length})
              </h3>
            </div>
          </div>

          {reviews.length === 0 ? (
            <div className="p-8 bg-white rounded-2xl border border-linen-300 text-center text-xs text-umber">
              Be the first to review this small-batch handcrafted creation!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((rev) => (
                <div key={rev.id} className="p-6 bg-white rounded-2xl border border-linen-300 shadow-craft-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-honey-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-umber-muted">{rev.date}</span>
                  </div>
                  <h5 className="font-serif text-sm font-bold text-espresso">"{rev.title}"</h5>
                  <p className="text-xs text-umber leading-relaxed font-light">{rev.comment}</p>
                  <div className="pt-2 text-xs font-medium text-espresso flex items-center justify-between border-t border-linen-200">
                    <span>{rev.author} ({rev.city})</span>
                    <span className="text-[10px] font-mono text-sage-700 bg-sage-50 px-2 py-0.5 rounded-full border border-sage-200">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related Creations */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-sage-700 font-semibold">
                More Handcrafted Creations
              </span>
              <h3 className="font-serif text-2xl font-bold text-espresso mt-1">
                Pairs beautifully with
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Custom Inquiry Modal */}
      {customInquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-espresso/50 backdrop-blur-sm" onClick={() => setCustomInquiryOpen(false)} />
          <div className="relative bg-parchment max-w-md w-full p-6 rounded-3xl shadow-2xl border border-linen-300 space-y-4">
            <h4 className="font-serif text-xl font-bold text-espresso">
              Custom Size or Color Inquiry
            </h4>
            <p className="text-xs text-umber">
              Need this {product.title} in a custom chest size, strap length, or natural dye shade? Send details directly to our studio team.
            </p>
            <form onSubmit={handleCustomSubmit} className="space-y-3">
              <textarea
                required
                rows={4}
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                placeholder="Describe your desired measurements or color palette..."
                className="w-full p-3 text-xs bg-white border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-sage-600 hover:bg-sage-700 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Send Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setCustomInquiryOpen(false)}
                  className="px-4 py-2.5 bg-linen-200 text-espresso text-xs font-semibold rounded-xl hover:bg-linen-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
