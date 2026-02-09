export const WISHLIST_UPDATE_EVENT = 'wishlist-update';

export interface WishlistItem {
  id: string;
  image: string;
  alt: string;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  category: string;
  quantity: number;
}

export const getWishlist = (): WishlistItem[] => {
  if (typeof window === 'undefined') return [];
  const wishlist = localStorage.getItem('wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (product: WishlistItem): boolean => {
  try {
    const wishlist = getWishlist();
    if (!wishlist.some(item => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      window.dispatchEvent(new Event(WISHLIST_UPDATE_EVENT));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return false;
  }
};

export const removeFromWishlist = (productId: string): boolean => {
  try {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event(WISHLIST_UPDATE_EVENT));
    return true;
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return false;
  }
};

export const isInWishlist = (productId: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
}; 