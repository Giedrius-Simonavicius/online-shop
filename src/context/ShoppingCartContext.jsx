import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ShoppingCartContext = createContext({
  cartArr: [],
  setCartArr() {},
});

function ShoppingCartProvider({ children }) {
  const [cartArr, setCartArr] = useState([]);

  function getItemQantity(id) {
    return cartArr.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQantity(id) {
    setCartArr((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQantity(id) {
    setCartArr((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
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
