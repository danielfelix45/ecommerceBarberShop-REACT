import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import {FiShoppingCart, FiSearch} from 'react-icons/fi';
import { IProductProps } from "../../pages/home";


export function Header(){
  const {cartAmount} = useContext(CartContext);

  return(
    <header className="w-full bg-gray-600">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link className="font-bold text-2xl text-slate-100" to={'/'}>
          Barber<span className="text-green-400">Shop</span>
        </Link>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center">
            <input 
              className="px-2 rounded-s" 
              type="search" 
              placeholder="Pesquise aqui..."
            />
            <button className="bg-green-400 flex items-center justify-center gap-1 px-2 text-gray-600 font-medium rounded-e">
              Buscar
              <FiSearch size={18} color='#555' />
            </button>
          </div>
          <Link className="relative" to={'/cart'}>
            <FiShoppingCart size={24} color='#f1f5f9'/>
            {cartAmount > 0 && (
              <span 
                className="absolute -top-3 -right-3 px-2.5 bg-green-400 rounded-full w-6 h-6 flex items-center justify-center font-bold text-gray-600 text-xs"
              >
                {cartAmount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}