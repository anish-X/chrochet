import { Artisan } from '../types';

export const artisans: Artisan[] = [
  {
    id: 'sunita-prajapati',
    name: 'Sunita Prajapati',
    nepaliName: 'सुनिता प्रजापति',
    location: 'Suryabinayak, Bhaktapur',
    district: 'Bhaktapur',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Sunita has been hooking yarn since age 15, learning traditional chain stitches from her grandmother in Bhaktapur. She is renowned for her intricate floral granny square layouts and sturdy heritage market totes.',
    quote: 'Crochet taught me that patience can be held in your hands. When someone in Kathmandu wears a cardigan I spent 20 hours stitching, a piece of my peace walks with them.',
    yearsExperience: 8,
    specialty: 'Granny Square Construction & Wearables',
    totalCreations: 68,
    rating: 4.95,
  },
  {
    id: 'prerana-thapa',
    name: 'Prerana Thapa',
    nepaliName: 'प्रेरणा थापा',
    location: 'Lakeside, Pokhara',
    district: 'Kaski',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Drawing inspiration from the Annapurna mountain reflections and Phewa Lake flora, Prerana creates botanicals and sun-ready bucket hats using 100% natural unbleached cotton.',
    quote: 'No industrial factory machine on earth can crochet. Every single knot is made by human breath and hands. That gives our craft its soul.',
    yearsExperience: 5,
    specialty: 'Floral Botanicals & Sun Hats',
    totalCreations: 52,
    rating: 4.9,
  },
  {
    id: 'dikshya-gurung',
    name: 'Dikshya Gurung',
    nepaliName: 'दीक्षा गुरुङ',
    location: 'Mangal Bazaar, Patan',
    district: 'Lalitpur',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'A former architecture student turned fiber artist, Dikshya applies geometric symmetry to plush amigurumi keepsakes and children’s heirloom toys using certified hypoallergenic bamboo yarn.',
    quote: 'Children hold crochet toys differently because the texture is alive and warm. Sefung Crochet lets me reach mothers all over Nepal while staying in my studio.',
    yearsExperience: 6,
    specialty: 'Amigurumi Keepsakes & Nursery Decor',
    totalCreations: 94,
    rating: 5.0,
  },
  {
    id: 'pema-dolma',
    name: 'Pema Dolma Sherpa',
    nepaliName: 'पेमा डोल्मा शेर्पा',
    location: 'Boudhanath, Kathmandu',
    district: 'Kathmandu',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    bio: 'Pema specializes in heavy-gauge winter accessories using ethical Himalayan yak wool blends and merino. Her cable-ribbed stitches provide exceptional warmth in high altitudes.',
    quote: 'In our cold winters, a tight crochet rib is like a warm woodfire stove. I take pride in making pieces that will last for 10 years without fraying.',
    yearsExperience: 11,
    specialty: 'Heavy-Gauge Ribbed Wear & Yak Wool Blends',
    totalCreations: 120,
    rating: 4.98,
  },
  {
    id: 'anjali-shakya',
    name: 'Anjali Shakya',
    nepaliName: 'अञ्जली शाक्य',
    location: 'Jhamsikhel, Lalitpur',
    district: 'Lalitpur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Anjali merges Newari geometric textile heritage with modern minimalist home decor. Her hexagonal coasters and textured table runners bring earthy warmth to contemporary Nepali homes.',
    quote: 'Handmade decor slows down a room. When you set your morning chiya cup on a hand-hooked coaster, you remember to breathe.',
    yearsExperience: 4,
    specialty: 'Home Living Accents & Tableware',
    totalCreations: 45,
    rating: 4.88,
  }
];

export const getArtisanById = (id: string): Artisan | undefined => {
  return artisans.find(a => a.id === id);
};

