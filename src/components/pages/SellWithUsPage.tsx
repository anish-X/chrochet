// import React, { useState } from "react";
// import { useShop } from "../../context/ShopContext";
// import {
//   Sparkles,
//   Camera,
//   Banknote,
//   Truck,
//   ShieldCheck,
//   CheckCircle2,
//   ArrowRight,
//   Heart,
//   UploadCloud,
//   HelpCircle,
// } from "lucide-react";

// export const SellWithUsPage: React.FC = () => {
//   const { showToast, navigateTo } = useShop();

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     city: "Kathmandu",
//     experienceYears: "3-5 years",
//     specialties: ["Wearables & Sweaters", "Bags & Totes"],
//     instagram: "",
//     story: "",
//     yarnPreference: "100% Cotton & Bamboo Silk",
//   });

//   const availableSpecialties = [
//     "Wearables & Sweaters",
//     "Granny Square Bags & Totes",
//     "Amigurumi & Soft Keepsakes",
//     "Home Decor & Coasters",
//     "Sun Hats & Bucket Hats",
//     "Floral Botanicals & Stems",
//   ];

//   const toggleSpecialty = (spec: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       specialties: prev.specialties.includes(spec)
//         ? prev.specialties.filter((s) => s !== spec)
//         : [...prev.specialties, spec],
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.phone) {
//       showToast("Please fill all required fields", undefined, "info");
//       return;
//     }
//     setFormSubmitted(true);
//     showToast(
//       "Application Submitted!",
//       "Our artisan curator will contact you via WhatsApp within 48 hours.",
//       "info",
//     );
//   };

//   return (
//     <div className="py-10 sm:py-20 bg-parchment min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
//           <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-honey-100 text-honey-800 text-xs font-mono font-semibold">
//             <Sparkles className="w-3.5 h-3.5 text-honey-600" />
//             <span>ARTISAN CREATOR GUILD</span>
//           </div>

//           <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-tight leading-tight">
//             Hook what you love. <br />
//             <span className="text-terracotta-600 italic">
//               We handle everything else.
//             </span>
//           </h1>

//           <p className="text-sm sm:text-base text-umber leading-relaxed font-light">
//             You don't need to negotiate courier deliveries on Pathao, run ads,
//             or deal with difficult buyers in Instagram DMs. Sefung Crochet
//             empowers independent crochet creators across Nepal with a high-end
//             platform, professional studio photography, and guaranteed weekly
//             payouts.
//           </p>
//         </div>

//         {/* 3 Pillars of Sefung Crochet Creator Partnership */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//           <div className="bg-white p-6 sm:p-8 rounded-2xl border border-linen-300 shadow-craft-sm space-y-3">
//             <div className="w-12 h-12 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center">
//               <Banknote className="w-6 h-6" />
//             </div>
//             <h3 className="font-serif text-lg font-bold text-espresso">
//               Fair Transparent Pricing
//             </h3>
//             <p className="text-xs text-umber leading-relaxed font-light">
//               You set your target piece price based on your time and yarn cost.
//               Sefung Crochet handles professional photography, luxury packaging,
//               nationwide delivery, and customer care with prompt weekly payouts.
//               Zero listing fees.
//             </p>
//           </div>

//           <div className="bg-white p-6 sm:p-8 rounded-2xl border border-linen-300 shadow-craft-sm space-y-3">
//             <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center">
//               <Camera className="w-6 h-6" />
//             </div>
//             <h3 className="font-serif text-lg font-bold text-espresso">
//               Professional Studio Photos
//             </h3>
//             <p className="text-xs text-umber leading-relaxed font-light">
//               Send your sample pieces to our studio in Jhamsikhel, Lalitpur. Our
//               design team photographs your work with model styling and natural
//               lighting, giving your craft the luxury presentation it deserves.
//             </p>
//           </div>

//           <div className="bg-white p-6 sm:p-8 rounded-2xl border border-linen-300 shadow-craft-sm space-y-3">
//             <div className="w-12 h-12 rounded-xl bg-honey-50 text-honey-600 flex items-center justify-center">
//               <Truck className="w-6 h-6" />
//             </div>
//             <h3 className="font-serif text-lg font-bold text-espresso">
//               Nationwide Courier Logistics
//             </h3>
//             <p className="text-xs text-umber leading-relaxed font-light">
//               We pack orders in custom compostable unbleached boxes with
//               verified handmade tags. We manage dispatch across all 7 provinces
//               of Nepal and handle customer returns directly.
//             </p>
//           </div>
//         </div>

//         {/* How it Works: Step-by-Step */}
//         <div className="bg-linen-100/80 rounded-3xl p-8 sm:p-12 border border-linen-300 shadow-craft-sm mb-16">
//           <div className="max-w-2xl mb-8">
//             <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-bold">
//               The Journey
//             </span>
//             <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mt-1">
//               From your crochet hook to conscious homes.
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
//             <div className="p-4 bg-white rounded-xl border border-linen-300 space-y-2">
//               <span className="text-lg font-bold text-terracotta-600 font-serif">
//                 01
//               </span>
//               <h4 className="font-bold text-espresso">Submit Application</h4>
//               <p className="text-[11px] text-umber-muted leading-relaxed">
//                 Fill the simple form below with photos of your recent crochet
//                 work and your favorite yarn types.
//               </p>
//             </div>

//             <div className="p-4 bg-white rounded-xl border border-linen-300 space-y-2">
//               <span className="text-lg font-bold text-terracotta-600 font-serif">
//                 02
//               </span>
//               <h4 className="font-bold text-espresso">Sample Review</h4>
//               <p className="text-[11px] text-umber-muted leading-relaxed">
//                 Send 1-2 sample pieces to our Kathmandu studio. We verify stitch
//                 tension, seam security, and finish.
//               </p>
//             </div>

//             <div className="p-4 bg-white rounded-xl border border-linen-300 space-y-2">
//               <span className="text-lg font-bold text-terracotta-600 font-serif">
//                 03
//               </span>
//               <h4 className="font-bold text-espresso">Catalog & Styling</h4>
//               <p className="text-[11px] text-umber-muted leading-relaxed">
//                 We photograph your creations, write your artisan bio, and list
//                 your collection on Sefung Crochet drops.
//               </p>
//             </div>

//             <div className="p-4 bg-white rounded-xl border border-linen-300 space-y-2">
//               <span className="text-lg font-bold text-terracotta-600 font-serif">
//                 04
//               </span>
//               <h4 className="font-bold text-espresso">Weekly Payouts</h4>
//               <p className="text-[11px] text-umber-muted leading-relaxed">
//                 Whenever your items sell, you receive weekly payments every
//                 Sunday via eSewa, Khalti, or bank transfer.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Application Form Section */}
//         <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-dashed border-terracotta-300 shadow-craft-md">
//           {formSubmitted ? (
//             <div className="text-center py-8 space-y-4">
//               <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
//                 <CheckCircle2 className="w-10 h-10" />
//               </div>
//               <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-bold">
//                 Application Received
//               </span>
//               <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
//                 Dhanyabad, {formData.fullName}!
//               </h3>
//               <p className="text-xs sm:text-sm text-umber max-w-md mx-auto leading-relaxed">
//                 Our curator team at the Jhamsikhel studio has received your
//                 application. We will review your specialty and message you on
//                 WhatsApp (<strong>{formData.phone}</strong>) within 48 hours to
//                 schedule a sample dropoff.
//               </p>
//               <div className="pt-4">
//                 <button
//                   onClick={() => navigateTo("shop")}
//                   className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold rounded-xl"
//                 >
//                   Explore Current Sefung Crochet Drops
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <div className="mb-8">
//                 <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-bold">
//                   Join The Collective
//                 </span>
//                 <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mt-1">
//                   Artisan Application Form
//                 </h2>
//                 <p className="text-xs text-umber mt-1">
//                   Takes less than 3 minutes. Independent creators from all 7
//                   provinces of Nepal are welcome.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-medium text-espresso mb-1">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={(e) =>
//                         setFormData({ ...formData, fullName: e.target.value })
//                       }
//                       placeholder="e.g. Maya Shrestha"
//                       className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-medium text-espresso mb-1">
//                       WhatsApp / Mobile Phone *
//                     </label>
//                     <input
//                       type="tel"
//                       required
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       placeholder="98XXXXXXXX"
//                       className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-medium text-espresso mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       placeholder="maya@example.com"
//                       className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-medium text-espresso mb-1">
//                       City / District in Nepal
//                     </label>
//                     <select
//                       value={formData.city}
//                       onChange={(e) =>
//                         setFormData({ ...formData, city: e.target.value })
//                       }
//                       className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
//                     >
//                       <option value="Kathmandu">Kathmandu</option>
//                       <option value="Lalitpur">Lalitpur / Patan</option>
//                       <option value="Bhaktapur">Bhaktapur</option>
//                       <option value="Pokhara">Pokhara</option>
//                       <option value="Chitwan">Chitwan</option>
//                       <option value="Butwal">Butwal</option>
//                       <option value="Dharan">Dharan</option>
//                       <option value="Other">Other Region in Nepal</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Experience & Specialties */}
//                 <div>
//                   <label className="block text-xs font-medium text-espresso mb-2">
//                     What are your crochet specialties? (Select all that apply)
//                   </label>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {availableSpecialties.map((spec) => {
//                       const isSelected = formData.specialties.includes(spec);
//                       return (
//                         <button
//                           type="button"
//                           key={spec}
//                           onClick={() => toggleSpecialty(spec)}
//                           className={`p-2.5 rounded-xl text-xs text-left border transition-all flex items-center justify-between ${
//                             isSelected
//                               ? "bg-sage-50 border-sage-600 text-sage-800 font-semibold"
//                               : "bg-linen-100 border-linen-300 text-espresso hover:bg-linen-200"
//                           }`}
//                         >
//                           <span>{spec}</span>
//                           {isSelected && (
//                             <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
//                           )}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-medium text-espresso mb-1">
//                       Years Crocheting
//                     </label>
//                     <select
//                       value={formData.experienceYears}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           experienceYears: e.target.value,
//                         })
//                       }
//                       className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
//                     >
//                       <option value="Under 1 year">Under 1 year</option>
//                       <option value="1-3 years">1 to 3 years</option>
//                       <option value="3-5 years">3 to 5 years</option>
//                       <option value="5+ years">5+ years (Master)</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-medium text-espresso mb-1">
//                       Instagram / TikTok / Facebook Page (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.instagram}
//                       onChange={(e) =>
//                         setFormData({ ...formData, instagram: e.target.value })
//                       }
//                       placeholder="@yourcrochetpage"
//                       className="w-full px-3.5 py-2.5 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
//                     />
//                   </div>
//                 </div>

//                 {/* Story */}
//                 <div>
//                   <label className="block text-xs font-medium text-espresso mb-1">
//                     Tell us about your crochet journey and preferred yarns
//                   </label>
//                   <textarea
//                     rows={3}
//                     value={formData.story}
//                     onChange={(e) =>
//                       setFormData({ ...formData, story: e.target.value })
//                     }
//                     placeholder="e.g. I learned from my mother in Patan, love working with unbleached organic cotton for oversized totes..."
//                     className="w-full p-3 text-xs bg-linen-100 border border-linen-300 rounded-xl focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600"
//                   />
//                 </div>

//                 {/* Photo upload mock */}
//                 <div className="p-4 border-2 border-dashed border-linen-300 rounded-2xl bg-linen-100/60 text-center space-y-2">
//                   <UploadCloud className="w-6 h-6 text-sage-600 mx-auto" />
//                   <p className="text-xs text-espresso font-medium">
//                     Upload photos of 2-3 sample pieces
//                   </p>
//                   <p className="text-[11px] text-umber-muted">
//                     Clear photos taken in natural daylight help us assess
//                     tension and stitch definition faster.
//                   </p>
//                   <span className="inline-block px-3 py-1 bg-white border border-linen-300 rounded-lg text-[10px] font-mono text-umber">
//                     Browse files or Drag & Drop
//                   </span>
//                 </div>

//                 {/* Submit button */}
//                 <button
//                   type="submit"
//                   className="w-full py-4 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-xs rounded-xl shadow-craft-md transition-all flex items-center justify-center space-x-2"
//                 >
//                   <Sparkles className="w-4 h-4" />
//                   <span>Submit Application to Sefung Crochet Studio</span>
//                 </button>

//                 <p className="text-[11px] font-mono text-center text-umber-muted">
//                   🔒 Zero upfront fees • We reply to every applicant within 48
//                   business hours.
//                 </p>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
