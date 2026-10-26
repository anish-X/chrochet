// import React from "react";
// import { useShop } from "../../context/ShopContext";
// import {
//   Sparkles,
//   ArrowRight,
//   Camera,
//   Banknote,
//   ShieldCheck,
// } from "lucide-react";

// export const CreatorInvitation: React.FC = () => {
//   const { navigateTo } = useShop();

//   return (
//     <section className="py-16 sm:py-24 bg-brand-pink/20 border-b border-linen-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-3xl border-2 border-dashed border-linen-300 p-8 sm:p-14 shadow-craft-md relative overflow-hidden">
//           {/* Background subtle watermark icon */}
//           <div className="absolute -bottom-10 -right-10 text-brand-pink/40 pointer-events-none opacity-40">
//             <svg
//               className="w-80 h-80"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1"
//             >
//               <circle cx="12" cy="12" r="10" strokeDasharray="4 2" />
//               <path d="M12 2a10 10 0 0 1 10 10" />
//             </svg>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
//             <div className="lg:col-span-8 space-y-6">
//               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-linen-200 text-espresso text-xs font-mono font-semibold">
//                 <Sparkles className="w-3.5 h-3.5 text-sage-600" />
//                 <span>FOR NEPALI CROCHET CREATORS</span>
//               </div>

//               <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight leading-tight">
//                 Hook what you love. <br />
//                 <span className="text-sage-700">
//                   We handle the photography, packaging & delivery.
//                 </span>
//               </h2>

//               <p className="text-sm sm:text-base text-umber leading-relaxed font-light max-w-2xl">
//                 No need to build websites, negotiate delivery drivers on Pathao,
//                 or deal with unverified buyers. Sefung Crochet provides
//                 independent crochet artists in Nepal with a dignified, premium
//                 marketplace to showcase and sell.
//               </p>

//               {/* 3 Steps Mini-Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
//                 <div className="p-3.5 rounded-xl bg-parchment border border-linen-300">
//                   <div className="w-7 h-7 rounded-full bg-linen-200 text-espresso flex items-center justify-center font-bold text-xs mb-2">
//                     1
//                   </div>
//                   <h4 className="font-bold text-espresso">Apply with Photos</h4>
//                   <p className="text-[11px] text-umber-muted mt-1">
//                     Submit 3 photos of your work and tell us your specialty.
//                   </p>
//                 </div>

//                 <div className="p-3.5 rounded-xl bg-parchment border border-linen-300">
//                   <div className="w-7 h-7 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center font-bold text-xs mb-2">
//                     2
//                   </div>
//                   <h4 className="font-bold text-espresso">Studio Photoshoot</h4>
//                   <p className="text-[11px] text-umber-muted mt-1">
//                     We professionally shoot and catalog your pieces in Patan.
//                   </p>
//                 </div>

//                 <div className="p-3.5 rounded-xl bg-parchment border border-linen-300">
//                   <div className="w-7 h-7 rounded-full bg-honey-100 text-honey-800 flex items-center justify-center font-bold text-xs mb-2">
//                     3
//                   </div>
//                   <h4 className="font-bold text-espresso">Weekly Payouts</h4>
//                   <p className="text-[11px] text-umber-muted mt-1">
//                     Prompt payments directly to your eSewa, Khalti, or bank
//                     account.
//                   </p>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
//                 <button
//                   onClick={() => navigateTo("sell")}
//                   className="btn-tactile px-7 py-3.5 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-xs rounded-xl shadow-craft-md transition-colors flex items-center justify-center space-x-2"
//                 >
//                   <Sparkles className="w-4 h-4" />
//                   <span>Submit Creator Application</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>

//                 <button
//                   onClick={() => navigateTo("faq")}
//                   className="btn-tactile px-5 py-3.5 bg-white text-espresso hover:bg-linen-100 font-semibold text-xs rounded-xl border border-linen-300 transition-colors flex items-center justify-center"
//                 >
//                   <span>Read Creator FAQ</span>
//                 </button>
//               </div>
//             </div>

//             {/* Right Quote card */}
//             <div className="lg:col-span-4 bg-linen-100/90 p-6 rounded-2xl border border-linen-300 shadow-craft-sm space-y-4">
//               <span className="text-[10px] font-mono uppercase tracking-widest text-sage-700 font-bold block">
//                 Artisan Story
//               </span>

//               <p className="font-serif italic text-sm text-espresso leading-relaxed">
//                 "Before joining Sefung Crochet, selling crochet on Instagram
//                 meant taking blurry phone photos and getting low-balled in DMs.
//                 Today, my work is styled with respect, and I receive weekly
//                 payments straight to my eSewa."
//               </p>

//               <div className="pt-3 border-t border-linen-300 flex items-center space-x-3">
//                 <div className="w-10 h-10 rounded-full overflow-hidden border border-terracotta-300 bg-terracotta-200 flex-shrink-0">
//                   <img
//                     src="/images/logo.png"
//                     alt="Sefung Crochet Artisan"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h5 className="text-xs font-bold text-espresso">
//                     Sunita Prajapati
//                   </h5>
//                   <span className="text-[11px] font-mono text-umber-muted">
//                     Bhaktapur Artisan • Joined Jan 2024
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
