export type Category = 
  | 'all'
  | 'wearables'
  | 'bags'
  | 'home'
  | 'amigurumi'
  | 'botanicals';

export interface Artisan {
  id: string;
  name: string;
  nepaliName?: string;
  location: string;
  district: string;
  avatar: string;
  bio: string;
  quote: string;
  yearsExperience: number;
  specialty: string;
  totalCreations: number;
  rating: number;
}

export interface Product {
  id: string;
  title: string;
  nepaliTitle?: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: Category;
  artisanId: string;
  artisan: Artisan;
  images: string[];
  description: string;
  features: string[];
  yarnType: string;
  hookSize: string;
  hoursToMake: number;
  dimensions: string;
  careInstructions: string;
  readyToShip: boolean;
  leadTimeDays: number;
  stock: number;
  isFeatured?: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface FilterState {
  category: Category;
  maxPrice: number;
  materials: string[];
  locations: string[];
  readyToShipOnly: boolean;
  searchQuery: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest';
}

export interface CreatorApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  experienceYears: string;
  specialties: string[];
  instagramOrPortfolio: string;
  story: string;
  sampleDescription: string;
}

