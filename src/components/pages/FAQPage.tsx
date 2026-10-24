import React, { useState } from 'react';
import { faqs, FAQItem } from '../../data/faqs';
import { useShop } from '../../context/ShopContext';
import { ChevronDown, HelpCircle, MessageCircle, Search } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { navigateTo } = useShop();
  const [activeCategory, setActiveCategory] = useState<'shoppers' | 'creators'>('shoppers');
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [faqSearch, setFaqSearch] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(item => {
    if (item.category !== activeCategory) return false;
    if (faqSearch.trim()) {
      const q = faqSearch.toLowerCase();
      return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="py-12 sm:py-20 bg-parchment min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            Common Inquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-umber leading-relaxed font-light max-w-xl mx-auto">
            Everything you need to know about our handcrafted pieces, nationwide delivery across Nepal, and how independent creators partner with our studio.
          </p>
        </div>

        {/* Dual Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-linen-200 p-1 rounded-2xl flex space-x-1 border border-linen-300">
            <button
              onClick={() => {
                setActiveCategory('shoppers');
                setOpenIndices([0]);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'shoppers'
                  ? 'bg-white text-espresso shadow-craft-sm'
                  : 'text-umber hover:text-espresso'
              }`}
            >
              For Shoppers & Collectors
            </button>
            <button
              onClick={() => {
                setActiveCategory('creators');
                setOpenIndices([0]);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'creators'
                  ? 'bg-white text-espresso shadow-craft-sm'
                  : 'text-umber hover:text-espresso'
              }`}
            >
              For Crochet Creators
            </button>
          </div>
        </div>

        {/* Search inside FAQ */}
        <div className="mb-8 relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-umber-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            placeholder="Search questions (e.g. delivery, eSewa, returns)..."
            className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-linen-300 rounded-xl focus:outline-none focus:border-terracotta-500 shadow-craft-sm"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-linen-300 shadow-craft-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-espresso leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-linen-100 flex items-center justify-center text-umber flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-terracotta-50 text-terracotta-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-umber leading-relaxed font-light border-t border-linen-200/60 pt-4 bg-parchment/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-linen-200/70 border border-linen-300 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-white text-terracotta-600 flex items-center justify-center mx-auto shadow-craft-sm">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-espresso">
            Still have questions about our pieces or process?
          </h3>
          <p className="text-xs text-umber max-w-md mx-auto">
            Our Kathmandu studio team is available 7 days a week on WhatsApp and call. We love talking yarn, tension, and custom sizing.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold rounded-xl shadow-craft-sm"
            >
              Contact Studio Concierge
            </button>
            <a
              href="https://wa.me/9779801234567"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-white text-espresso hover:bg-linen-100 text-xs font-semibold rounded-xl border border-linen-300"
            >
              Chat on WhatsApp (+977 9801234567)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

