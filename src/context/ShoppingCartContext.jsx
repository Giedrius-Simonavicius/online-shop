import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const ShoppingCartContext = createContext({
  cartArr: [],
  setCartArr() {},
  getItemQuantity() {},
  increaseCartQuantity() {},
  decreaseCartQuantity() {},
  removeFromCart() {},
  getCartQuantity() {},
});
const localShoppingCartKey = 'LOCAL_CART';

function ShoppingCartProvider({ children }) {
  const cartFromLocalStorage = localStorage.getItem(localShoppingCartKey);

  const [cartArr, setCartArr] = useState(() => {
    try {
      return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);

      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(localShoppingCartKey, JSON.stringify(cartArr));
    } catch (error) {
      console.error('Error storing cart in localStorage:', error);
    }
  }, [cartArr]);

  function getItemQuantity(id) {
    return cartArr.find((item) => item.id === id)?.quantity || 0;
  }
  function getCartQuantity() {
    let totalQuantity = 0;
    cartArr.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }

  function increaseCartQuantity(id, inStock, message, availableQty) {
    setCartArr((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      const currentQuantity = existingItem ? existingItem.quantity : 0;

      if (existingItem == null && inStock) {
        message && toast.success(message);
        return [...currentItems, { id, quantity: currentQuantity + 1 }];
      } else if (existingItem == null && !inStock) {
        message && toast.error(message);
        return currentItems;
      } else {
        if (currentQuantity < availableQty) {
          message && toast.success(message);
          return currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          );
        } else {
          message && toast.error('Maximum available quantity reached');
          return currentItems;
        }
      }
    });
  }

  function decreaseCartQuantity(id, message) {
    setCartArr((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        message && toast.error(message);
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartArr((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }
  const ShoppingCartCtx = {
    cartArr,
    setCartArr,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getCartQuantity,
  };
  return (
    <ShoppingCartContext.Provider value={ShoppingCartCtx}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
export function useShoppingCartCtx() {
  return useContext(ShoppingCartContext);
}
ShoppingCartProvider.propTypes = {
  children: PropTypes.node,
};
