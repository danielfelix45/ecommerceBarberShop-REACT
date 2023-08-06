import {ReactNode, createContext, useState} from 'react';
import { IProductProps } from '../pages/home';

// Aqui vai o que pode ser exportado.
interface ICartContextData{
  cart: ICartProps[];
  cartAmount: number; // Refere-se a quantidade de items no cart.
  addItemCart: (newItem: IProductProps) => void;
}

interface ICartProps{
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface ICartProviderProps{
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContextData);

function CartProvider({children}: ICartProviderProps){
  const [cart, setCart] = useState<ICartProps[]>([]);

  // Adicionar item no cart.
  function addItemCart(newItem: IProductProps){
    // Verifica se o item é igual um item já existente no cart. (Se não é igual retorna -1).
    const indexItem = cart.findIndex(item => item.id === newItem.id);
    // Se já existe um item igual no cart, adiciona +1 e soma o total.
    if(indexItem !== -1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return;
    }
    // Se não existe um item igual, adiciona um novo item no cart.
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }
    setCart(products => [...products, data]);
  }

  return(
    <CartContext.Provider 
      value={{
        cart, 
        cartAmount: cart.length,
        addItemCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;