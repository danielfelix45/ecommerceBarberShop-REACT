import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart(){
  const {cart} = useContext(CartContext);

  return(
    <>
      <div className="w-full max-w-7xl mx-auto" >
        <h1 className="font-medium text-2xl text-center my-4">CARRINHO DE COMPRAS</h1>

        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <p className="font-medium ">Seu carrinho está vazio...</p>
            <Link className="bg-green-400 my-3 p-1 px-3 text-gray-600 font-medium rounded" to={'/'}>
              Acessar produtos
            </Link>
          </div>
        )}

        {cart.map((product) => (
          <section className="flex items-center justify-between border-b-2 border-gray-300">
            <img
              className="w-28"
              src={product.cover} 
              alt={product.title} 
            />
            <strong>Preço: {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</strong>

            <div className="flex items-center justify-center gap-3">
              <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">-</button>
                {product.amount}
              <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">+</button>
            </div>

            <strong className="float-right">SubTotal: {product.total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</strong>
          </section>
        ))}

        {cart.length !== 0 && <p className="font-bold mt-4">Total: R$1.000</p>}
      </div>
    </>
  )
}