import {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { IProductProps } from '../home';
import {BsCartPlus} from 'react-icons/bs';

export function ProductDetail(){
  const {id} =useParams();
  const {addItemCart} = useContext(CartContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProductProps>();

  useEffect(() => {
    async function getProduct(){
      const response = await api.get(`/products/${id}`)
      setProduct(response.data);
    }

    getProduct();
  }, [id])

  function handleItem(product: IProductProps){
    toast.success('Produto adicionado!', {
      style:{
        borderRadius: 10,
        backgroundColor: '#16a34a',
        color: '#fff'
      }
    })
    addItemCart(product);
    navigate('/cart');
  }

  return(
    <>
      <main className='w-full max-w-7xl px-4 mx-auto my-6 min-h-screen'>
        {product && (
          <section key={product.id} className='w-full'>
            <div className='flex flex-col lg:flex-row'>
              <img
                className='flex-1 w-full max-h-72 object-contain' 
                src={product.cover} 
                alt={product.title} 
              />

              <div className='flex-1'>
                <p className='font-bold text-2xl mt-4 mb-2'>{product.title}</p>
                <p className='my-4'>{product.description}</p>
                <strong className='text-zinc-700/90 text-xl'>{product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</strong>
                <button onClick={() => handleItem(product)} className='bg-zinc-900 p-1 rounded ml-3'>
                  <BsCartPlus size={20} color='#fff' />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}