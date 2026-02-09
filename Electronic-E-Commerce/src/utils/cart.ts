export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

// Custom event for cart updates
export const CART_UPDATE_EVENT = 'cartUpdate';

// Helper function to dispatch cart update event
const dispatchCartUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CART_UPDATE_EVENT));
  }
};

export const getCartItems = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

export const addToCart = (item: CartItem) => {
  try {
    const currentCart = getCartItems();
    const existingItem = currentCart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = currentCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([...currentCart, { ...item, quantity: 1 }]));
    }
    dispatchCartUpdate();
    return true;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return false;
  }
};

export const removeFromCart = (itemId: string) => {
  try {
    const currentCart = getCartItems();
    const updatedCart = currentCart.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    dispatchCartUpdate();
    return true;
  } catch (error) {
    console.error('Error removing from cart:', error);
    return false;
  }
};

export const updateCartItemQuantity = (itemId: string, quantity: number) => {
  try {
    const currentCart = getCartItems();
    const updatedCart = currentCart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    dispatchCartUpdate();
    return true;
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    return false;
  }
};

export const getCartTotal = (): number => {
  const cartItems = getCartItems();
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartItemCount = (): number => {
  const cartItems = getCartItems();
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const clearCart = () => {
  try {
    localStorage.removeItem('cart');
    dispatchCartUpdate();
    return true;
  } catch (error) {
    console.error('Error clearing cart:', error);
    return false;
  }
}; 