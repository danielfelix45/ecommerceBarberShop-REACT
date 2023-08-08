import {useEffect, useState, useContext} from 'react';

import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { CartContext } from '../../contexts/CartContext';
import {BsCartPlus} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export interface IProductProps{
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home(){
  const {addItemCart} = useContext(CartContext);
  const [products, setProducts] = useState<IProductProps[]>([]);

  useEffect(() => {
    async function getProducts(){
      const response = await api.get('/products');
      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddItemCart(product: IProductProps){
    toast.success('Produto adicionado!', {
      style:{
        borderRadius: 10,
        backgroundColor: '#16a34a',
        color: '#fff'
      }
    })
    addItemCart(product);
  }

  return(
    <>
      <main className='w-full max-w-7xl px-4 mx-auto min-h-screen'>
        <h1 className='font-bold text-2xl mb-4 mt-10 text-center'>Os melhores produtos para sua barbearia</h1>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
          {products.map((product) =>(
            <section key={product.id} className='w-full border p-2 rounded-lg shadow-lg'>
              <Link to={`/product/${product.id}`}>
                <img 
                  className='w-full max-h-70 mb-2 transform transition-all hover:scale-105' 
                  src={product.cover} 
                  alt={product.title} 
                />
                <p className='font-medium mt-1 mb-2'>{product.title}</p>
              </Link>

              <div className='flex gap-3 items-center'>
                <strong className='text-zinc-700/90'>{product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</strong>
                <button className='bg-zinc-900 p-1 rounded' onClick={() => handleAddItemCart(product)}>
                  <BsCartPlus size={20} color='#fff'/>
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}