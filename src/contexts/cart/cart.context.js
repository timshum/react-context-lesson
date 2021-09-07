import { createContext } from 'react';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

export default CartContext;
