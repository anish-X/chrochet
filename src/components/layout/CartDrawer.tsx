import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  MapPin
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    cartOpen, 
    setCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    subtotal, 
    deliveryFee, 
    freeDeliveryThreshold,
    navigateTo 
  } = useShop();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: 'Aayush Maharjan',
    phone: '9841234567',
    district: 'Kathmandu Valley',
    address: 'Baluwatar, near Russian Embassy',
    paymentMethod: 'cod',
    notes: 'Please pack in gift box with artisan maker card'
  });
  const [orderId, setOrderId] = useState('');

  if (!cartOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
  const amountNeededForFree = Math.max(0, freeDeliveryThreshold - subtotal);
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SEFUNG-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setCheckoutStep('success');
    clearCart();
  };

  const handleClose = () => {
    setCartOpen(false);
    if (checkoutStep === 'success') {
      setCheckoutStep('cart');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-espresso/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-parchment shadow-2xl flex flex-col border-l border-linen-300">
          
          {/* Header */}
          <div className="p-5 border-b border-linen-300 flex items-center justify-between bg-linen-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-espresso">
                  {checkoutStep === 'cart' && 'Your Woven Bag'}
                  {checkoutStep === 'checkout' && 'Handcrafted Checkout'}
                  {checkoutStep === 'success' && 'Order Confirmed'}
                </h3>
                <span className="text-[11px] font-mono text-umber">
                  {cart.length} unique creation{cart.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 text-umber-muted hover:text-espresso rounded-full hover:bg-linen-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery threshold bar */}
          {checkoutStep === 'cart' && cart.length > 0 && (
            <div className="px-5 py-3 bg-linen-200/70 border-b border-linen-300">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-mono text-umber flex items-center">
                  <Truck className="w-3.5 h-3.5 mr-1 text-sage-600" />
                  Kathmandu Valley Delivery
                </span>
                <span className="font-semibold text-espresso">
                  {progressPercent >= 100 ? (
                    <span className="text-sage-700 font-medium">Free Delivery Unlocked!</span>
                  ) : (
                    <span>Add <strong className="text-terracotta-600">NPR {amountNeededForFree.toLocaleString()}</strong> for Free</span>
                  )}
                </span>
              </div>
              <div className="w-full bg-linen-300 h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 rounded-full ${
                    progressPercent >= 100 ? 'bg-sage-600' : 'bg-terracotta-500'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {checkoutStep === 'cart' && (
              <>
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-linen-200 flex items-center justify-center text-umber-muted">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-espresso">Your bag is empty</h4>
                      <p className="text-xs text-umber mt-1 max-w-xs">
                        Every piece on Sefung Crochet is hand-stitched by independent Nepali makers. Find a piece that speaks to you.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handleClose();
                        navigateTo('shop');
                      }}
                      className="px-5 py-2.5 bg-terracotta-500 text-white text-xs font-semibold rounded-full shadow-craft-sm hover:bg-terracotta-600 transition-colors"
                    >
                      Explore Curated Drops
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div 
                        key={item.product.id}
                        className="flex space-x-3.5 p-3 rounded-xl bg-white border border-linen-300 shadow-craft-sm"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0 bg-linen-200"
                        />
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex items-start justify-between">
                              <h4 className="text-xs font-bold text-espresso line-clamp-1">
                                {item.product.title}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-umber-subtle hover:text-terracotta-600 transition-colors p-1"
                                title="Remove"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="text-[11px] font-mono text-umber-muted block capitalize">
                              {item.product.category} • Handcrafted in Nepal
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-linen-200">
                            <span className="text-xs font-mono font-bold text-espresso">
                              NPR {(item.product.price * item.quantity).toLocaleString()}
                            </span>

                            {/* Quantity buttons */}
                            <div className="flex items-center space-x-2 border border-linen-300 rounded-lg bg-linen-100 px-2 py-0.5">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="text-xs text-umber hover:text-espresso font-bold w-4 text-center"
                              >
                                -
                              </button>
                              <span className="text-xs font-mono font-semibold w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="text-xs text-umber hover:text-espresso font-bold w-4 text-center"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="p-3 rounded-lg bg-sage-50 border border-sage-200 text-xs text-sage-800 flex items-start space-x-2 mt-4">
                      <Sparkles className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] leading-relaxed">
                        Every order arrives wrapped in compostable unbleached butter paper with a signed maker tag stating the exact hours spent hand-hooking.
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Step: Checkout Form */}
            {checkoutStep === 'checkout' && (
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="p-3 bg-linen-100 rounded-lg border border-linen-300 text-xs text-umber">
                  <span className="font-semibold text-espresso block mb-0.5">Delivery in Nepal</span>
                  Estimated dispatch: Next-day dispatch via Sefung Crochet Studio Kathmandu.
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-linen-300 rounded-lg focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Mobile Number (eSewa / Call)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-linen-300 rounded-lg focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Region / District</label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-linen-300 rounded-lg focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    >
                      <option value="Kathmandu Valley">Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur)</option>
                      <option value="Pokhara">Pokhara / Kaski</option>
                      <option value="Chitwan">Chitwan (Bharatpur / Narayangarh)</option>
                      <option value="Butwal">Butwal / Rupandehi</option>
                      <option value="Dharan">Dharan / Sunsari</option>
                      <option value="Biratnagar">Biratnagar / Morang</option>
                      <option value="Other Provinces">Other District (All 7 Provinces)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Delivery Street Address / Landmark</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Tole, house number, nearby landmark"
                      className="w-full px-3 py-2 text-xs bg-white border border-linen-300 rounded-lg focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Payment Method</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <label className={`p-2.5 border rounded-lg cursor-pointer flex items-center space-x-2 ${formData.paymentMethod === 'cod' ? 'border-sage-600 bg-sage-50 font-semibold text-sage-800' : 'border-linen-300 bg-white text-espresso'}`}>
                        <input
                          type="radio"
                          name="payment"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                          className="sr-only"
                        />
                        <span>Cash On Delivery</span>
                      </label>
                      <label className={`p-2.5 border rounded-lg cursor-pointer flex items-center space-x-2 ${formData.paymentMethod === 'esewa' ? 'border-sage-600 bg-sage-50 font-semibold text-sage-800' : 'border-linen-300 bg-white text-espresso'}`}>
                        <input
                          type="radio"
                          name="payment"
                          checked={formData.paymentMethod === 'esewa'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'esewa' })}
                          className="sr-only"
                        />
                        <span>eSewa / Fonepay</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Gift Note / Custom Instructions</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-linen-300 rounded-lg focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-xs rounded-xl shadow-craft-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Confirm Order (NPR {total.toLocaleString()})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full mt-2 py-2 text-xs text-umber hover:text-espresso font-medium"
                  >
                    ← Back to Bag
                  </button>
                </div>
              </form>
            )}

            {/* Step: Success Screen */}
            {checkoutStep === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sage-700 font-bold">
                    Order Placed With Love
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-espresso mt-1">
                    Dhanyabad, {formData.name}!
                  </h4>
                  <p className="text-xs text-umber mt-2 leading-relaxed max-w-xs">
                    Your reference is <strong className="font-mono text-espresso">{orderId}</strong>. Our studio artisan team has received your order and is preparing your hand-stitched pieces in Jhamsikhel.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl bg-linen-100 border border-linen-300 text-left text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-umber">Delivery City:</span>
                    <span className="font-medium text-espresso">{formData.district}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-umber">Payment:</span>
                    <span className="font-medium text-espresso uppercase">{formData.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-umber">Tracking:</span>
                    <span className="text-sage-700 font-semibold">SMS confirmation sent</span>
                  </div>
                </div>

                <div className="pt-2 w-full space-y-2">
                  <button
                    onClick={() => {
                      handleClose();
                      navigateTo('shop');
                    }}
                    className="w-full py-2.5 bg-espresso text-parchment text-xs font-semibold rounded-xl hover:bg-espresso-light transition-colors"
                  >
                    Continue Exploring Sefung Crochet
                  </button>
                  <button
                    onClick={() => {
                      handleClose();
                      navigateTo('sell');
                    }}
                    className="w-full py-2 text-xs text-sage-700 hover:text-sage-800 font-medium"
                  >
                    Are you a creator? Sell with us
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout Button */}
          {checkoutStep === 'cart' && cart.length > 0 && (
            <div className="p-5 border-t border-linen-300 bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-umber">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium text-espresso">NPR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-umber">
                  <span>Nepal Delivery</span>
                  <span className="font-mono font-medium text-espresso">
                    {deliveryFee === 0 ? (
                      <span className="text-sage-700 font-semibold">FREE</span>
                    ) : (
                      `NPR ${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-espresso pt-2 border-t border-linen-200">
                  <span>Total</span>
                  <span className="font-mono text-espresso font-bold">NPR {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-xs rounded-xl shadow-craft-md transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Proceed to Handcrafted Checkout</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

