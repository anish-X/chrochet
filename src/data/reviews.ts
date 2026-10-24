import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 'rev-1',
    productId: 'patan-heritage-cardigan',
    author: 'Aayusha Shrestha',
    city: 'Sanepa, Lalitpur',
    rating: 5,
    date: '2 weeks ago',
    title: 'The texture is breathtaking in person',
    comment: 'I was hesitant about ordering clothing online, but knowing this was hand-stitched by Sunita Prajapati made all the difference. The cardboard packaging came with a handwritten tag stating the 24 hours spent making it. The cotton feels like a cloud.',
    verifiedBuyer: true
  },
  {
    id: 'rev-2',
    productId: 'terracotta-granny-square-tote',
    author: 'Dr. Nirakar Pandey',
    city: 'Baluwatar, Kathmandu',
    rating: 5,
    date: '1 month ago',
    title: 'Gifted to my sister — she takes it everywhere',
    comment: 'The stitching on this tote bag is immensely sturdy. Most crochet bags stretch out when you put heavier books or a water bottle in them, but the reinforced straps and bottom gusset keep the shape perfectly.',
    verifiedBuyer: true
  },
  {
    id: 'rev-3',
    productId: 'lotus-amigurumi-baby-keepsake',
    author: 'Puja Tamang',
    city: 'Lakeside, Pokhara',
    rating: 5,
    date: '3 weeks ago',
    title: 'Safe for my 4-month-old niece',
    comment: 'Finding genuine baby-safe handmade toys in Nepal without hard plastic pieces is almost impossible. The bamboo yarn is silky smooth, and Dikshya did embroidered eyes. Delivered to Pokhara in just 2 days.',
    verifiedBuyer: true
  },
  {
    id: 'rev-4',
    productId: 'boudha-yak-wool-ribbed-beanie',
    author: 'Samir Rana',
    city: 'Boudha, Kathmandu',
    rating: 5,
    date: 'Last month',
    title: 'Actual high-altitude warmth',
    comment: 'Took this beanie on the Langtang trek. Kept my ears completely warm in sub-zero wind. You can immediately feel that this is genuine yak-wool blend, not cheap acrylic yarn from the wholesale bazaar.',
    verifiedBuyer: true
  },
  {
    id: 'rev-5',
    productId: 'newari-dhaka-hexagon-coasters',
    author: 'Shristi Manandhar',
    city: 'Patan Durbar Square',
    rating: 5,
    date: '10 days ago',
    title: 'The subtle Newari geometric inspiration is genius',
    comment: 'They look stunning on our dark teakwood dining table. Absorb tea spills immediately and wash super cleanly. Sefung Crochet is doing wonderful work supporting independent makers.',
    verifiedBuyer: true
  }
];

export const getReviewsForProduct = (productId: string): Review[] => {
  return reviews.filter(r => r.productId === productId);
};

