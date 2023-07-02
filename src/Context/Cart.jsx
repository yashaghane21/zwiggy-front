import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([])


  useEffect(() => {

    let existingCartitem = localStorage.getItem("cart");
    if (existingCartitem) setcart(JSON.parse(existingCartitem));



  }, [])



  return (
    <CartContext.Provider value={[cart, setcart]}>
      {children}
    </CartContext.Provider>
  );


};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider }