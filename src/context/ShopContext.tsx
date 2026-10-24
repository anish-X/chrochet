import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, Category } from '../types';
import { products } from '../data/products';

interface Toast {
  id: string;
  title: string;
  subtitle?: string;
  type?: 'success' | 'info' | 'terracotta';
}

interface ShopContextType {
  currentPage: string;
  currentProductId: string | null;
  selectedCategory: Category;
  cart: CartItem[];
  cartOpen: boolean;
  wishlist: string[];
  searchQuery: string;
  quickViewProduct: Product | null;
  toast: Toast | null;
  subtotal: number;
  cartCount: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  navigateTo: (page: string, productId?: string, category?: Category) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: Category) => void;
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  setQuickViewProduct: (product: Product | null) => void;
  showToast: (title: string, subtitle?: string, type?: 'success' | 'info' | 'terracotta') => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sefung_cart') || localStorage.getItem('mauri_cart');
      return saved ? JSON.parse(saved) : [
        // Seed initial cart item to show high-fidelity experience immediately
        {
          product: products[1], // Terracotta Granny Square Tote
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sefung_wishlist') || localStorage.getItem('mauri_wishlist');
      return saved ? JSON.parse(saved) : ['patan-heritage-cardigan'];
    } catch {
      return [];
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<Toast | null>(null);

  // Sync to URL parameters on load and popstate
  useEffect(() => {
    const handleUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('p') || 'home';
      const prodId = params.get('id');
      const cat = (params.get('cat') as Category) || 'all';

      setCurrentPage(page);
      if (prodId) setCurrentProductId(prodId);
      if (cat) setSelectedCategory(cat);
    };

    handleUrl();
    window.addEventListener('popstate', handleUrl);
    return () => window.removeEventListener('popstate', handleUrl);
  }, []);

  // Save cart & wishlist
  useEffect(() => {
    try {
      localStorage.setItem('sefung_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('sefung_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const navigateTo = (page: string, productId?: string, category?: Category) => {
    setCurrentPage(page);
    if (productId !== undefined) {
      setCurrentProductId(productId);
    }
    if (category !== undefined) {
      setSelectedCategory(category);
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser URL query
    const params = new URLSearchParams();
    if (page !== 'home') params.set('p', page);
    if (productId) params.set('id', productId);
    if (category && category !== 'all') params.set('cat', category);

    const queryString = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.pushState({}, '', queryString);
  };

  const showToast = (title: string, subtitle?: string, type: 'success' | 'info' | 'terracotta' = 'success') => {
    const newToast = { id: Date.now().toString(), title, subtitle, type };
    setToast(newToast);
    setTimeout(() => {
      setToast(prev => (prev?.id === newToast.id ? null : prev));
    }, 3800);
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, quantity, selectedColor }];
    });

    showToast(
      'Added to Bag',
      `${product.title} (${quantity}) is in your woven bag`,
      'terracotta'
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Saved Pieces', undefined, 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to Wishlist', 'Kept in your curated favorites', 'terracotta');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const freeDeliveryThreshold = 2500;
  const deliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : 120;

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        currentProductId,
        selectedCategory,
        cart,
        cartOpen,
        wishlist,
        searchQuery,
        quickViewProduct,
        toast,
        subtotal,
        cartCount,
        deliveryFee,
        freeDeliveryThreshold,
        navigateTo,
        setSearchQuery,
        setSelectedCategory,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCartOpen,
        toggleWishlist,
        isInWishlist,
        setQuickViewProduct,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within ShopProvider');
  return context;
};

