import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

 const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;
 console.log(" VITE Backend URL:", BACKEND_URL);


const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user,setUser] = useState(null);
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    const fetchProduct = async()=>{
      const res = await axios.get(`${BACKEND_URL}/product/get`);
      setProducts(res.data)
    }
    fetchProduct();

  },[])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
    toast.success("Product removed from cart");
  };
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,0
  );
  
  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if(storedUser){
      localStorage.setItem("user",JSON.parse(user))
    }
   },[])

   const loginUser = (user)=>{
    setUser(user);
    localStorage.setItem("user",JSON.stringify(user))
   }

   const logoutUser = () =>{
    setUser(null);
    localStorage.removeItem("user")
   }

  const contextValue = {
    products,
    addToCart,
    removeFromCart,
    cart,
    cartCount,
    grandTotal,
    user,
    loginUser,
    logoutUser,

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
