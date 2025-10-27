import { Product, CartItem, Category, Brand, Color } from '../types';

// Product utilities
export const formatPrice = (price: number): string => {
  return `${price.toLocaleString('vi-VN')} đ`;
};

export const calculateDiscount = (originalPrice: number, discountPercent: number): number => {
  return originalPrice * (1 - discountPercent / 100);
};

export const getProductById = (products: Product[], id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const filterProductsByCategory = (products: Product[], category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const filterProductsByBrand = (products: Product[], brands: string[]): Product[] => {
  if (brands.length === 0) return products;
  return products.filter(product => brands.includes(product.brand));
};

export const filterProductsByPriceRange = (products: Product[], min: number, max: number): Product[] => {
  return products.filter(product => product.price >= min && product.price <= max);
};

export const searchProducts = (products: Product[], query: string): Product[] => {
  if (!query.trim()) return products;
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description?.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery)
  );
};

// Cart utilities
export const addToCart = (cartItems: CartItem[], product: Product, quantity: number = 1): CartItem[] => {
  const existingItem = cartItems.find(item => item.product.id === product.id);
  if (existingItem) {
    return cartItems.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...cartItems, { product, quantity }];
};

export const removeFromCart = (cartItems: CartItem[], productId: number): CartItem[] => {
  return cartItems.filter(item => item.product.id !== productId);
};

export const updateCartQuantity = (cartItems: CartItem[], productId: number, quantity: number): CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart(cartItems, productId);
  }
  return cartItems.map(item =>
    item.product.id === productId ? { ...item, quantity } : item
  );
};

export const calculateCartTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

export const calculateCartItemCount = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Form utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

// Local storage utilities
export const saveToLocalStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

// URL utilities
export const generateProductUrl = (productId: number): string => {
  return `/product/${productId}`;
};

export const generateCategoryUrl = (category: string): string => {
  return `/shop?category=${encodeURIComponent(category)}`;
};

// Rating utilities
export const generateStars = (rating: number): string[] => {
  return Array.from({ length: 5 }, (_, i) => i < rating ? 'star' : 'star-o');
};

export const calculateAverageRating = (ratings: number[]): number => {
  if (ratings.length === 0) return 0;
  return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
};

// Date utilities
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const isNewProduct = (createdDate: Date, daysThreshold: number = 7): boolean => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - createdDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= daysThreshold;
};

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
