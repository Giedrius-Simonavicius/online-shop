import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const ShoppingCartContext = createContext({
  cartArr: [],
  shippingInfo: {},
  setCartArr() {},
  setShippingInfo() {},
  getItemQuantity() {},
  increaseCartQuantity() {},
  decreaseCartQuantity() {},
  removeFromCart() {},
  getCartQuantity() {},
  setDeliveryFee() {},
  deliveryFee: [],
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

  const [shippingInfo, setShippingInfo] = useState({});
  const [deliveryFee, setDeliveryFee] = useState(0);

  function getItemQuantity(uid) {
    return cartArr.find((item) => item.uid === uid)?.quantity || 0;
  }

  function getCartQuantity() {
    let totalQuantity = 0;
    cartArr.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }

  function increaseCartQuantity(uid, inStock, message, availableQty) {
    setCartArr((currentItems) => {
      const existingItem = currentItems.find((item) => item.uid === uid);
      const currentQuantity = existingItem ? existingItem.quantity : 0;

      if (existingItem == null && inStock) {
        message && toast.success(message);
        return [...currentItems, { uid, quantity: currentQuantity + 1 }];
      } else if (existingItem == null && !inStock) {
        message && toast.error('Out of stock');
        return currentItems;
      } else {
        if (currentQuantity < availableQty) {
          message && toast.success(message);
          return currentItems.map((item) =>
            item.uid === uid ? { ...item, quantity: item.quantity + 1 } : item,
          );
        } else {
          message && toast.error('Maximum available quantity reached');
          return currentItems;
        }
      }
    });
  }

  function decreaseCartQuantity(uid, message) {
    setCartArr((currentItems) => {
      if (currentItems.find((item) => item.uid === uid)?.quantity === 1) {
        message && toast.success(message);
        return currentItems.filter((item) => item.uid !== uid);
      } else {
        message && toast.success(message);
        return currentItems.map((item) => {
          if (item.uid === uid) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(uid) {
    setCartArr((currentItems) => {
      const updatedCart = currentItems.filter((item) => item.uid !== uid);
      toast.success('item removed');
      return updatedCart;
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
    shippingInfo,
    setShippingInfo,
    setDeliveryFee,
    deliveryFee,
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
