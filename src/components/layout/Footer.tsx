import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, showToast } = useShop();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes('@')) {
      setSubscribed(true);
      showToast('Welcome to the Sefung Crochet Circle', 'You will receive notice before each limited artisan drop.', 'terracotta');
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-espresso text-parchment-200 pt-16 pb-12 border-t-4 border-terracotta-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-espresso-soft text-xs">
          <div className="flex items-start space-x-3 p-4 rounded-xl bg-espresso-light/60 border border-espresso-soft">
            <div className="p-2 rounded-lg bg-terracotta-500/20 text-terracotta-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">100% Non-Machine Guarantee</h4>
              <p className="text-stone-300 mt-1 leading-relaxed">
                Crochet cannot be executed by industrial machinery. Every stitch is placed by human hands across Nepal.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-xl bg-espresso-light/60 border border-espresso-soft">
            <div className="p-2 rounded-lg bg-sage-500/20 text-sage-300">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Nationwide Dispatch</h4>
              <p className="text-stone-300 mt-1 leading-relaxed">
                24-48 hrs delivery in Kathmandu Valley. Express couriers to Pokhara, Butwal, Dharan & all 7 provinces.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-xl bg-espresso-light/60 border border-espresso-soft">
            <div className="p-2 rounded-lg bg-honey-500/20 text-honey-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Empowering Local Makers</h4>
              <p className="text-stone-300 mt-1 leading-relaxed">
                Creators retain 80%+ of retail prices with transparent weekly payouts via eSewa, Khalti, or bank transfer.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-espresso-soft">
          
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-terracotta-500 text-parchment flex items-center justify-center font-bold text-sm">
                S
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                SEFUNG CROCHET
              </span>
              <span className="text-[11px] font-mono text-terracotta-400 font-semibold uppercase">
                .np
              </span>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed pr-6">
              "Nepal's destination for handmade crochet." We are a collective platform connecting independent fiber artisans across the Himalayas directly with conscious collectors and modern homes.
            </p>

            <div className="pt-2 text-xs text-stone-300 space-y-2 font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
                <span>Sefung Crochet Studio, Jhamsikhel, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-sage-400" />
                <span>WhatsApp / Phone: +977 9801234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-honey-400" />
                <span>namaste@sefungcrochet.com</span>
              </div>
            </div>
          </div>

          {/* Shoppers Column */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-semibold">Discover</h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => navigateTo('shop', undefined, 'all')} className="hover:text-terracotta-300 transition-colors">
                  All Handmade Pieces
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', undefined, 'wearables')} className="hover:text-terracotta-300 transition-colors">
                  Wearables & Cardigans
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', undefined, 'bags')} className="hover:text-terracotta-300 transition-colors">
                  Granny Square Totes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', undefined, 'home')} className="hover:text-terracotta-300 transition-colors">
                  Home Living & Coasters
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', undefined, 'amigurumi')} className="hover:text-terracotta-300 transition-colors">
                  Bamboo Amigurumi Keepsakes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-terracotta-300 transition-colors">
                  Care & Washing Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Creators Column */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-semibold">For Creators</h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => navigateTo('sell')} className="text-honey-400 hover:text-honey-200 font-semibold flex items-center group">
                  <span>Sell With Sefung Crochet</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sell')} className="hover:text-terracotta-300 transition-colors">
                  Artisan Commission Structure
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sell')} className="hover:text-terracotta-300 transition-colors">
                  Studio Photography Support
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-terracotta-300 transition-colors">
                  Maker Quality Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-terracotta-300 transition-colors">
                  Book Studio Sample Review
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-semibold">The Sefung Gazette</h5>
            <p className="text-xs text-stone-300 leading-relaxed">
              Sign up for private announcements of small-batch artisan drops and behind-the-hook stories.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-sage-900/60 border border-sage-600 text-xs text-sage-200 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>Thank you! You're on the list for our next drop.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email for drop notices"
                  className="w-full px-3 py-2 text-xs bg-espresso-light border border-espresso-soft rounded-lg text-white placeholder-stone-400 focus:outline-none focus:border-terracotta-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Join The Circle</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center space-x-3 text-stone-400 text-xs font-mono">
              <span>eSewa</span>
              <span>•</span>
              <span>Khalti</span>
              <span>•</span>
              <span>Fonepay</span>
              <span>•</span>
              <span>COD</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400">
          <p className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Sefung Crochet Collective (सेफुङ क्रोशेट नेपाल). All rights reserved.</span>
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 font-mono text-[11px]">
            <span>Handmade in Nepal</span>
            <span>•</span>
            <span className="flex items-center text-terracotta-400">
              Made with <Heart className="w-3 h-3 mx-1 fill-current" /> by Nepali Hands
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

