import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast, navigateTo } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Customer Question',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
    showToast('Message Sent', 'We will respond within 4 business hours via WhatsApp or email.', 'info');
  };

  return (
    <div className="py-12 sm:py-20 bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-sage-700 font-semibold">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-tight mt-1">
            Visit our Kathmandu Studio.
          </h1>
          <p className="text-xs sm:text-sm text-umber mt-2 font-light leading-relaxed">
            Whether you want to inspect stitch tension in person, commission a bespoke piece, or drop off your creator samples, our doors are always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Studio Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-linen-300 shadow-craft-sm space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso">
                    Sefung Crochet Studio & Quality Lab
                  </h3>
                  <span className="text-xs font-mono text-sage-700">
                    Jhamsikhel, Lalitpur, Nepal
                  </span>
                </div>
              </div>

              <p className="text-xs text-umber leading-relaxed font-light">
                Located near the British School in Jhamsikhel. Feel free to come feel the difference between unbleached combed cotton and synthetic yarns firsthand.
              </p>

              <div className="pt-2 border-t border-linen-200 space-y-3 text-xs font-mono">
                <div className="flex items-center space-x-3 text-espresso">
                  <Phone className="w-4 h-4 text-sage-600" />
                  <span>+977 9801234567 / 01-5542891</span>
                </div>
                <div className="flex items-center space-x-3 text-espresso">
                  <Mail className="w-4 h-4 text-honey-600" />
                  <span>namaste@sefungcrochet.com</span>
                </div>
                <div className="flex items-center space-x-3 text-espresso">
                  <Clock className="w-4 h-4 text-sage-600" />
                  <span>Sun – Fri: 10:00 AM – 6:30 PM (Sat Closed)</span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/9779801234567"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-tactile w-full py-3 bg-sage-600 hover:bg-sage-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-craft-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-sage-100" />
                  <span>Chat with Studio Concierge on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Dispatch Card */}
            <div className="bg-linen-100 p-6 rounded-3xl border border-linen-300 text-xs text-umber space-y-2">
              <span className="font-mono text-sage-700 font-bold uppercase text-[10px] block">
                Logistics & Pickups
              </span>
              <h4 className="font-serif font-bold text-espresso text-sm">
                Same-Day Studio Pickup Available
              </h4>
              <p className="leading-relaxed">
                If you need a gift in Kathmandu Valley today, you can order online and select "Studio Pickup" or call us directly. We will package your pieces in our unbleached boxes immediately.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-linen-300 shadow-craft-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-sage-700 font-bold">
                  Message Dispatched
                </span>
                <h3 className="font-serif text-2xl font-bold text-espresso">
                  Dhanyabad, {formData.name}!
                </h3>
                <p className="text-xs text-umber max-w-sm mx-auto leading-relaxed">
                  We have received your note. A member of our Kathmandu team will get in touch shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Customer Question', message: '' });
                    }}
                    className="px-5 py-2.5 bg-linen-200 text-espresso text-xs font-medium rounded-xl hover:bg-linen-300 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-sage-700 font-bold">
                    Direct Inquiry
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-espresso mt-1">
                    Send a note to our makers
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sambridhi Rana"
                      className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sambridhi@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-espresso mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                    >
                      <option value="Customer Question">Product Sizing / Fit Inquiry</option>
                      <option value="Custom Order">Bespoke Custom Dimension Order</option>
                      <option value="Creator Support">Crochet Creator Support</option>
                      <option value="Wholesale / Gifting">Wedding / Corporate Gifting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-espresso mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what piece you are interested in or questions about delivery..."
                    className="w-full p-3.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-tactile w-full py-3.5 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-xs rounded-xl shadow-craft-md transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Jhamsikhel Studio</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

