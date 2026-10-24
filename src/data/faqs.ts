export interface FAQItem {
  question: string;
  answer: string;
  category: 'shoppers' | 'creators';
}

export const faqs: FAQItem[] = [
  // Shoppers
  {
    category: 'shoppers',
    question: 'How do I know this is genuinely handmade and not machine-made?',
    answer: 'Here is a little-known textile truth: commercial knitting can be automated by industrial machines, but CROCHET CANNOT BE REPRODUCED BY ANY MACHINE IN THE WORLD. Every genuine crochet stitch requires looping back through prior loops with a single hook, which mechanical looms cannot physically execute. If it is genuine crochet, a human being held a hook and made every single knot with their hands. Furthermore, every Sefung Crochet creation arrives with a signed maker card specifying the artisan name, location, and verified hours spent.'
  },
  {
    category: 'shoppers',
    question: 'Where do you deliver across Nepal and how long does it take?',
    answer: 'We deliver nationwide across all 7 provinces of Nepal. Inside the Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur), ready-to-ship orders arrive within 24 to 48 hours via our dedicated studio dispatch. Outside the Valley (Pokhara, Butwal, Chitwan, Dharan, Biratnagar, Nepalgunj, etc.), deliveries take 2 to 4 business days via verified express couriers.'
  },
  {
    category: 'shoppers',
    question: 'What payment methods do you accept?',
    answer: 'We accept eSewa, Khalti, Fonepay direct QR transfer, all major Visa/MasterCard debit/credit cards, and Cash on Delivery (COD) across Kathmandu Valley and major provincial hubs.'
  },
  {
    category: 'shoppers',
    question: 'What if the piece does not fit or looks different from photos?',
    answer: 'We offer a 7-Day Handcrafted Exchange Guarantee. Because our pieces are handmade with organic yarns, minor stitch variations are part of their human charm. However, if the fit or finish does not match your expectations, contact our Kathmandu studio on WhatsApp (+977 9801234567) within 7 days for an exchange or full refund.'
  },
  {
    category: 'shoppers',
    question: 'Can I request a custom size or specific yarn color?',
    answer: 'Yes! Over 60% of our artisans accept custom commissions. Simply visit any product detail page and click "Request Custom Dimension / Color" or reach out through our Contact page. We will coordinate directly with the artisan and provide an exact timeline and quotation.'
  },

  // Creators
  {
    category: 'creators',
    question: 'How does selling through Sefung Crochet work for independent crochet creators?',
    answer: 'Sefung Crochet is designed so you can focus 100% on what you love: designing and hooking yarn. When you join Sefung Crochet, you do not need to worry about product photography, customer disputes, courier pickups, packaging boxes, or building websites. You create the pieces, our Kathmandu studio handles professional photoshoots, brand packaging, nationwide delivery, and customer service.'
  },
  {
    category: 'creators',
    question: 'What percentage of the sales price do I keep?',
    answer: 'Creators keep 80% to 85% of the retail selling price. Sefung Crochet charges a transparent 15-20% platform share that covers studio photography, high-grade eco-packaging, payment gateway processing fees, customer support, and marketing. There are zero listing fees or upfront costs.'
  },
  {
    category: 'creators',
    question: 'How and when do I get paid?',
    answer: 'Artisan payouts are processed weekly every Sunday directly into your eSewa, Khalti, or Nepali bank account. You receive an itemized breakdown of pieces sold, shipping status, and earnings in your maker dashboard.'
  },
  {
    category: 'creators',
    question: 'Do I have to live in Kathmandu to sell through Sefung Crochet?',
    answer: 'Not at all! We actively partner with talented crochet artisans from Pokhara, Dharan, Butwal, Hetauda, Chitwan, and rural cooperatives across Nepal. We coordinate inbound postal dispatch for your finished pieces to our central quality-check studio in Patan.'
  },
  {
    category: 'creators',
    question: 'What quality standards does Sefung Crochet look for during application?',
    answer: 'We prioritize clean stitch tension, secure yarn weavings (no unraveling ends), choice of quality yarns (cotton, bamboo, merino, linen preferred over low-grade plastic acrylics), and consistent sizing. We also provide free guidance to help applicants refine their finishing techniques.'
  }
];

