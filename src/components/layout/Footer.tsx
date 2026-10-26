import React, { useState } from "react";
import { useShop } from "../../context/ShopContext";
import {
  Heart,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { navigateTo, showToast } = useShop();
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes("@")) {
      setSubscribed(true);
      showToast(
        "Welcome to the Sefung Crochet Circle",
        "You will receive notice before each limited artisan drop.",
        "terracotta",
      );
      setEmailInput("");
    }
  };

  return (
    <footer className="bg-espresso text-parchment-200 pt-16 pb-12 border-t-4 border-sage-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-espresso-soft">
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden shadow-craft-sm flex-shrink-0 bg-brand-pink/30 border border-brand-pink/50">
                <img
                  src="/images/logo.png"
                  alt="Sefung Crochet Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                SEFUNG CROCHET
              </span>
              <span className="text-[11px] font-mono text-sage-400 font-semibold uppercase">
                .np
              </span>
            </div>

            <p className="text-espresso-subtle text-sm leading-relaxed pr-6">
              "Nepal's destination for handmade crochet." We are a collective
              platform connecting independent fiber artisans across the
              Himalayas directly with conscious collectors and modern homes.
            </p>

            <div className="pt-2 text-xs text-espresso-subtle space-y-2 font-mono">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-sage-400" />
                <span>WhatsApp / Phone: +977 9801234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-honey-400" />
                <span>sefungcrochet@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Shoppers Column */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-semibold">
              Discover
            </h5>
            <ul className="space-y-2 text-xs text-espresso-subtle">
              <li>
                <button
                  onClick={() => navigateTo("shop", undefined, "all")}
                  className="hover:text-terracotta-300 transition-colors"
                >
                  All Handmade Pieces
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("shop", undefined, "wearables")}
                  className="hover:text-terracotta-300 transition-colors"
                >
                  Wearables & Cardigans
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("shop", undefined, "bags")}
                  className="hover:text-terracotta-300 transition-colors"
                >
                  Granny Square Totes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("shop", undefined, "home")}
                  className="hover:text-terracotta-300 transition-colors"
                >
                  Home Living & Coasters
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("shop", undefined, "amigurumi")}
                  className="hover:text-terracotta-300 transition-colors"
                >
                  Bamboo Amigurumi Keepsakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("about")}
                  className="hover:text-terracotta-300 transition-colors"
                >
                  Care & Washing Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-semibold">
              The Sefung Gazette
            </h5>
            <p className="text-xs text-espresso-subtle leading-relaxed">
              Sign up for private announcements of small-batch artisan drops and
              behind-the-hook stories.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-sage-800/60 border border-sage-600 text-xs text-sage-200 flex items-center space-x-2">
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
                  className="w-full px-3 py-2 text-xs bg-espresso-light border border-espresso-soft rounded-lg text-white placeholder-espresso-muted focus:outline-none focus:border-sage-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-sage-600 hover:bg-sage-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Join The Circle</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center space-x-3 text-espresso-muted text-xs font-mono">
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-espresso-muted">
          <p className="flex items-center space-x-1">
            <span>
              © {new Date().getFullYear()} Sefung Crochet Collective (सेफुङ
              क्रोशेट नेपाल). All rights reserved.
            </span>
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 font-mono text-[11px]">
            <span>Handmade in Nepal</span>
            <span>•</span>
            <span className="flex items-center text-terracotta-400">
              Made with <Heart className="w-3 h-3 mx-1 fill-current" /> by
              Nepali Hands
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
