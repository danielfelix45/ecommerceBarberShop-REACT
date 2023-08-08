import {ReactNode, createContext, useState} from 'react';
import { IProductProps } from '../pages/home';

// Aqui vai o que pode ser exportado.
interface ICartContextData{
  cart: ICartProps[];
  cartAmount: number; // Refere-se a quantidade de items no cart.
  addItemCart: (newItem: IProductProps) => void;
  removeItemCart: (prduct: ICartProps) => void;
  totalCart: string;
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
  const [totalCart, setTotalCart] = useState('');

  function addItemCart(newItem: IProductProps){
    // Verifica se o item é igual um item já existente no cart. (Se não é igual retorna -1).
    const indexItem = cart.findIndex(item => item.id === newItem.id);
    // Se já existe um item igual no cart, adiciona +1 e soma o total.
    if(indexItem !== -1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }
    // Se não existe um item igual, adiciona um novo item no cart.
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }
    setCart(products => [...products, data]);
    totalResultCart([...cart, data]);
  };

  function removeItemCart(product: ICartProps){
    const indexItem = cart.findIndex(item => item.id === product.id);
    // Aqui diminui 1 item do amount
    if(cart[indexItem]?.amount > 1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  };

  function totalResultCart(items: ICartProps[]){
    let myCart = items;

    let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0);
    let resultFormated = result.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    setTotalCart(resultFormated);
  };

  return(
    <CartContext.Provider 
      value={{
        cart, 
        cartAmount: cart.length,
        addItemCart, 
        removeItemCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;